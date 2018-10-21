<?php
/*   adding default users for The Coaching ExcelleRater
     Last Modified Date: 10/9/2018
     version: 1.0
	   1.0 - Initial script created.
			 This script simply adds 'dummy' users to the database.
       Script is required so as to allow/use bcrypt hashing with salt for password storage

*/

	//ini_set('display_errors', 'On');
	//error_reporting(E_ALL | E_STRICT);

	require_once ("connect.php");
	require_once ("rb.php");

	$postdata = file_get_contents("users.json");
	$userlist = json_decode($postdata);

  try {

     foreach ($userlist as $list) {
       $teamlist =  R::load( 'teamlist' );
       $teamlist->username = $list->username;
       $teamlist->password = password_hash($list->password, PASSWORD_BCRYPT);
       $teamlist->teamid = $list->teamid;
       $teamlist->personid = $list->personid;
       $teamlist->roleid = $list->roleid;
       $teamlistid = R::store($teamlist);
     }

		 R::close();

   } catch (Exception $e) {
    echo json_encode(array("success"=>false, "data"=>$e));
  }

  echo json_encode(array("success"=>true, "data"=>"Users added success"));

 ?>
