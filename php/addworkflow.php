<?php
/*   Save/Add Workflow for The Coaching ExcelleRater
     Last Modified Date: 6/9/2018
     version: 1.0
	   1.0 - Initial script created.
			 This script receives a JSON object of the Workflow, modeled as:
			  [{"name":"Workflow1","date": "2018-08-30","teamid": "1","coachid": "1","resolution":"400x300"},
			 	 {"player1": "2", "player2": "3", "player3": "5", "player4": "6"},
			   {"videoid": "1", "ans1": "54,340", "ans2": "92,563", "ans3": "190,288", "endframe":"show", "playrate": "1", "question": "asdasd"},
			   {"videoid": "2", "ans1": "50,300", "ans2": "92,563", "ans3": "190,288", "endframe":"show1", "playrate": "1.5", "question": "bcsdnd"}]
			 It then uses RedBean ORM, to write this data to the following tables: workflow, wfteamlist, videolist;
       It responds with a JSON object, which will be modeled in either of 2 fashions (relative to if the write was successful, or an error arises):
       {"success": true, "data": xxxxxxxx}
       {"success": false, "data": xxxxxxxxxx}
*/

	//ini_set('display_errors', 'On');
	//error_reporting(E_ALL | E_STRICT);

	require_once ("connect.php");
	require_once ("rb.php");

	$postdata = file_get_contents("php://input");
	$wflist = json_decode($postdata);

	try {
		 $x = 0;
		 $wfid = 0;
		 $workflowid = 0;

		 foreach ($wflist as $list) {
			if ($x == 0) {
				//  ** Handle Workflow  **
				$workflow =  R::load( 'workflow' );
				$workflow->wfdate = date("Y-m-d");
				$workflow->teamid = $list->teamid;
				$workflow->coachid = $list->coachid;
				$workflow->wfname = $list->name;
				$workflow->resolution = $list->resolution;
				$workflowid = R::store($workflow);
			}

			if ($x == 1) {
			//  ** Handle Players **
				$thislist = (array)$list;
				foreach($thislist as $key => $value) {
					$wfteamlist = R::load( 'wfteamlist' );
					$wfteamlist->workflowid = $workflowid;
					$wfteamlist->personid = $value;
					$wfteamlist->totalscore = 0;
					$wfid = R::store($wfteamlist);
				}
			}

			if ($x >= 2) {
				//  ** Handle Videos **
				$videolist = R::load( 'videolist' );
				$videolist->workflowid = $workflowid;
				$videolist->videoid = $list->videoid;
				$videolist->question = $list->question;
				$videolist->answer1 = $list->ans1;
				$videolist->ans1radius = $list->ans1radius;
				$videolist->answer2 = $list->ans2;
				$videolist->ans2radius = $list->ans2radius;
				$videolist->answer3 = $list->ans3;
				$videolist->ans3radius = $list->ans3radius;
				$videolist->display = $list->endframe;
				$videolist->playspeed = $list->playrate;
				$videolist->stoppoint = $list->stoppoint;
				$videoid = R::store($videolist);
			}
			$x = $x + 1;
		}
		R::close();

	} catch (Exception $e) {
		echo json_encode(array("success"=>false, "data"=>$e));
	}

	echo json_encode(array("success"=>true, "data"=>"Workflow Successfully Saved"));

?>
