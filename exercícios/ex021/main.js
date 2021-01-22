function contar(){
    let res = document.querySelector('div#res');
    let num;
    
    res.innerHTML = '<p> Contando de 1 até 10 ...</p>'
    for(num = 1; num <= 10; num++){
        res.innerHTML += `\u{1F449} ${num} `;
    }
    res.innerHTML += `\u{1F3C1}`

    
}