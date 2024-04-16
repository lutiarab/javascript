function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12){
        //Bom Dia!
        img.src = 'foto-amanhecer-4.png'
        document.body.style.background = '#a83600'
        document.getElementsByClassName('texto')[0].style.color = 'black'
        document.getElementsByClassName('texto')[1].style.color = 'black'
    }else if (hora >= 12 && hora <= 18){
        //Boa Tarde!
        img.src = 'foto-entardecer-1.png'
        document.body.style.background = '#ff7f02'
    }else {
        //Boa Noite
        img.src = 'foto-anoitecer-1.png'
        document.body.style.background = '#3e5366'
    }

}