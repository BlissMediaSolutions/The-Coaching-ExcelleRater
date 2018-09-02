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
  teamname VARCHAR(35) NOT NULL,
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
   CONSTRAINT FK_WorkFlow_CoachID FOREIGN KEY (coachid) REFERENCES teamlist(personid)
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
  stoppoint TIMESTAMP,
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
  totalscore DECIMAL(8,8),
  CONSTRAINT FK_WFTeamList_WorkFlow FOREIGN KEY (workflowid) REFERENCES workflow(id),
  CONSTRAINT FK_WFTeamList_TeamList FOREIGN KEY (personid) REFERENCES teamlist(personid)
);

CREATE TABLE wfanswers
(
  id INT AUTO_INCREMENT PRIMARY KEY,
  workflowid INT,
  videoid INT,
  personid INT,
  answer VARCHAR(15),
  CONSTRAINT FK_WFAnswers_WorkFlowID FOREIGN KEY (workflowid) REFERENCES wfteamlist(workflowid),
  CONSTRAINT FK_WFAnswers_VideoID FOREIGN KEY (videoid) REFERENCES videolist(videoid),
  CONSTRAINT FK_WFAnswers_WFTeamList FOREIGN KEY (personid) REFERENCES wfteamlist(personid)
);

INSERT INTO sport(sportname) VALUES('Tennis');
INSERT INTO sport(sportname) VALUES('AFL');
INSERT INTO sport(sportname) VALUES('Basketball');
INSERT INTO sport(sportname) VALUES('Netball');
INSERT INTO sport(sportname) VALUES('Soccer');
INSERT INTO sport(sportname) VALUES('Hockey');

INSERT INTO role(roletitle) VALUES('Coach');
INSERT INTO role(roletitle) VALUES('Player');

INSERT INTO team(sportid, teamname) VALUES (2, 'Rockets');
INSERT INTO team(sportid, teamname) VALUES (6, 'The Hockynets');

INSERT INTO person(fullname, dob, address, city, state, phone, email) VALUES ('John Doe', '1985-2-20', '123 Somewhere St', 'Some Place', 'VIC', '0412 345 6789', 'jdoe@test.com');
INSERT INTO person(fullname, dob, address, city, state, phone, email) VALUES ('Harry Fink', '1979-6-12', '111 This Place St', 'Somewhere', 'VIC', '0401 234 5678', 'hfink@test.com');
INSERT INTO person(fullname, dob, address, city, state, phone, email) VALUES ('Ted Bundy', '1946-11-24', '123 Somewhere St', 'Some Place', 'VIC', '0412 345 6789', 'tbundy@test.com');
INSERT INTO person(fullname, dob, address, city, state, phone, email) VALUES ('John Wayne Gacy', '1942-3-17', '123 Somewhere St', 'Some Place', 'VIC', '0412 345 6789', 'jgacy@test.com');
INSERT INTO person(fullname, dob, address, city, state, phone, email) VALUES ('Gary Ridgway', '1949-2-18', '123 Somewhere St', 'Some Place', 'VIC', '0412 345 6789', 'gridgway@test.com');
INSERT INTO person(fullname, dob, address, city, state, phone, email) VALUES ('Luis Garavito', '1957-1-25', '123 Somewhere St', 'Some Place', 'VIC', '0412 345 6789', 'lgaravito@test.com');
INSERT INTO person(fullname, dob, address, city, state, phone, email) VALUES ('Pedro Lopez', '1948-10-8', '123 Somewhere St', 'Some Place', 'VIC', '0412 345 6789', 'plopez@test.com');

INSERT INTO teamlist(username, password, teamid, personid, roleid) VALUES ('jdoe', '5f4dcc3b5aa765d61d8327deb882cf99', 1, 1, 1);
INSERT INTO teamlist(username, password, teamid, personid, roleid) VALUES ('hfink', '5f4dcc3b5aa765d61d8327deb882cf99', 1, 2, 2);
INSERT INTO teamlist(username, password, teamid, personid, roleid) VALUES ('tbundy', '5f4dcc3b5aa765d61d8327deb882cf99', 1, 3, 2);
INSERT INTO teamlist(username, password, teamid, personid, roleid) VALUES ('jgacy', '5f4dcc3b5aa765d61d8327deb882cf99', 1, 4, 2);
INSERT INTO teamlist(username, password, teamid, personid, roleid) VALUES ('gridgway', '5f4dcc3b5aa765d61d8327deb882cf99', 1, 5, 2);
INSERT INTO teamlist(username, password, teamid, personid, roleid) VALUES ('lgaravito', '5f4dcc3b5aa765d61d8327deb882cf99', 1, 6, 2);
INSERT INTO teamlist(username, password, teamid, personid, roleid) VALUES ('plopez', '5f4dcc3b5aa765d61d8327deb882cf99', 1, 7, 2);

INSERT INTO video(teamid, description, private, filename, category1, category2, category3, title) VALUES (1, 'Where to Kick after Point Scored?', 1, 'Clip01N.mp4', 'W Bulldogs', '', '', 'WB Kickout1');
INSERT INTO video(teamid, description, private, filename, category1, category2, category3, title) VALUES (1, 'Where to Kick after Point Scored?', 1, 'Clip02N.mp4', 'W Bulldogs', '', '', 'WB Kickout2');
INSERT INTO video(teamid, description, private, filename, category1, category2, category3, title) VALUES (2, 'Where to Kick after Point Scored?', 1, 'Clip03N.mp4', 'W Bulldogs', '', '', 'WB Kickout3');

INSERT INTO workflow (wfdate, wfname, teamid, coachid, resolution) VALUES (2018-08-29, 'Workflow 1', '1', '1', '800x600');
INSERT INTO workflow (wfdate, wfname, teamid, coachid, resolution) VALUES (2018-08-30, 'Workflow 2', '1', '1', '800x600');
INSERT INTO workflow (wfdate, wfname, teamid, coachid, resolution) VALUES (2018-08-31, 'Workflow 3', '1', '1', '800x600');

INSERT INTO wfteamlist (workflowid, personid, totalscore) VALUES ('1', '2', '');
INSERT INTO wfteamlist (workflowid, personid, totalscore) VALUES ('2', '2', '');
INSERT INTO wfteamlist (workflowid, personid, totalscore) VALUES ('3', '2', '');
