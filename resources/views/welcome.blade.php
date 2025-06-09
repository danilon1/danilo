<meta name="csrf-token" content="{{ csrf_token() }}">
<div id="app"></div>

@viteReactRefresh
@vite(['resources/js/app.jsx', 'resources/css/app.css'])