<?php
  ini_set('display_errors', 'On');
  error_reporting(E_ALL | E_STRICT);

  require_once ("connect.php");
  require_once ("rb.php");

  //$username   = $_POST["username"];
  //$password   = $_POST["password"];
  $username = "jdoe";
  $password = "password";
  $result = false;

  $users = R::findAll('teamlist');
  foreach ($users as $user) {
    if ($user->username == $username && $user->password == $password) {
      $result = true;
      echo json_encode($user);
    }
  }

  if ($result == false) {
    $resp->status = "false";
    echo json_encode($resp);
  }

?>
