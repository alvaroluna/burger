USE burgers_db;

INSERT INTO burgers (burger_name, devoured) VALUES ('California Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Western Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Buffalo Burger', false);

UPDATE burgers SET devoured=true WHERE burger_name='Buffalo Burger';