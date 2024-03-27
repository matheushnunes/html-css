let Numero = Math.floor(Math.random() * 100) + 1
let tentativas = 0
var palA = document.getElementById('palpitesAnteriores')
var res = document.getElementById('res')
var perto = document.getElementById('perto')
var num = document.getElementById('num')
var tent = document.getElementById('tent')
var bot = document.getElementById('botao')
var resp = document.querySelectorAll('div#resp p')
var main = document.getElementById("main")
var reiniciar

function Palpite(){
    var n = Number(num.value)
    tentativas++
    tent.innerHTML = `Número de tentativas: ${tentativas}`
    if(tentativas == 1){
        palA.innerHTML = 'Palpites anteriores: '
        palA.innerHTML += `${n}`
    }else{
        palA.innerHTML += `, ${n}`
    }
    
    if(n < Numero){
        perto.innerHTML = 'Seu palpite está muito baixo!'
    }else{
        perto.innerHTML = "Seu palpite está muito alto!"
    }

    if(n == Numero){
        res.innerHTML = "Parabéns! Você acertou o número!"
        res.style.background = 'green'
        perto.innerHTML = ''
        Fimdejogo()
    }else if(n != Numero){
        res.textContent = "Errado!"
        res.style.background = 'red'
    }

    if(tentativas == 10){
        res.innerHTML = "|||FIM DE JOGO|||"
        res.innerHTML = `O número era ${Numero}`
        Fimdejogo()
    }
    num.value = ''
    num.focus()
}
function Fimdejogo(){
    num.disabled = true
    bot.disabled = true
    reiniciar = document.createElement('button')
    reiniciar.textContent = 'Reiniciar o jogo'
    main.appendChild(reiniciar)
    reiniciar.addEventListener('click', ReiniciarJogo)
}
function ReiniciarJogo(){
    tentativas = 0
    num.disabled = false
    bot.disabled = false
    for(var i = 0; i < resp.length; i++){
        resp[i].textContent = ''
    }
    reiniciar.parentNode.removeChild(reiniciar);
    Numero = Math.floor(Math.random() * 100) + 1;
}