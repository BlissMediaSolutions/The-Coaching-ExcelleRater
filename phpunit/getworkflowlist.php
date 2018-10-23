<?php
/*   Unit Test for Getting the Workflow List
     Last Modified Date: 22/10/2018
     version: 1.0
*/

require_once ("connect.php");
require_once ("rb.php");

function test_getWorkFlowList($playerid)
{

  $newresult = "";
  $data = new \stdClass();
  //$playerid = $player->playerid;
  //$playerid = "2";

  $result = R::getAll("SELECT workflow.id, workflow.wfdate, workflow.wfname, workflow.coachid, wfteamlist.complete FROM workflow INNER JOIN wfteamlist ON workflow.id = wfteamlist.workflowid WHERE wfteamlist.personid = ".$playerid." AND wfteamlist.complete = 0");

  //Check if $result returned anything... or basically, has the player been assigned to a Workflow?
  $emptyresult = array_filter($result);
  if (empty($emptyresult)) {
    //echo json_encode(array("success"=>false, "data"=>"This player has not been assigned any Tasks."));
    //die();
    return false;
  }

  //The player has been assigned to 1 or more workflows.
  foreach ($result as $wflist) {
    $data->id = $wflist['id'];
    $thisDate = date_create($wflist['wfdate']);           //convert the String Date to a Date object
    $data->wfdate = date_format($thisDate, "D, F j, Y");  //format the Date object & add to object;
    $data->wfname = $wflist['wfname'];
    $data->coachid = $wflist['coachid'];

    $wfcoach = R::getRow("SELECT person.fullname FROM person INNER JOIN teamlist ON teamlist.personid = person.id WHERE teamlist.id = ".$wflist['coachid']);
    $data->coachname = $wfcoach['fullname'];

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
