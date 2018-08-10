<?php
  //ini_set('display_errors', 'On');
  //error_reporting(E_ALL | E_STRICT);

  require_once ("connect.php");
  require_once ("rb.php");

  try {

    $postdata = file_get_contents("php://input");
    $login = json_decode($postdata);

    $username = $login->username;
    $password = md5($login->password);

    $user = R::find('teamlist', ' username LIKE ? ', [ $username ]);
    //Check if a $user was found - if not, then respond to the frontend
    if (Empty($user)) {
      $data->success = false;
      $data->error = 'Incorrect Username or Password';
      echo json_encode($data);
    }

    //$user was found & is return as a 2 dimensional array, so we need to iterate thru it (and check the password), even though it should have only 1 element
    foreach ($user as $usr) {
      if ($usr->password === $password) {
        $thisusr = $usr;
        $result = true;
      } else {
        $result = false;
      }
    }

    if ($result == true) {
      $data->success = true;
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
