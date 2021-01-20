function iniciar(){
    
    let ano =  window.prompt('Em que ano você nasceu?');
    let res = document.querySelector('div#res');
    let data = new Date();
    let anoatual = data.getFullYear();

    if(ano == ''){
        window.alert('Acesso inválido')
        res.innerHTML = ''
    } else{
        let idadeatual = anoatual - ano;
        res.innerHTML=`Quem nasceu em ${ano} vai completar ${idadeatual} anos em ${anoatual}. `
    
        if (idadeatual >= 14){
            res.innerHTML += 'Você estará na pré adolescência!'
        } else if (idadeatual == 18){
            res.innerHTML += 'Você terá maioridade!'
        }
    }

     
}