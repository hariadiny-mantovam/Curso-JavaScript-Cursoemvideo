function contar(){
    let txtinicio = document.querySelector('input#txinicio');
    let txtfim = document.querySelector('input#txfim');
    let txtpule = document.querySelector('input#txpule');
    let res = document.querySelector('div#res');

    if(txtinicio.value.length == 0 || txtfim.value.length == 0 || txpule.value.length == 0){
        window.alert('Digite um número válido!');
    } else {
        res.innerHTML = 'Contando: <br>';
        let inicio = Number(txinicio.value);
        let fim = Number(txfim.value);
        let pule = Number(txpule.value);
        if(pule <= 0){
            alert('[ERROR] Considerando espaçamento com valor 1');
            pule = 1;
        }
        
        if(inicio < fim){
            //Contagem crescente
            for(inicio; inicio <= fim; inicio = inicio + pule){
                res.innerHTML += `\u{1F449} ${inicio} `;
            }
            
        } else {
            //Contagem decrescente
            for(inicio; inicio >= fim; inicio = inicio - pule){
                res.innerHTML += `  \u{1F449} ${inicio}`;
            }
         }
        res.innerHTML += `\u{1F64C}.`; 
    }

}