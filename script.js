const pegaNome = () => {

    let nome = document.getElementById('nome').value;
    
    let data_nascimento = document.getElementById('data_nascimento').value;

    let nome_pai = document.getElementById('nome_pai').value;
    
    let nome_mae = document.getElementById('nome_mae').value;
    
    let pessoa = {
        nome: nome,
        dataDeNascimento: data_nascimento,
        nomePai: nome_pai,
        nomeMae: nome_mae
    }

    console.table(pessoa);

    document.getElementById("nome").value = "";
    document.getElementById('data_nascimento').value = "";
    document.getElementById('nome_pai').value = "";
    document.getElementById('nome_mae').value = "";
}