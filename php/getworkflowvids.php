<?php
/*   Get all Videos for a Workflow; for The Coaching ExcelleRater
     Last Modified Date: 4/09/2018
     version: 1.0
	   1.0 - Initial script created.
			 This script receives a JSON object of the workflowid, modeled as:
       {"workflowid": x}
			 It then uses RedBean ORM, to return all videos which were setup for the specific workflow
       It responds with a JSON object, which will be modeled in either of 2 fashions (relative to if the workflow has videos, or an error arises):
       1) [{"workflowid": x, "videoid": x, "filename":xxxxx, "question":xxxx, "answer1":xx, "ans1radius": xx, ..... ),
           {"workflowid": x, "videoid": x, "filename":xxxxx, "question":xxxx, "answer1":xx, "ans1radius": xx, ..... )]
       2) {"success": false, "data": xxxxxxxxxx}
*/

	require_once ("connect.php");
	require_once ("rb.php");

	//ini_set('display_errors', 'On');
	//error_reporting(E_ALL | E_STRICT);

  try {
    $postdata = file_get_contents("php://input");
    $wflist = json_decode($postdata);

    $workflowid = $wflist->workflowid;
    //$workflowid = "15";

    $wfvideo = R::getAll("SELECT videolist.workflowid, video.id, video.filename, videolist.question, videolist.answer1, videolist.ans1radius, videolist.answer2, videolist.ans2radius, videolist.answer3,
      videolist.ans3radius, videolist.stoppoint, videolist.playspeed, videolist.display FROM videolist INNER JOIN video ON videolist.videoid = video.id WHERE videolist.workflowid = ".$workflowid);

    //Basic error handling to check that the workflowid actually has some videos allocated to it.
    $emptyresult = array_filter($wfvideo);
    if (empty($emptyresult)) {
      echo json_encode(array("success"=>false, "data"=>"There are no videos for this workflow"));
      die();
    }

    //The Workflow has some videos in it, so we'll encode each individual array as JSON
    foreach ($wfvideo as $vidlist) {
      $newresult .= json_encode($vidlist).",";
    }

    R::close();

    //add brackets to the start & end to proper json-ify the data for the frontend & remove the last trailing comma
    $strresult = "[".rtrim($newresult, ",")."]";
    echo $strresult;

    //Further error handling in case PHP throws an exception.
  } catch (Exception $e) {
    echo json_encode(array("success"=>false, "data"=>$e));
  }

 ?>
