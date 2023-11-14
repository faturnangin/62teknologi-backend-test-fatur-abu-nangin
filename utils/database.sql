CREATE DATABASE business_db;

\connect business_db;

CREATE TABLE businesses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255),
  latitude DECIMAL(10,8),
  longitude DECIMAL(10,8),
  term VARCHAR(255),
  radius INT,
  categories VARCHAR(255),
  locale VARCHAR(255),
  price VARCHAR(255),
  open_now BOOLEAN,
  open_at INT,
  attributes VARCHAR(255),
  sort_by VARCHAR(255)
);