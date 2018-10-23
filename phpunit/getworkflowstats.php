<?php
/*   Unit Test for Getting Workflow Results/Stats for The Coaching ExcelleRater
     Last Modified Date: 22/10/2018
     version: 1.0
*/

require_once ("connect.php");
require_once ("rb.php");

function test_getWorkFlowStats($coachid) {

  $newresult = "";
  $data = new \stdClass();
  //$coachid = $coach->coachid;
  //$coachid = "1";

  $result = R::getAll("SELECT workflow.id, workflow.wfdate, workflow.wfname, wfteamlist.personid, wfteamlist.totalscore, wfteamlist.complete FROM workflow INNER JOIN wfteamlist ON workflow.id = wfteamlist.workflowid WHERE workflow.coachid = ".$coachid." AND wfteamlist.complete = 1");

  //Check if $result returned anything... or basically, if the coach had created any workflows yet?
  $emptyresult = array_filter($result);
  if (empty($emptyresult)) {
    return false;
    //echo json_encode(array("success"=>false, "data"=>"I'm sorry, but you haven't created any Worfklows, for any players yet."));
    //die();
  }

  //1 or more Worfklows created by the coach, have been completed by players.
  foreach ($result as $wfstats) {
    $data->workflowid = $wfstats['id'];
    $thisDate = date_create($wfstats['wfdate']);           //convert the String Date to a Date object
    $data->wfdate = date_format($thisDate, "D, F j, Y");  //format the Date object & add to object;
    $data->wfname = $wfstats['wfname'];                   //The name of the Worklfow
    $data->playerid = $wfstats['personid'];               //The id of the player which completed the workflow

    $wfcoach = R::getRow("SELECT person.fullname FROM person INNER JOIN teamlist ON teamlist.personid = person.id WHERE teamlist.id = ".$wfstats['personid']);
    $data->playername = $wfcoach['fullname'];             //The fullname of the Player (relating to the playerid)

    $wfscore = R::count("wfanswers", "workflowid like ? AND personid like ?", [$wfstats['id'], $wfstats['personid']]);
    $totals = $wfscore * 3;
    $data->totalscore = $wfstats['totalscore']." out of ".$totals;

    $newresult .= json_encode($data).",";
  }

  R::close();

  if (!empty($newresult))
  {
    return true;
  } else {
    return false;
  }

  //add brackets to the start & end to proper json-ify the data for the frontend & remove the last trailing comma
  //$strresult = "[".rtrim($newresult, ",")."]";
  //echo $strresult;

}

?>
