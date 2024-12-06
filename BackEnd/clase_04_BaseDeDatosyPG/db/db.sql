CREATE DATABASE plan_de_viajes;

CREATE TABLE viajes (
    id SERIAL PRIMARY KEY,
    destino VARCHAR(200) NOT NULL,
    presupuesto INT NOT NULL
);