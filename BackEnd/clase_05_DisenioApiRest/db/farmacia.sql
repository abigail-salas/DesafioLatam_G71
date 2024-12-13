CREATE DATABASE farmacia;

\c farmacia;

CREATE TABLE medicamentos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    stock INTEGER,
    precio INTEGER
);

INSERT INTO medicamentos (nombre, stock, precio) VALUES
('Paracetamol', 100, 50),
('Ibuprofeno', 200, 80),
('Amoxicilina', 50, 120),
('Aspirina', 300, 60),
('Metamizol', 150, 90),
('Clorfenamina', 75, 40),
('Diclofenaco', 120, 110),
('Omeprazol', 90, 150),
('Ranitidina', 0, 100),
('Vitamina C', 250, 30),
('Salbutamol', 80, 200),
('Penicilina', 30, 180),
('Insulina', 20, 300),
('Levotiroxina', 50, 250),
('Ketorolaco', 180, 75),
('Alopurinol', 60, 85),
('Azitromicina', 40, 150),
('Naproxeno', 70, 95),
('Fluoxetina', 25, 230),
('Lorazepam', 15, 250);