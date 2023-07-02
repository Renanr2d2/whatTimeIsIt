function carregar() {
    let msg = document.querySelector('div#msg')
    let imagem = document.getElementById('image')
    let favicon = document.getElementById('fav')
    let data = new Date()
    let hora = 14
    //let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora <= 4) {
        msg.innerHTML = `Agora são 0${hora} horas da madrugada!`
        imagem.src = "assets/noite.png"
        imagem.alt = "foto de noite"
        favicon.href = 'assets/favicon-noite.ico'
        document.body.style.background = '#232b3b'
    } else if (hora >= 5 && hora <= 9) {
        msg.innerHTML = `Agora são 0${hora} horas da manhã!`
        imagem.src = "assets/manha.png"
        imagem.alt = "foto de manhã"
        favicon.href = 'assets/favicon-dia.ico'
        document.body.style.background = '#ce9f74'
    } else if (hora == 10 || hora == 11) {
        msg.innerHTML = `Agora são ${hora} horas da manhã!`
        imagem.src = "assets/manha.png"
        imagem.alt = "foto de manha"
        favicon.href = 'assets/favicon-dia.ico'
        document.body.style.background = '#ce9f74'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Agora são ${hora} horas da tarde!` 
        imagem.src = "assets/tarde.png"
        imagem.alt = "foto de tarde"
        favicon.href = 'assets/favicon-tarde.ico'
        document.body.style.background = '#A0947C'
    } else if (hora >= 19 && hora <= 23) {
        msg.innerHTML = `Agora são ${hora} horas da noite!`
        imagem.src = "assets/noite.png"
        imagem.alt = "foto de noite"
        favicon.href = 'assets/favicon-noite.ico'
        document.body.style.background = '#232b3b'
    }
}