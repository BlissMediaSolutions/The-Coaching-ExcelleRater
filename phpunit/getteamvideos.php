<?php

/*   Unit Test for Get Team Videos for The Coaching ExcelleRater
     Last Modified Date: 21/10/2018
     version: 1.0
*/

  require_once ("connect.php");
  require_once ("rb.php");

  function test_getTeamVideos($teamid)
  {

    //$teamid = $team->teamid;
    //$teamid = "1";
    //$newresult = "";

    $videos = R::find("video", "where teamid = ".$teamid);

    if (!empty($videos))
    {
      return true;
    } else {
      return false;
    }

    //foreach ($videos as $vid) {
    //  $newresult .= json_encode($vid).",";
    //}

    R::close();

  	//add brackets to the start & end to proper json-ify the data for the frontend & remove the last trailing comma
  	//$strresult = "[".rtrim($newresult, ",")."]";
  	//echo $strresult;


  }

 ?>
