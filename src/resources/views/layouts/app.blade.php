<!doctype html>
<html lang="en">
    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta charset="utf-8">
{{--         <meta name="viewport" content="width=device-width, initial-scale=1">
 --}}        
        <title>Laravel</title>
        <link rel="stylesheet" href="../css/app.css" type="text/css">
        
    </head>
    <body>
        <div class="container">
            <hr>
            @if (session()->has('flash'))
             <div class="alert alert-info">{{session('flash')}}</div>
            @endif
            @yield('content')
        </div>
        {{-- <div id="app"></div>
       <script src="../js/app.js"></script> --}}
    </body>
</html>