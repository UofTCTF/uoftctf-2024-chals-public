ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YNgBBTYdXcXKcQmYBzqYM7Xx9KoEDAy1';
CREATE USER 'web'@'localhost' IDENTIFIED WITH mysql_native_password BY 'J7zZR60PmM3TmaBk8sVW5fVz8za2svp1';
FLUSH PRIVILEGES;
DROP DATABASE IF EXISTS ctf_challenge;
CREATE DATABASE ctf_challenge;
USE ctf_challenge;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username NVARCHAR(255) NOT NULL,
    password NVARCHAR(255) NOT NULL,
    data NVARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO users (username, password, data) VALUES ('admin', '9LCD5iU78ZbtsHhcDgGvsT9Z1Nvy54z8', '{"role": "not_admin_lmao"}');

GRANT INSERT, SELECT, UPDATE ON ctf_challenge.users TO 'web'@'localhost';
FLUSH PRIVILEGES;