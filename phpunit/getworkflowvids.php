<?php
/*   Unit Test for Getting all Videos for a Workflow
     Last Modified Date: 23/10/2018
     version: 1.0
*/

	require_once ("connect.php");
	require_once ("rb.php");

	function test_getWorkFlowVids($workflowid)
	{

		$newresult = "";
    //$workflowid = $wflist->workflowid;
    //$workflowid = "15";

    $wfvideo = R::getAll("SELECT videolist.workflowid, video.id, video.filename, videolist.question, videolist.answer1, videolist.ans1radius, videolist.answer2, videolist.ans2radius, videolist.answer3,
      videolist.ans3radius, videolist.stoppoint, videolist.playspeed, videolist.display FROM videolist INNER JOIN video ON videolist.videoid = video.id WHERE videolist.workflowid = ".$workflowid);

    //Basic error handling to check that the workflowid actually has some videos allocated to it.
    $emptyresult = array_filter($wfvideo);
    if (empty($emptyresult)) {
      //echo json_encode(array("success"=>false, "data"=>"There are no videos for this workflow"));
      //die();
			return false;
    }

    //The Workflow has some videos in it, so we'll encode each individual array as JSON
    foreach ($wfvideo as $vidlist) {
      $newresult .= json_encode($vidlist).",";
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
