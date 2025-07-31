CREATE TABLE task (
    id SERIAL PRIMARY KEY,
    description VARCHAR(50) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
);

INSERT INTO task (description, completed) VALUES ('Tarefa de casa', false);
INSERT INTO task (description, completed) VALUES ('Estudar SQL', true);
INSERT INTO task (description, completed) VALUES ('Enviar relatório semanal', true);
INSERT INTO task (description, completed) VALUES ('Organizar arquivos', false);
INSERT INTO task (description, completed) VALUES ('Preparar apresentação', false);
INSERT INTO task (description, completed) VALUES ('Revisar código do projeto', true);
