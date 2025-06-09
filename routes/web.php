<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactoController;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/contacto', [ContactoController::class, 'store']);
