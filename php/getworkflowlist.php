<?php
/*   Get Workflow List for The Coaching ExcelleRater
     Last Modified Date: 2/9/2018
     version: 1.0
	   1.0 - Initial script created.
			 This script receives a JSON object of the playerid, modeled as:
       {"playerid": x}
			 It then uses RedBean ORM, to return all the Workflows which the player has been allocated.
       It responds with a JSON object, which will be modeled in either of 3 fashions (relative to if the player has been assigned workflows, or an error arises):
       1) [{"id": x, "wfdate": xxxx-xx-xx, "wfname":xxxxx, "coachid":x),
           {"id": x, "wfdate": xxxx-xx-xx, "wfname":xxxxx, "coachid":x)]
       3) {"success": false, "error": xxxxxxxxxx}
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
  //$playerid = "3";

  $result = R::getAll("SELECT workflow.id, workflow.wfdate, workflow.wfname, workflow.coachid FROM workflow INNER JOIN wfteamlist ON workflow.id = wfteamlist.workflowid WHERE wfteamlist.personid = ".$playerid);

  //Check if $result returned anything... or basically, has the player been assigned to a Workflow?
  $emptyresult = array_filter($result);
  if (empty($emptyresult)) {
    echo json_encode(array("success"=>false, "data"=>"This player has not been assigned any Tasks."));
    die();
  }

  //The player has been assigned to 1 or more workflows.
  foreach ($result as $wflist) {
    $newresult .= json_encode($wflist).",";
  }

  R::close();

  //add brackets to the start & end to proper json-ify the data for the frontend & remove the last trailing comma
  $strresult = "[".rtrim($newresult, ",")."]";
  echo $strresult;


} catch (Exception $e) {
  echo json_encode(array("success"=>false, "data"=>$e));
}

?>
