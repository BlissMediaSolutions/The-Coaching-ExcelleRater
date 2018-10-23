<?php
/*   Unit Test for Get PLayer Stats
     Last Modified Date: 21/10/2018
     version: 1.0
*/

require_once ("connect.php");
require_once ("rb.php");

function test_getPlayerStats($playerid, $wfid)
{

  $newresult = "";
  $data = new \stdClass();
  //$playerid = $stats->playerid;
  //$wfid = $stats->workflowid;
  //$playerid = "2";
  //$wfid = "1";

  $result = R::getAll("SELECT videolist.videoid, videolist.question, videolist.answer1, videolist.ans1radius, videolist.answer2, videolist.ans2radius, videolist.answer3, videolist.ans3radius,
    videolist.stoppoint, wfanswers.personid, wfanswers.answer, wfanswers.score FROM wfanswers INNER JOIN videolist ON videolist.workflowid = wfanswers.workflowid AND videolist.videoid = wfanswers.videoid
    WHERE videolist.workflowid = ".$wfid." AND wfanswers.personid = ".$playerid);

  //Simple error handling in case (for some reason) the getAll returns no results.
  $emptyresult = array_filter($result);
  if (empty($emptyresult)) {
    //echo json_encode(array("success"=>false, "data"=>"Opps... an error occured in trying to retrieve the data"));
    //die();
  }

  //The workflow contained 1 or more videos/questions
  foreach ($result as $wfstats) {
    $data->videoid = $wfstats['videoid'];
    $wfvideo = R::getRow("SELECT video.filename FROM video INNER JOIN videolist ON videolist.videoid = video.id WHERE video.id = ".$wfstats['videoid']);
    $data->filename = $wfvideo['filename'];

    $data->question = $wfstats['question'];
    $data->answer1 = $wfstats['answer1'];
    $data->an1radius = $wfstats['ans1radius'];
    $data->answer2 = $wfstats['answer2'];
    $data->an2radius = $wfstats['ans2radius'];
    $data->answer3 = $wfstats['answer3'];
    $data->an3radius = $wfstats['ans3radius'];
    $data->stoppoint = $wfstats['stoppoint'];

    //while the Players fullname isn't really required, just in case to display on front end.
    $data->playerid = $wfstats['personid'];
    $wfplayer = R::getRow("SELECT person.fullname FROM person INNER JOIN teamlist ON teamlist.personid = person.id WHERE teamlist.id = ".$wfstats['personid']);
    $data->playername = $wfplayer['fullname'];             //The fullname of the Player (relating to the playerid)

    $data->answer = $wfstats['answer'];
    $data->score = $wfstats['score'];

    $newresult .= json_encode($data).",";
  }

  R::close();

  if (!empty($newresult)) {
    return true;
  } else {
    return false;
  }

  //add brackets to the start & end to proper json-ify the data for the frontend & remove the last trailing comma
  //$strresult = "[".rtrim($newresult, ",")."]";
  //echo $strresult;

}

?>
