import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

module.exports = async function criarTabelaUsuarios(nome, endereco, bairro, contato, email)
    {
        const db = await open
        ({
            filename: './banco.db',
            driver: sqlite3.Database,
        })

        db.run
        (`CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nome TEXT, endereco TEXT, bairro TEXT, contato TEXT, email TEXT)`);

        db.run(`INSERT INTO usuarios (nome, endereco, bairro, contato, email) VALUES (?, ?, ?, ?, ?)`, [nome, endereco, bairro, contato, email])
    }
