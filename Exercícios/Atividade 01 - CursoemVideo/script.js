function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.<br>`
    if (hora >= 0 && hora < 12){
        msg.innerHTML = `Tenha um dia abençoado e caloroso. Bom dia!`
        document.body.style.background = '#ffab02'
        img.src = 'img/fotomanha.png'
        
    } else if (hora >= 12 && hora <= 18){
        msg.innerHTML += `Boa tarde!`
        img.src = 'img/fototarde.png'
        document.body.style.background = '#885e5f'
        
    } else {
        msg.innerHTML += `Tenha um bom descanso, e boa noite!`
        document.body.style.background = '#043352'
        img.src = 'img/fotonoite.png'
 }
    
}


    

