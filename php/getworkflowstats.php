<?php
/*   Get Workflow Results/Stats for The Coaching ExcelleRater
     Last Modified Date: 25/9/2018
     version: 1.0
	   1.0 - Initial script created.
			 This script receives a JSON object of the coachid, modeled as:
       {"coachid": x}
			 It then uses RedBean ORM, to return all the Workflows created by the Coach, which have been completed by Players
       It responds with a JSON object, which will be modeled in either of 3 fashions (relative to if the player has been assigned workflows, or an error arises):
       1) [{"workflowid": x, "wfdate": xxx,xx x xxxx, "wfname":xxxxx, "personid":x, "playername":xxxxxxxx, "totalsocre":x out of x),
           {"workflowid": x, "wfdate": xxx,xx x xxxx, "wfname":xxxxx, "personid":x, "playername":xxxxxxxx, "totalscore":x out of x)]
       3) {"success": false, "error": xxxxxxxxxx}

       N.B: 'TotalScore' is a string, which informs the score the player got, out of the maximum possible score.  for example: '2 out of 6' would signify the
       workflow had 2 videos & the player only scored a total of 2 points across the 2 videos in the workflow

*/

//ini_set('display_errors', 'On');
//error_reporting(E_ALL | E_STRICT);

require_once ("connect.php");
require_once ("rb.php");

try {

  $postdata = file_get_contents("php://input");
  $coach = json_decode($postdata);

  $newresult = "";
  $coachid = $coach->coachid;
  //$coachid = "1";

  $result = R::getAll("SELECT workflow.id, workflow.wfdate, workflow.wfname, wfteamlist.personid, wfteamlist.totalscore, wfteamlist.complete FROM workflow INNER JOIN wfteamlist ON workflow.id = wfteamlist.workflowid WHERE workflow.coachid = ".$coachid." AND wfteamlist.complete = 1");

  //Check if $result returned anything... or basically, if the coach had created any workflows yet?
  $emptyresult = array_filter($result);
  if (empty($emptyresult)) {
    echo json_encode(array("success"=>false, "data"=>"I'm sorry, but you haven't created any Worfklows, for any players yet."));
    die();
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

    //$wfscore = R::getRow("SELECT COUNT(videoid) AS videocount FROM wfanswers WHERE workflowid = ".wfstats[id]." AND personid = ".wfstats[personid]);
    $wfscore = R::count("wfanswers", "workflowid like ? AND personid like ?", [$wfstats['id'], $wfstats['personid']]);
    $totals = $wfscore * 3;
    $data->totalscore = $wfstats[totalscore]." out of ".$totals;

    $newresult .= json_encode($data).",";
  }

  R::close();

  //add brackets to the start & end to proper json-ify the data for the frontend & remove the last trailing comma
  $strresult = "[".rtrim($newresult, ",")."]";
  echo $strresult;


} catch (Exception $e) {
  echo json_encode(array("success"=>false, "data"=>$e));
}

?>
