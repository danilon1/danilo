<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Danilo Delgado</title>

    @viteReactRefresh

    @vite(['resources/js/app.jsx', 'resources/css/app.css'])
</head>

<body>
    <div id="app"></div>
</body>

</html>