<?php

/*   Database Connection for The Coaching ExcelleRater
     Last Modified Date: 5/5/2018
     version: 1.0
	   1.0 - Initial connection script created.
			 This script uses the RedBean ORM to create a database connection, which is run on the same server.
       The username (root) & password (password), need to be changed for your MySQL database.
*/

  require 'rb.php';
  R::setup ('mysql:host=localhost;dbname=coaching', 'root', 'Password' );

?>
