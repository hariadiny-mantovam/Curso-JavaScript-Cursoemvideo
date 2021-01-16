

function adicionarNumero(num){
    //lógica
    var num = [];
    var tabela = document.querySelector('select#snum')
    if (num <= 0 || num > 100){
        window.alert('Digite um número válido!')
    } else{
        var selecao = document.createElement('option');
        selecao.text = `Adicionado número ${num}`;
        tabela.appendChild(selecao); 
        resf.innerHTML = `${num}`
    }
}

adicionarNumero(Number(document.querySelector('input#txnum').value));




/*function adicionar(num){
    var num = Number(document.querySelector('input#txnum').value);
    var tabela = document.querySelector('select#snum')
    //let res = document.querySelector('option#res');
    let resf = document.querySelector('p#resf');

    if (num <= 0 || num > 100){
        window.alert('Digite um número válido!')
    } else{
        let numselecionado = []
        var selecao = document.createElement('option');
        selecao.text = `Adicionado número ${num}`;
        tabela.appendChild(selecao); 
        resf.innerHTML = `${num}`
    }
}*/

