function iniciarContador(m_init) {
    var t_horas = document.querySelector('#timer-hours');
    var t_minutos = document.querySelector('#timer-minutes');
    var t_segundos = document.querySelector('#timer-seconds');

    var h = m_init -1;
    var m = 59;
    var s = 59;

    var contador = setInterval(function(){
        t_horas.innerHTML = (h > 9) ? ('' + h) : ('0' + h);
        t_minutos.innerHTML = (m > 9) ? ('' + m) : ('0' + m);
        t_segundos.innerHTML = (s > 9) ? ('' + s) : ('0' + s);  

        if(s > 0) s -= 1;
        else if(s == 0 && m > 0) { s = 59; m -=1; }
        else { m = m_init; }
    }, 1000);
}
iniciarContador(16)