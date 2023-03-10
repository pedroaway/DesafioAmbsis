CREATE DATABASE AMBSIS;

USE AMBSIS;

CREATE TABLE EMPRESAS(
	RAZAO_SOCIAL VARCHAR(100),
    CNPJ VARCHAR(14) NOT NULL PRIMARY KEY,
    CIDADE VARCHAR(50),
    ESTADO VARCHAR(30),
    BAIRRO VARCHAR(50),
    COMPLEMENTO VARCHAR(100),
    ID_LICENCA INT
	
);

CREATE TABLE LICENCAS(
	ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	NUMERO TEXT,
	ORGAO_AMBIENTAL TEXT,
    EMISSAO DATE,
    VALIDADE DATE,
    EMPRESA VARCHAR(14),
    FOREIGN KEY (EMPRESA) REFERENCES EMPRESAS(CNPJ)
);


SELECT * FROM EMPRESAS;
