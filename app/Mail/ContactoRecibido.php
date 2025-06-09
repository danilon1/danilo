<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactoRecibido extends Mailable
{
    use Queueable, SerializesModels;

    public $nombre;
    public $email;
    public $mensaje;

    public function __construct($data)
    {
        $this->nombre = $data['nombre'];
        $this->email = $data['email'];
        $this->mensaje = $data['mensaje'];
    }

    public function build()
    {
        return $this->markdown('emails.contacto.recibido')
            ->subject('Nuevo contacto desde tu sitio web');
    }
}
