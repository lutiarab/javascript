function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value > ano)){
        alert('[ERROR] Verifique os dados e tente novamente!')
    }else{
       //alert('tudo certo')
       var fsex = document.getElementsByName('radsex')//não vou usar [] no momento
       var idade = ano - Number(fano.value)//calcular a idade

        //-----criar automaticamente a imagem/ elemento no html---------
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        //---------------------------------------------------------------


       //res.innerHTML = `Idade calculada ${idade}`//para testarse função esta correta
       var genero = ''//getElemtByName[]
       if (fsex[0].checked){
        genero = 'Homem'


        //testar se é criança, jovem, adulto ou idoso
        if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'foto-criança-m.png')
        } else if(idade < 21){
            //jovem
        }else if(idade < 50){
            //adulto
        }else{
            //idoso
        }


       } else if (fsex[1]){
        genero = 'Mulher'

        //testar se é criança, jovem, adulta ou idosa
        if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'foto-criança-f.png')
        } else if(idade < 21){
            //jovem
        }else if(idade < 50){
            //adulto
        }else{
            //idoso
       }
    }
       res. innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }

}