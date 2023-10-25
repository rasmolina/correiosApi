create database api_correios;

use api_correios;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
    Number INT AUTO_INCREMENT PRIMARY KEY,
    status VARCHAR(255) DEFAULT 'gerada',
    userId INT,
    FOREIGN KEY (userId) REFERENCES users(id)
);
