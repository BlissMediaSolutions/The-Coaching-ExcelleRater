<?php
//ini_set('display_errors', 'On');
//error_reporting(E_ALL | E_STRICT);

/*   Get Team Videos for The Coaching ExcelleRater
     Last Modified Date: 15/8/2018
     version: 1.0
	   1.0 - Initial script created.
			 This script receives a JSON object of the teamid, modeled as:
       {"teamid": x}
			 It then uses RedBean ORM, to return all team videos (whether private or public) of the given team.
       It responds with a JSON object, which will be modeled in either of 2 fashions - relative to if videos exists, or an error:
       {"teamid": x, "description": xxxxxx, "private":x, "filename":xx.mp4, "category1": xx, "category2":xx, "category3":xx, "title":xxxxx)
       {"success": false, "error": xxxxxxxxxx}
*/

  require_once ("connect.php");
  require_once ("rb.php");

  try {

    $postdata = file_get_contents("php://input");
    $team = json_decode($postdata);

    $teamid = $team->teamid;
    //$teamid = "1";
    $newresult = "";

    $videos = R::find("video", "where teamid = ".$teamid);
    foreach ($videos as $vid) {
      $newresult .= json_encode($vid).",";
    }

    R::close();

  	//add brackets to the start & end to proper json-ify the data for the frontend & remove the last trailing comma
  	$strresult = "[".rtrim($newresult, ",")."]";
  	echo $strresult;

  } catch (Exception $e) {
    echo json_encode(array("success"=>false, "error"=>$e));
  }

 ?>
