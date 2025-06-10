import React, { useState } from "react";

const FormComponent = ({ dark }) => {
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    });

    const [errors, setErrors] = useState({});
    const [estado, setEstado] = useState(""); // "", "enviando", "enviado", "error"

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        // Limpiar errores cuando el usuario escribe
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Bloqueo para evitar envíos múltiples si ya está enviando
        if (estado === "enviando") return;

        setEstado("enviando");
        setErrors({});

        try {
            const response = await fetch('/contacto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
                },
                body: JSON.stringify(form)
            });

            const data = await response.json();

            if (!response.ok) {
                if (response.status === 422) {
                    // Validación fallida
                    setErrors(data.errors || {});
                    throw new Error('Error de validación');
                }
                throw new Error(data.message || 'Error en el envío');
            }

            setEstado("enviado");
            setForm({ nombre: "", email: "", mensaje: "" });
        } catch (error) {
            console.error('Error:', error);
            setEstado("error");
        } finally {
            setTimeout(() => setEstado(""), 5000);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`max-w-xl mx-auto p-8 mt-4 rounded-2xl shadow-lg transition 
            ${dark ? "bg-gray-800 text-gray-100 shadow-black/30" : "bg-white text-gray-800"}`}
        >
            <div className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Tu nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                        className={`w-full p-3 rounded-lg border placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                        ${dark ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" : "bg-gray-100 border-gray-300 text-black"}
                        ${errors.nombre ? 'border-red-500' : ''}`}
                    />
                    {errors.nombre && <p className="mt-1 text-sm text-red-500">{errors.nombre}</p>}
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Tu correo electrónico"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className={`w-full p-3 rounded-lg border placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                        ${dark ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" : "bg-gray-100 border-gray-300 text-black"}
                        ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                    <textarea
                        name="mensaje"
                        placeholder="Tu mensaje"
                        value={form.mensaje}
                        onChange={handleChange}
                        required
                        rows="4"
                        className={`w-full p-3 rounded-lg border placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                        ${dark ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" : "bg-gray-100 border-gray-300 text-black"}
                        ${errors.mensaje ? 'border-red-500' : ''}`}
                    />
                    {errors.mensaje && <p className="mt-1 text-sm text-red-500">{errors.mensaje}</p>}
                </div>
            </div>
            <button
                type="submit"
                disabled={estado === "enviando"}
                className={`inline-block w-full py-3 mt-4 font-semibold rounded-lg shadow-md transition 
        ${estado === "enviando" ? "bg-indigo-400 text-white cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 text-white"}`}
            >
                {estado === "enviando" ? (
                    <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                    </span>
                ) : "Enviar"}
            </button>

            {estado === "enviado" && (
                <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-center">
                    ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
                </div>
            )}
            {estado === "error" && (
                <div className="mt-4 p-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg text-center">
                    Ocurrió un error. Por favor, inténtalo de nuevo más tarde.
                </div>
            )}
        </form>
    );
};

export default FormComponent;