<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <title>Laravel</title>
        <link rel="stylesheet" href="../css/app.css" type="text/css">
        
    </head>
    <body>
        <div id="app" data=@json(Auth::user()->id)></div>
        <div class="panel-body">
        <form method="POST" action="{{route('logout')}}">
                {{ csrf_field() }}
                <button className="btn btn-danger btn-xs " type="submit">Cerrar Sesion</button>
            </div>
        </form>
       <script src="../js/app.js"></script>
    </body>
</html>