var botaoPonto = window.document.getElementById("div_relogio");

    function relogio(){
        var data=new Date();
        var hor=data.getHours();
        var min=data.getMinutes();
        var seg=data.getSeconds();

        var atualizarTempo = hr + ":" + min + ":",seg;

        var atualizarTempo = setInterval("atualizarTempo");
            let dateToday = new Date()
            var hr = dateToday.getHours();
            var  min = dateToday.getMinutes();
            var  seg = dateToday.getSeconds();

    var Calendario = setInterval(function Calendario(){
        var  mes = dateToday.getMonth();
        var  ano = dateToday.getFullYear();
        var  diaMes = dateToday.getDate();
        var  diaSemana = dateToday.getUTCDay();

    if (hr < 10) horas.textContent = "0" + hr;
    if (min < 10) minutos.textContent = "0" + min;
    if (s < 10) segundos.textContent = "0" + s;

    var horas=hor + ":" + min + ":" + seg;
    document.getElementById("rel").value=horas;
    var timer=setInterval(relogio,1000);


    return ({
        dataAtual,
        ano,
        mes,
        diaMes,
        diaSemana,
        horas,
        minutos,
        segundos
    })
})}
