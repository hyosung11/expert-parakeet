-- CREATE TABLE conferences (
--   id SERIAL PRIMARY KEY,
--   name TEXT UNIQUE NOT NULL, full name of conference
--   title TEXT NOT NULL, abbreviation
--   start_date DATE, -- "YYYY-MM-DD"
--   end_date DATE,
--   specialty TEXT UNIQUE NOT NULL,
--   city VARCHAR(100) NOT NULL,
--   country VARCHAR(50) NOT NULL,
--   organization VARCHAR (200) NOT NULL,
-- );

INSERT INTO conferences (name, title, start_date, end_date, specialty, city, country, organization)
VALUES
('49TH ECTS CONGRESS - ECTS 2022', 'ECTS', '2022-05-07', '2022-05-10', 'Musculoskeletal', 'Helsinki', 'Finland', 'European Calcified Tissue Society (ECTS)'),
('50TH ECTS CONGRESS - ECTS 2023', 'ECTS', '2023-04-15', '2022-04-18', 'Musculoskeletal', 'Liverpool', 'United Kingdom', 'European Calcified Tissue Society (ECTS)'),
('XXIX European Congress of Perinatal Medicine - ECPM 2024', 'ECPM', '2024-09-11', '2024-09-13', 'Perinatal Medicine', 'Vienna', 'Austria', 'MCA Scientific Events'),
('ESC Congress 2023', 'ESC', '2023-08-25', '2023-08-28', 'Cardiology', 'Amsterdam', 'Netherlands', 'European Society of Cardiology'),
('ESC Congress 2022', 'ESC', '2023-08-26', '2023-08-29', 'Cardiology', 'Barcelona', 'Spain', 'European Society of Cardiology');
