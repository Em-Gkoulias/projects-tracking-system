<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link href="{{ asset('sass/style.scss') }}" rel="stylesheet">

        <title>Laravel</title>

    </head>

    <body>
        <div id="root"></div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>

        
</html>
