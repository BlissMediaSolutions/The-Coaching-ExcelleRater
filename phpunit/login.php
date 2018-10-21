<?php

/*   User Login unit test for The Coaching ExcelleRater
     Last Modified Date: 20/10/2018
*/

  require_once ("connect.php");
  require_once ("rb.php");


  function test_login($username, $password)
  {
    //Create the Empty object for $data ~ required for PHPUnit test
    $data = new \stdClass();

    $user = R::find('teamlist', ' username LIKE ? ', [ $username ]);
    //Check if a $user was found.  If not $result is false, otherwise check the password.
    if (Empty($user)) {
      $result = false;
    } else {
      //$user was found & is return as a 2 dimensional array, so we need to iterate thru it (and check the password), even though it should have only 1 element
      foreach ($user as $usr) {
        	if (password_verify($password, $usr->password)) {
          $thisusr = $usr;
          $result = true;
        } else {
          $result = false;
        }
      }
    }

    R::close();

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
    return $result;

  }

?>
