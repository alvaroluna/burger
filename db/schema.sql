/*
This file is intended to help developers get their SQL Databases setup correctly.
It is important since other developers will be unlikely to have the same database or tables setup already.
*/

/* Create and use the burgers db */
CREATE DATABASE burgers_db;
USE burgers_db;

/* Create a table for all your star wars characters */
CREATE TABLE burgers (
	id Int( 11 ) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR( 255) NOT NULL,
	devoured bool,
	
    /* Set ID as primary key */
	PRIMARY KEY ( id )
);

INSERT INTO burgers (burger_name, name, role, age, forcePoints) VALUES ('blah', 'Alvaro', 'dude', '23', '1222');

SELECT * FROM allcharacters;