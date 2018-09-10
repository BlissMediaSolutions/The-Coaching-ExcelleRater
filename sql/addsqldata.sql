
INSERT INTO video(teamid, description, private, filename, category1, category2, category3, title) VALUES (1, 'Where to Kick after Point Scored?', 1, 'Clip01N.mp4', 'W Bulldogs', '', '', 'WB Kickout1');
INSERT INTO video(teamid, description, private, filename, category1, category2, category3, title) VALUES (1, 'Where to Kick after Point Scored?', 1, 'Clip02N.mp4', 'W Bulldogs', '', '', 'WB Kickout2');
INSERT INTO video(teamid, description, private, filename, category1, category2, category3, title) VALUES (2, 'Where to Kick after Point Scored?', 1, 'Clip03N.mp4', 'W Bulldogs', '', '', 'WB Kickout3');

INSERT INTO workflow (wfdate, wfname, teamid, coachid, resolution) VALUES ('2018-08-29', 'Workflow 1', '1', '1', '800x600');
INSERT INTO workflow (wfdate, wfname, teamid, coachid, resolution) VALUES ('2018-08-30', 'Workflow 2', '1', '1', '800x600');
INSERT INTO workflow (wfdate, wfname, teamid, coachid, resolution) VALUES ('2018-08-31', 'Workflow 3', '1', '1', '800x600');

INSERT INTO wfteamlist (workflowid, personid, totalscore) VALUES ('1', '2', '');
INSERT INTO wfteamlist (workflowid, personid, totalscore) VALUES ('2', '2', '');
INSERT INTO wfteamlist (workflowid, personid, totalscore) VALUES ('3', '2', '');
