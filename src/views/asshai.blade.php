<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Asshai Us</title>
</head>
<body>
    <h1>Asshai es la luz</h1>
<form action="{{route('asshai')}}" method="POST">
        @csrf
        <input type="text" name="name" placeholder="Su nombre por favor">
        <input type="email" name="email" placeholder="Valide su email">
        <textarea name="message" id="" cols="30" rows="10" placeholder="Su consulta"></textarea>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>