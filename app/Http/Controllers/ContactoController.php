<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ContactoRecibido;
use App\Mail\RespuestaAutomatica;
use Illuminate\Support\Facades\Mail;

class ContactoController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'mensaje' => 'required|string|max:5000',
        ]);

        Mail::to('daniloedelgado@gmail.com')->send(new ContactoRecibido($validated));

        Mail::to($validated['email'])->send(new RespuestaAutomatica($validated));

        return response()->json(['message' => 'Mensaje enviado con éxito']);
    }
}
