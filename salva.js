import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function criarTabelaUsuarios(nome, endereco, bairro, contato, email)
    {
        const db = await open
        ({
            filename: './banco.db',
            driver: sqlite3.Database,
        })

        
        var vnome = window.document.getElementById('inome').value
        var vendereco = window.document.getElementById('iendereco').value
        var vbairro = window.document.getElementById('ibairro').value
        var vtel_contato = window.document.getElementById('itel_contato').value
        var vemail = window.document.getElementById('iemail').value
    
        criarTabelaUsuarios('vnome', 'vendereco', 'vbairro', 'vtel_contato', 'vemail');


        db.run
        (`CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nome TEXT, endereco TEXT, bairro TEXT, contato TEXT, email TEXT)`);

        db.run(`INSERT INTO usuarios (nome, endereco, bairro, contato, email) VALUES (?, ?, ?, ?, ?)`, [nome, endereco, bairro, contato, email])
    }
