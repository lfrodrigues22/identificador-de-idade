function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    
    if (fano.value.lenght == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >=0 && idade < 11){
                 // Criança
                 img.setAttribute('src', 'criancaMas.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemMas.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultoMas.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosoMas.png')
            }
    
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >=0 && idade <= 11){
                // Criança
                img.setAttribute('src', 'criancaFem.png')
           } else if (idade < 21) {
               //jovem
               img.setAttribute('src', 'jovemFem.png')
           } else if (idade < 50){
               //adulto
               img.setAttribute('src', 'adultoFem.png')
           } else {
               //idoso
               img.setAttribute('src', 'idosoFem.png')
           }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}
}
