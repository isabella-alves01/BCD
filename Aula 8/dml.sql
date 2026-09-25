-- Active: 1788519384518@@127.0.0.1@3306@smartcoffee_dml_isabella


DROP DATABASE IF NOT EXISTS SMARTCOFFEE_DML_ISABELLA1;
CREATE DATABASE IF NOT EXISTS SMARTCOFFEE_DML_ISABELLA1;

CREATE TABLE Cliente(
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100)NOT NULL,
    email VARCHAR(120)NOT NULL,
    telefone VARCHAR(15),
    cidade VARCHAR(60) NOT NULL,
    ativo BOOLEAN NOT NULL DEFAULT TRUE 
);

CREATE TABLE categoria(
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(60) NOT NULL UNIQUE
);


INSERT INTO cliente(nome,email,telefone,cidade,ativo) VALUES
('Arthur Nunes','arthur@email.com','1999999991','Rondonia',TRUE),
('Beatriz Raissa','beatriz@email.com','1999999991','Limeira',TRUE),
('Davi Ferreira','davi@email.com',NULL,'Limeira',TRUE),
('Francisco Magri','chico@email.com','1999999994','Limeira',TRUE),
('Franz Kramer','franz@email.com','1999999994','Limeira',TRUE),
('Gabriel Nouqueira','gabriel@email.com','1999999995','Limeira',TRUE),
('Gabrielli Araujo','gabrielli@email.com','1999999996','Americana',TRUE),
('Isabella Alves','isabella@email.com',NULL,'Rondonia',TRUE),
('Keynan Santos','keynan@email.com','1999999998','Santos',TRUE),
('Larissa Ramires','larissa@email.com','1999999998','Limeira',TRUE),
('Leonardo Dia','leonardo@email.com','1999999999','Valinhos',TRUE),
('Luana Lima','luana@email.com','1999999910','Limeira',TRUE),
('Luccas manfredi','luccas@email.com','1999999910','Limeira',TRUE),
('Livia Stein','livia@email.com','1999999991','Campinas',TRUE),
('Dandara Dias','dandara@gmail.com','1999999993','Limeira',TRUE);
INSERT INTO categoria (nome) VALUES
('cafés'),('bebidas Geladas'),('Bebidas Quentes'),('Salgados'),('Sobremesas'),('Combo');

INSERT INTO categoria (nome) VALUES
('Doces');

SET @CATEGORIA = LAST_INSERT_ID();

SELECT @CATEGORIA;

-- ATUALIZANDO OU MODIFICANDO DADOS NO BD
-- LEMBRAR DE SEMPRE EXECUTAR O SELECT PARA ATUALIZAR (UPDATE)
-- E NUNCA JAMAIS NEVER FAÇA UM UPDATE SEM WHERE
-- EX 1: MODIFICANDO VALORES INDIVIDUAIS


UPDATE Cliente
SET telefone = '1988880001'
WHERE id_cliente = 8 


-- EX 2: MODIFICANDO VARIOS VALORES 
-- CONSULTAR DADOS NO BD
UPDATE Cliente
SET telefone = '19999999901',
    CIDADE='Piracicaba'
    WHERE id_cliente = 8;



---APAGAR DADOS DA TABELA NO BD
DELETE FROM cliente
WHERE id_cleinte = 8;


SELECT * FROM cliente;

SELECT * FROM;

CONSUTAR DADOS NO BD;

SELECT * FROM cliente;
WHERE id_cliente = 9;

SELECT * from categoria;