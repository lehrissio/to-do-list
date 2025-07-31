<h1 align="center" >📝 To-Do List Fullstack</h1>

<p align="center">
  Aplicação web para gerenciamento de tarefas (To-Do List), desenvolvida com tecnologias <strong>HTML, CSS, JavaScript, PHP e PostgreSQL</strong>.
  <br>Este projeto permite ao usuário criar, visualizar, marcar como concluídas e excluir tarefas de forma simples e interativa.<br>
  <br>
  <img width="90%" height="90%" alt="todo list" src="https://github.com/user-attachments/assets/c62ae4b8-fc8a-465a-af9e-4288c2c5415a" />
</p>

## 🚀 Tecnologias Utilizadas

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (ES6+)

- **Backend:**
  - PHP 8.0+
  - PostgreSQL

## 📋 Funcionalidades

- ✅ Adicionar novas tarefas
- ✏️ Editar tarefas existentes
- 🗑️ Excluir tarefas
- ✔️ Marcar tarefas como concluídas
- 🔍 Filtrar tarefas por status
- 💾 Persistência de dados no PostgreSQL
- 📱 Interface responsiva

## 🎯 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **PHP 8.0 ou superior**
  ```bash
  php --version
  ```

- **PostgreSQL 12 ou superior**
  ```bash
  psql --version
  ```

## 🛠️ Instalação e Configuração

### 1. Clone o Repositório

```bash
git clone https://github.com/lehrissio/to-do-list.git
cd to-do-list
```

### 2. Configuração do Banco de Dados

#### 2.1. Acesse o PostgreSQL
```bash
# Linux/Mac
sudo -u postgres psql

# Windows (se PostgreSQL estiver no PATH)
psql -U postgres
```

#### 2.2. Crie o banco de dados
```sql
CREATE DATABASE to-do;
\c to-do;
```

#### 2.3. Crie a tabela de tarefas
```sql
CREATE TABLE task (
    id SERIAL PRIMARY KEY,
    description VARCHAR(50) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
);
```

### 3. Configure a conexão com o banco
Edite o arquivo `database/conn.php`:

```php
<?php
return [
    'host' => 'localhost',
    'database' => 'todolist_db',
    'username' => 'seu_usuario',
    'password' => 'sua_senha'
];
?>
```

### 4. Inicie o Servidor

```bash
php -S localhost:8000
```

### 5. Acesse a Aplicação

Abra seu navegador e acesse:
```
http://localhost:8000
```

---

⭐ Se gostou do projeto, dê uma estrela!
