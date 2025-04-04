import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function criarTabelaUsuarios(nome, endereco, bairro, contato, email)
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

    function envia_informacoes()
        {
            /*Obtém variáveis*/
            var nome = Window.document.getElementById("inome").value;
            var endereco = Window.document.getElementById("iendereco").value;
            var bairro = Window.document.getElementById("ibairro").value;
            var tel_contato = Window.document.getElementById("itel_contato").value;
            var email = Window.document.getElementById("iemail").value;

            window.alert(`Dados ${nome}, ${endereco}, ${bairro}, ${tel_contato}, ${email}`);

            criarTabelaUsuarios(nome, endereco, bairro, tel_contato, email);

            Window.document.getElementById("inome").value = "";
            Window.document.getElementById("iendereco").value = "";
            Window.document.getElementById("ibairro").value = "";
            Window.document.getElementById("itel_contato").value = "";
            Window.document.getElementById("iemail").value = "";
        }
    