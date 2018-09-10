<?php
/*   User Login for The Coaching ExcelleRater
     Last Modified Date: 6/9/2018
     version: 1.1
	   1.0 - Initial Login script created.
			 This script receives a JSON object of the username & password, modeled as:
       {"username": xxxx, "password": xxxx}
			 It then uses RedBean ORM, to check the db, and respond with a JSON Object, modeled as either 2 responses:
       {"success": true, "username": xxxxxx, "userlevel": x, "team": x}
       {"success": false, "error": xxxxxxxxxx}
    1.1 - Script updated to return the id of the person;
       {"success": true, "id": x, "username": xxxxxx, "userlevel": x, "team": x}

*/

  //ini_set('display_errors', 'On');
  //error_reporting(E_ALL | E_STRICT);

  require_once ("connect.php");
  require_once ("rb.php");

  try {

    $postdata = file_get_contents("php://input");
    $login = json_decode($postdata);

    $username = $login->username;
    $password = $login->password;

    $user = R::find('teamlist', ' username LIKE ? ', [ $username ]);
    //Check if a $user was found.  If not $result is false, otherwise check the password.
    if (Empty($user)) {
      $result = false;
    } else {
      //$user was found & is return as a 2 dimensional array, so we need to iterate thru it (and check the password), even though it should have only 1 element
      foreach ($user as $usr) {
        //if ($usr->password === $password) {
        	if (password_verify($password, $usr->password)) {
          $thisusr = $usr;
          $result = true;
        } else {
          $result = false;
        }
      }
    }

    if ($result == true) {
      $data->success = true;
      $data->id = $thisusr->id;
      $data->username = $thisusr->username;
      $data->userlevel = $thisusr->roleid;
      $data->team = $thisusr->teamid;
    } else {
      $data->success = false;
      $data->error = 'Incorrect Username or Password';
    }

    R::close();

  } catch (Exception $e) {
    echo json_encode(array("success"=>false, "error"=>$e));
  }

  echo json_encode($data);

?>
