CREATE DATABASE agenciaviagem;

USE agenciaviagem;

CREATE TABLE cupom (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
	estado VARCHAR(40),
    	valor numeric(16,2),
	data_viagem DATE,	
	cod_cupom INT    	
);

CREATE TABLE usuario (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    	nome VARCHAR(60),
    	cpf VARCHAR(11),
    	endereco VARCHAR(60),
    	telefone VARCHAR(11),
	id_viagem INT REFERENCES cupom(cod_cupom)
);

SELECT * FROM usuario;

SELECT * FROM cupom;

INSERT INTO cupom VALUES(NULL,'Rio de Janeiro', 1200, null, 012522);
INSERT INTO cupom VALUES(NULL,'Brasília', 1800, null, 012533);
INSERT INTO cupom VALUES(NULL,'Fortaleza', 2800, null, 012544);
INSERT INTO cupom VALUES(NULL,'Macéio', 2500, null, 012555);
INSERT INTO cupom VALUES(NULL,'Pernambuco', 2700, null, 012566);
INSERT INTO cupom VALUES(NULL,'São Paulo', 1900, null, 012577);


SELECT usuario.nome, usuario.cpf, cupom.estado, cupom.valor, cupom.data_viagem
FROM usuario
INNER JOIN cupom
ON usuario.id_viagem = cupom.cod_cupom;
