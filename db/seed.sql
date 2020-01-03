CREATE TABLE houses
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(30),
  address VARCHAR(100),
  city VARCHAR(100),
  state VARCHAR(2),
  zip INTEGER,
  img TEXT,
  mortgage DECIMAL,
  rent DECIMAL
);

INSERT INTO houses(name, address, city, state, zip, img, mortgage, rent)
VALUES ('Jenny', '1002 Rockton Drive', 'Wylie', 'TX', 75098, 'https://ssl.cdn-redfin.com/photo/90/mbphoto/638/genMid.11793638_5.jpg', 2000, 3000);

ALTER TABLE houses
DROP COLUMN img;

ALTER TABLE houses
DROP COLUMN mortgage;

ALTER TABLE houses
DROP COLUMN rent;

ALTER TABLE houses
ADD COLUMN img TEXT;

ALTER TABLE houses
ADD COLUMN mortgage DECIMAL;

ALTER TABLE houses
ADD COLUMN rent DECIMAL;

--The above is all the SQL statements I ran during this skills check. I added img, mortgage and rent columns from the jump b/c I looked at the schemas in the planning document.
--When I got to part two and saw the columns were to be added I deleted them with the drop column and then added them back in to show competency for altering tables.