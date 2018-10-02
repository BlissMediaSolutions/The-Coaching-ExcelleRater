<?php
/*   Get Workflow Results/Stats for The Coaching ExcelleRater (Returns the results of a given player for a given workflow)
     Last Modified Date: 2/10/2018
     version: 1.0
	   1.0 - Initial script created.
			 This script receives a JSON object of the playerid & workflowid, modeled as:
       {"playerid": x, "workflowid":x}
			 It then uses RedBean ORM, to return the original answers defined by the coach, along with the answer which was given by the player.
       It responds with a JSON object, which will be modeled in either of 3 fashions (relative to if the player has been assigned workflows, or an error arises):
       1) [{"videoid": x, "filename": xxxx, "question":xxxxx, "answer1":x, "ans1radius":x, "answer2":x, "ans2radius":x, "answer3":x, "ans3radius":x, "personid":x, "playername":xxx, "answer":x, "score":x},
           {"videoid": x, "filename": xxxx, "question":xxxxx, "answer1":x, "ans1radius":x, "answer2":x, "ans2radius":x, "answer3":x, "ans3radius":x, "personid":x, "playername":xxx, "answer":x, "score":x)]
       3) {"success": false, "data": xxxxxxxxxx}

       Note: Answer1, Answer2, Answer3 : refer to the positions defined by the Coach for that particular video (and thus radius refers to the size defined for the answer)
             Answer : refers to the position given by the player as their answer.  (Score: how many points the player got for this answer)

*/

//ini_set('display_errors', 'On');
//error_reporting(E_ALL | E_STRICT);

require_once ("connect.php");
require_once ("rb.php");

try {

  $postdata = file_get_contents("php://input");
  $stats = json_decode($postdata);

  $newresult = "";
  $playerid = $stats->playerid;
  $wfid = $stats->workflowid;
  //$playerid = "2";
  //$wfid = "1";

  $result = R::getAll("SELECT videolist.videoid, videolist.question, videolist.answer1, videolist.ans1radius, videolist.answer2, videolist.ans2radius, videolist.answer3, videolist.ans3radius,
    wfanswers.personid, wfanswers.answer, wfanswers.score FROM wfanswers INNER JOIN videolist ON videolist.workflowid = wfanswers.workflowid AND videolist.videoid = wfanswers.videoid
    WHERE videolist.workflowid = ".$wfid." AND wfanswers.personid = ".$playerid);

  //Simple error handling in case (for some reason) the getAll returns no results.
  $emptyresult = array_filter($result);
  if (empty($emptyresult)) {
    echo json_encode(array("success"=>false, "data"=>"Opps... an error occured in trying to retrieve the data"));
    die();
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

    //while the Players fullname isn't really required, just in case to display on front end.
    $data->playerid = $wfstats['personid'];
    $wfplayer = R::getRow("SELECT person.fullname FROM person INNER JOIN teamlist ON teamlist.personid = person.id WHERE teamlist.id = ".$wfstats['personid']);
    $data->playername = $wfplayer['fullname'];             //The fullname of the Player (relating to the playerid)

    $data->answer = $wfstats['answer'];
    $data->score = $wfstats['score'];

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
