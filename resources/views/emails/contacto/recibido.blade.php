@component('mail::message')
# Nuevo mensaje de contacto

Has recibido un mensaje desde tu sitio web:

- **Nombre**: {{ $nombre }}
- **Email**: {{ $email }}

---

**Mensaje:**

{{ $mensaje }}

@endcomponent