-- Wha tables do we want?
-- id, name (12th ECS 2020), title (ECS), edition (12th), start_date, organization, end_date, category (1 or several ?), 
-- website, description ?, city, country
-- id, name (12th ECS 2020), title (ECS), start_date end_date, category, city, country, organization

-- CREATE TABLE conferences (
--   id SERIAL PRIMARY KEY,
--   name TEXT UNIQUE NOT NULL,
--   title TEXT NOT NULL,
--   start_date DATE,
--   end_date DATE,
--   specialty TEXT UNIQUE NOT NULL,
--   city VARCHAR(100) NOT NULL,
--   country VARCHAR(50) NOT NULL,
--   organization VARCHAR (200) NOT NULL,
-- );



-- admin table
-- name
-- password

-- users table
-- name
-- password

CREATE TABLE conferences (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  start_date DATE,
  end_date DATE,
  specialty TEXT,
  city VARCHAR(100) NOT NULL,
  country VARCHAR(50) NOT NULL, 
  organization VARCHAR(200) NOT NULL
);