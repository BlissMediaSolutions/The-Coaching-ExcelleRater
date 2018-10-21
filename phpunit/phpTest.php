<?php

/*   PHPUnit test runner for The Coaching ExcelleRater
     These tests are only designed to test the RedBean ORM queries on the db, & as such use a modified version of the original php files.
     Utilizing the original PHP files would require re-vectoring all the original code into functions, which just returned either true/false...
     so these should be seen as 'quick & dirty' unit tests.

     Note: All these tests assume that there is some data in every table in the db & makes assumptions as to some of that data
*/

  require_once ("login.php");
  require_once ("getteamplayers.php");
  require_once ("getteamvideos.php");
  require_once ("getplayerstats.php");

  class PHPTest extends PHPUnit\Framework\TestCase
  {

    public function test_LoginName()
    {
      //Result should be true, as 'jdoe' & 'password' are for a valid coach
      $this->assertTrue (test_login("jdoe", "password"));
      //Result should be false, as there is no coach or player called 'auser'
      $this->assertFalse (test_login("auser", "password"));
      //Result should be false, as while 'jdoe' is a coach, the password is incorrect
      $this->assertFalse (test_login("jdoe", "12345678"));
    }

    public function test_getPlayers()
    {
      //Result should be True, as there is a Team with an id of '1' - so the function would return some players
      $this->assertTrue (test_getTeamPlayer("1"));
      //Result should be False, as there is no Team with an id of '10' - so the function would not return any players
      $this->assertFalse (test_getTeamPlayer("10"));
    }

    public function test_getVideos()
    {
      //Result should be True, as there is a Team with an id of '1' - so there should be some videos for the team
      $this->assertTrue (test_getTeamVideos("1"));
      //Result should be False, as there is no Team with an id of '10' - so there wouldn't be any videos for such a team
      $this->assertFalse (test_getTeamVideos("10"));
    }

    public function test_getStats()
    {
      //Result should be True, as there is a player with id of '2', and they have completed a workflow of id '1'
      $this->assertTrue (test_getPlayerStats("2", "1"));
      //Result should be False, as there is no player with id of '25'
      $this->assertFalse (test_getPlayerStats("25", "1"));
      //Result should be false, as there is a player with if of '2', there is no workflow of id '77'
      $this->assertFalse (test_getPlayerStats("2", "77"));
    }

  }

?>
