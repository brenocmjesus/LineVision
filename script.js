
"use strict"

var hh = 0, mm = 0, ss = 0, hh2 = 0, mm2 = 0, ss2 = 0, hh3 = 0, mm3 = 0, ss3 = 0, tempo = 1000, cron, tempo2 = 1000, cron2, tempo3 = 1000, cron3, start3Ligado = false, 
temporizador, num = 0, valorTotal, acabando, tempoReal, totalReal, totalizou;



//Inicia o temporizador
function start() {
    cron = setInterval(() => { timer(); }, tempo);
    iniciarContador();
    btnStart.disabled = true;
    btnPause.disabled = false;
}

//Para o temporizador mas não limpa as variáveis
function pause() {
    clearInterval(cron);
    pararContador();
    btnStart.disabled = false;
    btnPause.disabled = true;
}

//Para o temporizador e limpa as variáveis
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    document.getElementById('counter').innerText = '00:00:00';
}

//Faz a contagem do tempo e exibição
function timer() {
    ss++; //Incrementa +1 na variável ss
    if (ss == 59) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm
        if (mm == 59) { //Verifica se deu 59 minutos
            mm = 0;//Volta os minutos para 0
            hh++;//Adiciona +1 na variável hora
        }
    }
    //Cria uma variável com o valor tratado HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' +
        //se mm for menor que 10 então coloca o 0 antes senão mostra só os minutos.
        (mm < 10 ? '0' + mm : mm) + ':' +
        (ss < 10 ? '0' + ss : ss);
    //Insere o valor tratado no elemento counter
    document.querySelector('#counter').innerText = format;
    //Retorna o valor tratado
    return format;
}
// tempo parado2 ===============================================================================================
//Inicia o temporizador
function start2() {
    cron2 = setInterval(() => { timer2(); }, tempo2);
}
//Para o temporizador mas não limpa as variáveis
function pause2() {
    clearInterval(cron2);
}
//Para o temporizador e limpa as variáveis
function stop2() {
    clearInterval(cron2);
    hh = 0;
    mm = 0;
    ss = 0;
    document.getElementById('counter2').innerText = '00:00:00';
}

//Faz a contagem do tempo e exibição
function timer2() {
    ss2++; //Incrementa +1 na variável ss
    if (ss2 == 59) { //Verifica se deu 59 segundos
        ss2 = 0; //Volta os segundos para 0
        mm2++; //Adiciona +1 na variável mm
        if (mm2 == 59) { //Verifica se deu 59 minutos
            mm2 = 0;//Volta os minutos para 0
            hh2++;//Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    var format2 = (hh2 < 10 ? '0' + hh2 : hh2) + ':' +
        //se mm for menor que 10 então coloca o 0 antes senão mostra só os minutos.
        (mm2 < 10 ? '0' + mm2 : mm2) + ':' +
        (ss2 < 10 ? '0' + ss2 : ss2);
    //Insere o valor tratado no elemento counter
    document.querySelector('#counter2').innerText = format2;
    //Retorna o valor tratado
    return format2;
}

// tempo Total 3 ===============================================================================================

//Inicia o temporizador
function start3() {
    cron3 = setInterval(() => { timer3(); }, tempo3);
}

//Para o temporizador mas não limpa as variáveis
function pause3() {
    clearInterval(cron3);
}

//Para o temporizador e limpa as variáveis
function stop3() {
    clearInterval(cron3);
    hh3 = 0;
    mm3 = 0;
    ss3 = 0;
    document.getElementById('counter3').innerText = '00:00:00';
}

//Faz a contagem do tempo e exibição
function timer3() {
    ss3++; //Incrementa +1 na variável ss
    if (ss3 == 59) { //Verifica se deu 59 segundos
        ss3 = 0; //Volta os segundos para 0
        mm3++; //Adiciona +1 na variável mm
        if (mm3 == 59) { //Verifica se deu 59 minutos
            mm3 = 0;//Volta os minutos para 0
            hh3++;//Adiciona +1 na variável hora
        }
    }
    //Cria uma variável com o valor tratado HH:MM:SS
    var format3 = (hh3 < 10 ? '0' + hh3 : hh3) + ':' +
        //se mm for menor que 10 então coloca o 0 antes senão mostra só os minutos.
        (mm3 < 10 ? '0' + mm3 : mm3) + ':' +
        (ss3 < 10 ? '0' + ss3 : ss3);
    //Insere o valor tratado no elemento counter
    document.querySelector('#counter3').innerText = format3;
    //Retorna o valor tratado
    return format3;
}

function startAll() {
    start();
    pause2();
    if (start3Ligado == false) {
        start3();
        start3Ligado = true;
    }
}

function pauseParado() {
    pause();
    start2();
    pararContador()
}

function stopAll() {
    pause();
    pause2();
    pause3();
    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnPause").disabled = true;
    document.getElementById("btnStop").disabled = true;
    pararContador()
}


function reset() {
    stop();
    stop2();
    stop3();
    document.getElementById('contador').innerHTML ="" ;
    document.getElementById('unitys3').innerHTML ="" ;
}

//==== CONTADOR ==============================================================
function iniciarContador() { //Inicia a aparição do relógio
    temporizador = setInterval(contador, 7000);
    totalizou = setInterval(totalFinal, 1000);
    pegaTotal();
}

function contador() {
    num = num + 6;
    document.getElementById('contador').innerHTML = num;
}

function pararContador() {
    clearInterval(totalizou);
    clearInterval(temporizador);// para o relógio.
}


//=========== FALTA PRODUZIR ==================================================

//PEGAR O VALOR TOTAL DA PRODUÇÃO
function pegaTotal() {
    valorTotal = parseInt(document.getElementById("inputUnitys1").value);
}

function totalFinal() {
    acabando = valorTotal - num;
    document.getElementById('unitys3').innerHTML = acabando;
}
