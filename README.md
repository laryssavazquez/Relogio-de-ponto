<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Sistema Relógio de Ponto</title>
</head>
<body>

    <div class="relogio">
        <div class="display">00:00:00</div>
        <footer> Programa de Registro de Ponto - Laryssa Vazquez</footer>
     </div>

    <div>
        <div class="calendario">
            <span id="diaSemana">Dia da Semana</span>
            <span>:</span>

            <span id="diaMes">Dia da Mes</span>
            <span>:</span>

            <span id="ano">Ano</span>
            <span>:</span>
    </div>

    <div class="formulario">
        <form>
            <input type="text" id="nome">
            <br><br>
            <input type="number" id="matricula">
            <br><br>
            <button type="button" id="botaoPonto">Marque seu Ponto</button>
        </form>
    </div>

    <script src="app.js"></script>
</body>
</html>
