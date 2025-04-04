import criarTabelaUsuarios from './ap.js'

function envia_informacoes()
{
    /*Obtém variáveis*/
    var nome = window.document.getElementById("inome").value
    var endereco = window.document.getElementById("iendereco").value
    var bairro = window.document.getElementById("ibairro").value
    var tel_contato = window.document.getElementById("itel_contato").value
    var email = window.document.getElementById("iemail").value

    window.alert(`Dados ${nome}, ${endereco}, ${bairro}, ${tel_contato}, ${email}`)

    criarTabelaUsuarios(nome, endereco, bairro, tel_contato, email)

    window.document.getElementById("inome").value = ""
    window.document.getElementById("iendereco").value = ""
    window.document.getElementById("ibairro").value = ""
    window.document.getElementById("itel_contato").value = ""
    window.document.getElementById("iemail").value = ""
}
