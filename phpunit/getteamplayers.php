<?php

/*   Unit Test for Get Team Players
     Last Modified Date: 21/10/2018
     version: 1.0
*/

require_once ("connect.php");
require_once ("rb.php");

function test_getTeamPlayer($teamid)
{

  $newresult = "";
  //$teamid = $team->teamid;
  //$teamid = "1";

  $result = R::getAll("SELECT teamlist.personid, teamlist.username, person.fullname FROM teamlist INNER JOIN person ON person.id = teamlist.personid WHERE teamlist.roleid = 2 AND teamlist.teamid = ".$teamid);

  //iterate thru each row, json encode the row & add it to a string.
  foreach ($result as $ros) {
    $newresult .= json_encode($ros).",";
  }

  R::close();

  //add brackets to the start & end to proper json-ify the data for the frontend & remove the last trailing comma
  //$strresult = "[".rtrim($newresult, ",")."]";
  //echo $strresult;

	//Check if newresult contains anything
    if (!empty($newresult))
    {
      return true;
    } else {
      return false;
    }
    //$newresult .= json_encode($ros).",";
  //}
}

?>
