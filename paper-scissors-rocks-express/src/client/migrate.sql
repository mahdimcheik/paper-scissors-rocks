CREATE DATABASE 'test' IF NOT EXISTS ma_base

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('mentor', 'student') NOT NULL
);