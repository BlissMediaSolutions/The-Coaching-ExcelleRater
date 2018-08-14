<?php
/*   Get Team Players for The Coaching ExcelleRater
     Last Modified Date: 13/8/2018
     version: 1.0
	   1.0 - Initial script created.
			 This script receives a JSON object of the teamid, modeled as:
       {"teamid": x}
			 It then uses RedBean ORM, to return all team players (coaches not included) of the given team.
       It responds with a JSON object, which will be modeled in either of 2 fashions (relative to if the teamid exists, or an error arises):
       {"success": true, "personid": x, "username": xxxxxx, "fullname": xxxxxx}
       {"success": false, "error": xxxxxxxxxx}
*/

//ini_set('display_errors', 'On');
//error_reporting(E_ALL | E_STRICT);

require_once ("connect.php");
require_once ("rb.php");

try {

  $postdata = file_get_contents("php://input");
  $team = json_decode($postdata);

  $newresult = "";
  $teamid = $team->teamid;
  //$teamid = "1";

  $result = R::getAll("SELECT teamlist.personid, teamlist.username, person.fullname FROM teamlist INNER JOIN person ON person.id = teamlist.personid WHERE teamlist.roleid = 2 AND teamlist.teamid = ".$teamid);

  //iterate thru each row, json encode the row & add it to a string.
	foreach ($result as $ros) {
    $newresult .= json_encode($ros).",";
  }

	R::close();

	//add brackets to the start & end to proper json-ify the data for the frontend & remove the last trailing comma
	$strresult = "[".rtrim($newresult, ",")."]";
	echo $strresult;

  } catch (Exception $e) {
		echo json_encode(array("error"=>$e));
	}

?>
