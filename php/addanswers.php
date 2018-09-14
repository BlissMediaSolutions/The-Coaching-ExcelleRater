<?php
/*   Save/Add Workflow Results for The Coaching ExcelleRater
     Last Modified Date: 14/9/2018
     version: 1.0
	   1.0 - Initial script created.
			 This script receives a JSON object of the Workflow results, modeled as:
         [{"workflowid": "x", "videoid":"x", "playerid":"x", "answer":"xxxxxx", "score": "x"},
         {"workflowid": "x", "videoid":"x", "playerid":"x", "answer":"xxxxxx", "score": "x"},
         {"workflowid": "x", "videoid":"x", "playerid":"x", "answer":"xxxxxx", "score": "x"}]
       It then uses RedBean ORM, to write this data to the following table: wfanswers;
       It calculates the total score for an individual's workflow, & updates wfteamlist with this total.
       It responds with a JSON object, which will be modeled in either of 2 fashions (relative to if the write was successful, or an error arises):
        {"success": true, "data": xxxxxxxx}
        {"success": false, "data": xxxxxxxxxx}
*/

	//ini_set('display_errors', 'On');
	//error_reporting(E_ALL | E_STRICT);

	require_once ("connect.php");
	require_once ("rb.php");

	$postdata = file_get_contents("php://input");
	$wfanswers = json_decode($postdata);

	$wfid = 0;
  $total = 0;
  $personid = 0;
  $workflowid = 0;

	try {

		// write new data of the workflow to 'wfanswers'
    foreach ($wfanswers as $answer) {
      $ans =  R::load( 'wfanswers' );
      $ans->workflowid = $answer->workflowid;
      $ans->videoid = $answer->videoid;
      $ans->personid = $answer->playerid;
      $ans->answer = $answer->answer;
      $ans->score = $answer->score;
      $total = $total + $answer->score;
      $personid = $answer->playerid;
      $workflowid = $answer->workflowid;
      $thisid = R::store($ans);
    }

    //find the id in wfteamlist for the applicable data
		$wfteamlist = R::find( "wfteamlist", "where workflowid = ? and personid = ?", array($workflowid, $personid ));
		foreach ($wfteamlist as $list) {
			$wfid = $list->id;
		}
		//Add the total score of the workflow to 'wfteamlist'
		$person = R::load( 'wfteamlist', $wfid );
		$person->totalscore = $total;
		$thisid = R::store($person);

		R::close();

  } catch (Exception $e) {
    echo json_encode(array("success"=>false, "data"=>$e));
  }

  echo json_encode(array("success"=>true, "data"=>"Worklflow results updated"));

?>
