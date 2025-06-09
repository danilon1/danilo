<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RespuestaAutomatica extends Mailable
{
    use Queueable, SerializesModels;

    public $nombre;

    public function __construct($data)
    {
        $this->nombre = $data['nombre'];
    }

    public function build()
    {
        return $this->markdown('emails.contacto.respuesta')
            ->subject('¡Gracias por tu mensaje!');
    }
}
