CREATE DATABASE IF NOT EXISTS coaching;
USE coaching;

DROP TABLE IF EXISTS wfanswers, videolist, wfteamlist, workflow, teamlist, video, role, person, team, sport;

CREATE TABLE sport
(
  id INT AUTO_INCREMENT PRIMARY KEY,
  sportname VARCHAR(25) NOT NULL
);

CREATE TABLE team
(
  id INT AUTO_INCREMENT PRIMARY KEY,
  sportid INT,
  teamname VARCHAR(50) NOT NULL,
  CONSTRAINT FK_Team_Sport FOREIGN KEY (sportid) REFERENCES sport(id)
);

CREATE TABLE person
(
  id INT AUTO_INCREMENT PRIMARY KEY,
  fullname VARCHAR(35) NOT NULL,
  dob DATE,
  address VARCHAR(50),
  city VARCHAR(15),
  state VARCHAR(5),
  phone VARCHAR(12),
  email VARCHAR(45)
);

CREATE TABLE role
(
  id INT AUTO_INCREMENT PRIMARY KEY,
  roletitle VARCHAR(15) NOT NULL
);

CREATE TABLE video
(
  id INT AUTO_INCREMENT PRIMARY KEY,
  teamid INT,
  description VARCHAR(40) NOT NULL,
  private CHAR NOT NULL,
  filename VARCHAR(50) NOT NULL,
  category1 VARCHAR(10) NOT NULL,
  category2 VARCHAR(10),
  category3 VARCHAR(10),
  title VARCHAR(40),
  CONSTRAINT FK_Video_Team FOREIGN KEY (teamid) REFERENCES team(id)
);

CREATE TABLE teamlist
(
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(35) NOT NULL,
  password VARCHAR(60) NOT NULL,
  teamid INT,
  personid INT,
  roleid INT,
  CONSTRAINT FK_TEAMLIST_TEAM FOREIGN KEY (teamid) REFERENCES team(id),
  CONSTRAINT FK_TEAMLIST_PERSON FOREIGN KEY (personid) REFERENCES person(id),
  CONSTRAINT FK_TEAMLIST_ROLE FOREIGN KEY (roleid) REFERENCES role(id)
 );

 CREATE TABLE workflow
 (
   id INT AUTO_INCREMENT PRIMARY KEY,
   wfdate DATE,
   wfname VARCHAR(25),
   teamid INT,
   coachid INT,
   resolution VARCHAR(12),
   CONSTRAINT FK_WorkFlow_TeamID FOREIGN KEY (teamid) REFERENCES teamlist(teamid),
   CONSTRAINT FK_WorkFlow_CoachID FOREIGN KEY (coachid) REFERENCES teamlist(id)
 );

CREATE TABLE videolist
(
  id INT AUTO_INCREMENT PRIMARY KEY,
  workflowid INT,
  videoid INT,
  question VARCHAR(25),
  answer1 VARCHAR(15),
  ans1radius VARCHAR(4),
  answer2 VARCHAR(15),
  ans2radius VARCHAR(4),
  answer3 VARCHAR(15),
  ans3radius VARCHAR(4),
  stoppoint VARCHAR(5),
  playspeed DECIMAL (2,1),
  display VARCHAR(10),
  CONSTRAINT FK_VideoList_WorkFlow FOREIGN KEY (workflowid) REFERENCES workflow(id),
  CONSTRAINT FK_VideoList_Video FOREIGN KEY (videoID) REFERENCES video(id)
);

CREATE TABLE wfteamlist
(
  id INT AUTO_INCREMENT PRIMARY KEY,
  workflowid INT,
  personid INT,
  totalscore INT,
  complete TINYINT,
  CONSTRAINT FK_WFTeamList_WorkFlow FOREIGN KEY (workflowid) REFERENCES workflow(id),
  CONSTRAINT FK_WFTeamList_TeamList FOREIGN KEY (personid) REFERENCES teamlist(id)
);

CREATE TABLE wfanswers
(
  id INT AUTO_INCREMENT PRIMARY KEY,
  workflowid INT,
  videoid INT,
  personid INT,
  answer VARCHAR(15),
  score INT,
  CONSTRAINT FK_WFAnswers_WorkFlowID FOREIGN KEY (workflowid) REFERENCES wfteamlist(workflowid),
  CONSTRAINT FK_WFAnswers_VideoID FOREIGN KEY (videoid) REFERENCES videolist(videoid),
  CONSTRAINT FK_WFAnswers_WFTeamList FOREIGN KEY (personid) REFERENCES wfteamlist(id)
);

INSERT INTO sport(sportname) VALUES('Tennis');
INSERT INTO sport(sportname) VALUES('AFL');
INSERT INTO sport(sportname) VALUES('Basketball');
INSERT INTO sport(sportname) VALUES('Netball');
INSERT INTO sport(sportname) VALUES('Soccer');
INSERT INTO sport(sportname) VALUES('Hockey');

INSERT INTO role(roletitle) VALUES('Coach');
INSERT INTO role(roletitle) VALUES('Player');

INSERT INTO team(sportid, teamname) VALUES (2, 'Port Melbourne Football Club');
INSERT INTO team(sportid, teamname) VALUES (2, 'Frankston Football Club');

INSERT INTO person(fullname, dob, address, city, state, phone, email) VALUES ('John Doe', '1985-2-20', '123 Somewhere St', 'Some Place', 'VIC', '0412 345 6789', 'jdoe@test.com');
INSERT INTO person(fullname, dob, address, city, state, phone, email) VALUES ('James Hird', '1979-6-12', '111 This Place St', 'Somewhere', 'VIC', '0401 234 5678', 'jhird@test.com');
INSERT INTO person(fullname, dob, address, city, state, phone, email) VALUES ('Gary Ablett', '1946-11-24', '123 Somewhere St', 'Some Place', 'VIC', '0412 345 6789', 'gablett@test.com');
INSERT INTO person(fullname, dob, address, city, state, phone, email) VALUES ('Jason Dunstall', '1942-3-17', '123 Somewhere St', 'Some Place', 'VIC', '0412 345 6789', 'jdunstall@test.com');
INSERT INTO person(fullname, dob, address, city, state, phone, email) VALUES ('Nathan Buckley', '1949-2-18', '123 Somewhere St', 'Some Place', 'VIC', '0412 345 6789', 'nbuckley@test.com');
INSERT INTO person(fullname, dob, address, city, state, phone, email) VALUES ('Tony Lockett', '1957-1-25', '123 Somewhere St', 'Some Place', 'VIC', '0412 345 6789', 'tlockett@test.com');
INSERT INTO person(fullname, dob, address, city, state, phone, email) VALUES ('Wayne Carey', '1948-10-8', '123 Somewhere St', 'Some Place', 'VIC', '0412 345 6789', 'wcarey@test.com');
INSERT INTO person(fullname, dob, address, city, state, phone, email) VALUES ('Ted Whitten', '1963-11-2', '123 Somewhere St', 'Some Place', 'VIC', '0412 345 6789', 'twhitten@test.com');
INSERT INTO person(fullname, dob, address, city, state, phone, email) VALUES ('Greg Williams', '1970-8-11', '123 Somewhere St', 'Some Place', 'VIC', '0412 345 6789', 'gwilliams@test.com');
INSERT INTO person(fullname, dob, address, city, state, phone, email) VALUES ('Dermott Brereton ', '1969-2-15', '123 Somewhere St', 'Some Place', 'VIC', '0412 345 6789', 'dbrereton@test.com');
INSERT INTO person(fullname, dob, address, city, state, phone, email) VALUES ('Stephen Silvagni', '1971-3-20', '123 Somewhere St', 'Some Place', 'VIC', '0412 345 6789', 'ssilvagni@test.com');
