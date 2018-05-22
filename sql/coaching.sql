CREATE DATABASE IF NOT EXISTS coaching;
USE coaching;

DROP TABLE IF EXISTS videolist, teamlist, video, role, person, team, sport;

CREATE TABLE sport
(
  id INT AUTO_INCREMENT,
  sportid INT PRIMARY KEY,
  sportname VARCHAR(25) NOT NULL,
  INDEX(id)
);

CREATE TABLE team
(
  id INT AUTO_INCREMENT,
  teamid INT PRIMARY KEY,
  sportid INT,
  name VARCHAR(35) NOT NULL,
  CONSTRAINT FK_Team_Sport FOREIGN KEY (sportid) REFERENCES sport(sportid),
  INDEX(id)
);

CREATE TABLE person
(
  id INT AUTO_INCREMENT,
  personid INT PRIMARY KEY,
  fullname VARCHAR(25) NOT NULL,
  dob DATE,
  address VARCHAR(40),
  city VARCHAR(15),
  state VARCHAR(5),
  phone VARCHAR(12),
  email VARCHAR(35),
  INDEX(id)
);

CREATE TABLE role
(
  id INT AUTO_INCREMENT,
  roleid INT PRIMARY KEY,
  roletitle VARCHAR(15) NOT NULL,
  INDEX(id)
);

CREATE TABLE video
(
  id INT AUTO_INCREMENT,
  videoid INT PRIMARY KEY,
  description VARCHAR(20) NOT NULL,
  private CHAR NOT NULL,
  location VARCHAR(50) NOT NULL,
  category1 VARCHAR(10) NOT NULL,
  category2 VARCHAR(10),
  category3 VARCHAR(10),
  title VARCHAR(25),
  INDEX(id)
);

CREATE TABLE teamlist
(
  id INT AUTO_INCREMENT,
  username VARCHAR(25) PRIMARY KEY,
  password VARCHAR(12) NOT NULL,
  teamid INT,
  personid INT,
  roleid INT,
  CONSTRAINT FK_TEAMLIST_TEAM FOREIGN KEY (teamid) REFERENCES team(teamid),
  CONSTRAINT FK_TEAMLIST_PERSON FOREIGN KEY (personid) REFERENCES person(personid),
  CONSTRAINT FK_TEAMLIST_ROLE FOREIGN KEY (roleid) REFERENCES role(roleid),
  INDEX(id)
 );

CREATE TABLE videolist
(
  id INT AUTO_INCREMENT,
  videoid INT,
  username VARCHAR(25),
  stoppoint DECIMAL(8,8),
  reason VARCHAR(200),
  CONSTRAINT FK_VIDEOLIST_VIDEO FOREIGN KEY (videoID) REFERENCES video(videoid),
  CONSTRAINT FK_VIDEOLIST_TEAMLIST FOREIGN KEY (username) REFERENCES teamlist(username),
  INDEX(id)
);

INSERT INTO sport(sportid, sportname) VALUES(1, 'Tennis');
INSERT INTO sport(sportid, sportname) VALUES(2, 'AFL');
INSERT INTO sport(sportid, sportname) VALUES(3, 'Basketball');
INSERT INTO sport(sportid, sportname) VALUES(4, 'Netball');
INSERT INTO sport(sportid, sportname) VALUES(5, 'Soccer');

INSERT INTO role(roleid, roletitle) VALUES(1, 'Coach');
INSERT INTO role(roleid, roletitle) VALUES(2, 'Player');

INSERT INTO team(teamid, sportid, name) VALUES (1, 2, 'Rockets');

INSERT INTO person(personid, fullname, dob, address, city, state, phone, email) VALUES (1, 'John Doe', '1985-2-20', '123 Somewhere St', 'Some Place', 'VIC', '0412 345 6789', 'jdoe@test.com');
INSERT INTO person(personid, fullname, dob, address, city, state, phone, email) VALUES (2, 'Harry Fink', '1979-6-12', '111 This Place St', 'Somewhere', 'VIC', '0401 234 5678', 'hfink@ozemail.com');

INSERT INTO teamlist(username, password, teamid, personid, roleid) VALUES ('jdoe', 'password', 1, 1, 1);
INSERT INTO teamlist(username, password, teamid, personid, roleid) VALUES ('hfink', 'password', 1, 2, 2);
