CREATE DATABASE ameibbou;
USE ameibbou;

CREATE TABLE responsaveis (
    id_responsavel INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(100) UNIQUE,
    
    senha_responsavel VARCHAR(255) NOT NULL
);

CREATE TABLE criancas (
    id_usuario INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_usuario VARCHAR(45),
    data_nascimento DATE NOT NULL,
    genero varchar(20),
    hiperfoco varchar(45),
    id_responsavel INT,
    FOREIGN KEY (id_responsavel) REFERENCES responsavel(id_responsavel)
);

CREATE TABLE jogos (
    id_jogo INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    descricao VARCHAR(255)
);

CREATE TABLE usuario_personagem (
    id_personagem INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE progresso (
    id_progresso INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_jogo INT NOT NULL,
    nivel_atual INT NOT NULL,
    pontuacao INT NOT NULL,
    ultima_jogada DATE,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_jogo) REFERENCES jogos(id_jogo)
);

CREATE TABLE conteudo_educacional (
    id_conteudo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipo ENUM('Pergunta', 'Video', 'Audio', 'Imagem'),
    dificuldade VARCHAR(50),
    descricao TEXT
);

CREATE TABLE configuracoes (
    id_conf INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    tema VARCHAR(50),
    volume INT,
    acessibilidade TEXT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE controle_parental (
    id_controle INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    relatorios TEXT,
    tempo_uso INT,
    permissoes TEXT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);
INSERT INTO responsavel (nome, email, senha_responsavel) 
VALUES ('Mãe da Ingrid', 'mae2@email.com', 'senha82365');
SELECT * FROM responsavel WHERE email = 'mae2@email.com';
SELECT * FROM jogos WHERE id_jogo = 1;
INSERT INTO jogos (nome, descricao) VALUES ('Jogo Exemplo', 'Descrição do jogo');
SELECT * FROM jogos;
SELECT * FROM usuario WHERE id_usuario = 1;
