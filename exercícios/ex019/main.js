function enviar(){
    let nome = document.querySelector('input#txnome').value;
    let sobrenome = document.querySelector('input#txsobre').value;
    let idade = Number(document.querySelector('input#txidade').value);
    let teste = Number(document.querySelector('input#testerob').value);
    let res = document.querySelector('div#res');
    let img = document.createElement('img');
        img.setAttribute('id', 'foto');

    if(teste != 7){
        window.alert('Preencha corretamente o formulário!')
    } else{
        window.alert('Este é um formulário simples, não será resgistrado seus dados!')
        res.innerHTML = `Olá ${nome} ${sobrenome}, que bom que está aqui! <br> Como presente, aceite esta linda ilustração! \u{1F970}<br>`
        
        img.setAttribute('src', 'image/foto1.png')
        res.appendChild(img)
    }     
}

