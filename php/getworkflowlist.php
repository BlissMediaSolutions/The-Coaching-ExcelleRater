<?php
/*   Get Workflow List for The Coaching ExcelleRater
     Last Modified Date: 21/9/2018
     version: 1.1
	   1.0 - Initial script created.
			 This script receives a JSON object of the playerid, modeled as:
       {"playerid": x}
			 It then uses RedBean ORM, to return all the Workflows which the player has been allocated.
       It responds with a JSON object, which will be modeled in either of 3 fashions (relative to if the player has been assigned workflows, or an error arises):
       1) [{"id": x, "wfdate": xxxx-xx-xx, "wfname":xxxxx, "coachid":x),
           {"id": x, "wfdate": xxxx-xx-xx, "wfname":xxxxx, "coachid":x)]
       3) {"success": false, "error": xxxxxxxxxx}
    1.1 - Updated script to return formatted date ("Wed, August 29, 2018"), and the fullname of the Coach which created the workflow.  thus result:
       {"id": x, "wfdate": "Wed, August 29, 2018", "wfname":xxxxx, "coachid":x, "coachname": xxxxxxxx),
*/

//ini_set('display_errors', 'On');
//error_reporting(E_ALL | E_STRICT);

require_once ("connect.php");
require_once ("rb.php");

try {

  $postdata = file_get_contents("php://input");
  $player = json_decode($postdata);

  $newresult = "";
  $playerid = $player->playerid;
  //$playerid = "2";

  $result = R::getAll("SELECT workflow.id, workflow.wfdate, workflow.wfname, workflow.coachid FROM workflow INNER JOIN wfteamlist ON workflow.id = wfteamlist.workflowid WHERE wfteamlist.personid = ".$playerid);

  //Check if $result returned anything... or basically, has the player been assigned to a Workflow?
  $emptyresult = array_filter($result);
  if (empty($emptyresult)) {
    echo json_encode(array("success"=>false, "data"=>"This player has not been assigned any Tasks."));
    die();
  }

  //The player has been assigned to 1 or more workflows.
  foreach ($result as $wflist) {
    $data->id = $wflist['id'];
    $thisDate = date_create($wflist['wfdate']);           //convert the String Date to a Date object
    $data->wfdate = date_format($thisDate, "D, F j, Y");  //format the Date object & add to object;
    $data->wfname = $wflist['wfname'];
    $data->coachid = $wflist['coachid'];

    $wfcoach = R::getRow("SELECT person.fullname FROM person INNER JOIN teamlist ON teamlist.personid = person.id WHERE teamlist.id = ".$wflist[coachid]);
    $data->coachname = $wfcoach['fullname'];

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
