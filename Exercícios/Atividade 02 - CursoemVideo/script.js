function verificar() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var txano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
    if (txano.value.length == 0 || Number(txano.value) > anoatual){
        window.alert('[ERROR] Informe o dados corretamente.')
    } else {
        var fsexo = document.getElementsByName('radsexo')
        var idade = anoatual - Number(txano.value)
        var gênero = ''
        var img = document.createElement('img') // Adicionar imagem dinamicamente pelo JS, entre aspas simples é uma <tag>
        img.setAttribute('id', 'foto') //Nesta etapa, foi criado um 'id' com nome 'foto', para a tag <img>.
        if (fsexo[0].checked){
            gênero = 'masculino'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src' , 'img/homemcrianca.png') 
            } else if ( idade < 21){
                //Jovem
                img.setAttribute('src' , 'img/homemjovem.png') 
            } else if ( idade < 50){
                //Adulto
                img.setAttribute('src' , 'img/homemadulto.png') 
            } else {
                //Idoso
                img.setAttribute('src' , 'img/homemidoso.png') 
            }

        } else if (fsexo[1].checked){
            gênero = 'feminino'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src' , 'img/mulhercrianca.png')
            } else if ( idade < 21){
                //Jovem
                img.setAttribute('src' , 'img/mulherjovem.png') 
            } else if ( idade < 50){
                //Adulto
                img.setAttribute('src' , 'img/mulheradulta.png') 

            } else {
                //Idoso
                img.setAttribute('src' , 'img/mulheridosa.png') 

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos uma pessoa do gênero ${gênero} com <strong> ${idade} </strong> anos.`
        res.appendChild(img) //Adiciona elemento
    }

    


    
}
