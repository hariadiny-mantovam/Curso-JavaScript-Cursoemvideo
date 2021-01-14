function calcular (){
    let numero1 = document.querySelector('input#txnumero');
    let tabuada = document.querySelector('select#tabuada')
    let res = document.querySelector('option#res');

    if (numero1.value.length == 0){
        window.alert('Insira um número válido!')
    } else{
        numero = Number(txnumero.value)
        tabuada.innerHTML = '';
        for(let contador = 1; contador <= 10; contador= contador + 1){
            let item = document.createElement('option')
            item.text = `${numero} x ${contador} = ${numero * contador}`;
            item.value = `tab${contador}`
            tabuada.appendChild(item);
        }
    } 
}

