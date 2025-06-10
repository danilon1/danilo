import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import FormComponent from "./components/FormComponent";

const skills = [
    {
        name: "Desarrollo Backend",
        icon: "💻",
        desc: "APIs robustas y escalables con Laravel, PHP y MySQL.",
    },
    {
        name: "Frontend Moderno",
        icon: "🎨",
        desc: "Interfaces limpias y responsivas con Tailwind y React",
    },
    {
        name: "Automatización y Herramientas Web",
        icon: "⚙️",
        desc: "Creo soluciones web que automatizan procesos y facilitan el trabajo diario.",
    },
    {
        name: "Integración de Pasarelas de Pago",
        icon: "💳",
        desc: "Experiencia en integrar Mercado Pago para transacciones seguras y eficientes.",
    },
    {
        name: "UX Centrada en Personas",
        icon: "🧠",
        desc: "Diseño experiencias pensadas para que los usuarios disfruten y entiendan el sistema.",
    },
    {
        name: "Soporte y Mejora Continua",
        icon: "🔄",
        desc: "Compromiso post-entrega para mantener y evolucionar los sistemas sin perder calidad.",
    },
    {
        name: "PHP Avanzado y POO",
        icon: "📜",
        desc: "Certificado en Diplomatura Full Stack (210 hs), especializado en PHP avanzado y programación orientada a objetos.",
    },
    {
        name: "Comunicación efectiva",
        icon: "🗣️",
        desc: "Años de liderazgo de equipos y talleres de coaching que potencian mi inteligencia emocional y comunicación efectiva.",
    },
    {
        name: "Respeto y compromiso",
        icon: "🤝",
        desc: "Valores sólidos que aplico en cada línea de código y en cada proyecto.",
    },
];




function App() {
    const [dark, setDark] = useState(false);

    return (
        <div className={`${dark ? "bg-gray-900 text-white" : "bg-white text-gray-900"} transition-colors duration-500`}>
            {/* Botón modo oscuro */}
            <button
                onClick={() => setDark(!dark)}
                className={`fixed top-4 right-4 z-50 p-3 rounded-full transition
                ${dark ? "bg-yellow-400 hover:bg-yellow-500" : "bg-indigo-600 hover:bg-indigo-700"}`}
                aria-label="Toggle dark mode"
                title={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
                {dark ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.485-10.485l-.707.707M4.222 19.778l-.707.707M21 12h-1M4 12H3m16.485 5.485l-.707-.707M4.222 4.222l-.707-.707M12 7a5 5 0 000 10 5 5 0 000-10z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                    </svg>
                )}
            </button>

            {/* Botón flotante WhatsApp */}
            <a
                href="https://wa.me/543543550798"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white rounded-full px-4 py-3 shadow-lg hover:bg-green-600 transition"
                title="Contactar por WhatsApp"
            >
                {/* Ícono WhatsApp */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M16 .396C7.164.396.002 7.558.002 16.396c0 2.883.76 5.646 2.211 8.093L.02 32l7.712-2.013a15.91 15.91 0 008.268 2.26h.001c8.836 0 16-7.162 16-16.001 0-8.836-7.164-15.99-16-15.99zm0 29.31a13.26 13.26 0 01-6.746-1.834l-.483-.288-4.582 1.195 1.22-4.459-.315-.455A13.26 13.26 0 1129.26 16c0 7.314-5.946 13.258-13.26 13.258zm7.357-9.839c-.402-.2-2.376-1.174-2.745-1.309-.369-.134-.637-.2-.906.2-.268.402-1.04 1.309-1.275 1.576-.234.268-.469.3-.871.1-.402-.2-1.697-.624-3.234-1.993-1.195-1.064-2.003-2.38-2.237-2.783-.234-.402-.025-.617.176-.817.18-.179.402-.468.603-.702.2-.234.268-.402.402-.671.134-.268.067-.503-.034-.702-.1-.2-.906-2.178-1.24-2.98-.327-.788-.663-.682-.906-.694-.234-.01-.503-.012-.772-.012s-.703.1-1.07.502c-.368.402-1.408 1.375-1.408 3.35s1.442 3.886 1.643 4.154c.2.268 2.84 4.338 6.886 6.082.963.416 1.714.664 2.3.85.967.309 1.848.266 2.544.162.776-.116 2.376-.971 2.71-1.91.335-.939.335-1.743.234-1.91-.1-.167-.369-.267-.772-.467z" />
                </svg>
                <span className="font-semibold text-sm">WhatsApp</span>
            </a>

            {/* Hero */}
            <section className="relative h-screen flex items-center justify-center text-center">
                <img
                    src="fondo.jpg"
                    alt="Fondo desarrollador"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                        e.currentTarget.src =
                            "https://via.placeholder.com/1600x900?text=Imagen+no+disponible";
                    }}
                />
                <div className="relative z-10 px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
                        Soy Danilo Delgado
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-6 drop-shadow-md">
                        Desarrollador web
                    </p>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-6 drop-shadow-md">
                        Sistemas que trabajan para las personas
                    </p>
                    <a
                        href="#sobre-mi"
                        className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
                    >
                        Conoceme más
                    </a>
                </div>
            </section>

            {/* Sección sobre mí */}
            <section
                id="sobre-mi"
                className={`py-20 px-6 ${dark ? "bg-gray-800" : "bg-gray-50"} transition-colors duration-500`}
            >
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-10 text-center md:text-left">
                    {/* Imagen completa a la izquierda */}
                    <div className="flex-shrink-0 md:w-1/3">
                        <img
                            src="/foto-danilo.jpg"
                            alt="Foto de Danilo"
                            className="w-full h-auto rounded-md shadow-md"
                            style={{ objectFit: "contain" }}
                        />
                    </div>

                    {/* Texto a la derecha */}
                    <div className="md:w-2/3">
                        <h2 className={`text-3xl font-bold mb-6 ${dark ? "text-white" : "text-gray-900"}`}>
                            Sobre mí
                        </h2>
                        <p className={`${dark ? "text-gray-300" : "text-gray-700"} mb-4`}>
                            Soy un desarrollador web con una sólida base técnica y experiencia en backend y fullstack, experto en PHP, SQL, JavaScript, HTML, CSS3 y frameworks como Laravel, Bootstrap y JQuery. <br /> Mi misión (y la tomo en serio) es crear sistemas que no solo funcionen bien, sino que sean eficientes, fáciles de usar y escalables — básicamente, que hagan la vida de los usuarios mucho más simple.
                        </p>
                        <p className={`${dark ? "text-gray-300" : "text-gray-700"} mb-4`}>
                            Con más de 11 años de experiencia en atención al cliente y liderando equipos de alta eficiencia, aprendí que entender al usuario es clave. No solo se trata de programar, sino de diseñar soluciones que <em>realmente</em> trabajen para las personas, no al revés. Porque, aceptémoslo, nadie quiere que la tecnología le complique la vida.
                        </p>
                        <p className={`${dark ? "text-gray-300" : "text-gray-700"}`}>
                            Me defino por tres valores que no solo suenan bien, sino que aplico en todo lo que hago: respeto, compromiso y honestidad. Además, soy un eterno aprendiz, siempre buscando mejorar, innovar y aceptar nuevos desafíos con ganas y buena onda. Si buscas alguien que aporte código de calidad, ideas frescas y buena energía a tus proyectos, ¡acá estoy!
                        </p>
                    </div>
                </div>
            </section>

            <section
                id="skills"
                className={`py-20 px-6 ${dark ? "bg-gray-900" : "bg-white"} transition-colors duration-500`}
            >
                <h2
                    className={`text-3xl font-bold text-center mb-12 ${dark ? "text-white" : "text-gray-900"}`}
                >
                    ¿Qué puedo hacer por vos?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[1536px] mx-auto px-4">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className={`rounded-2xl p-6 shadow-md hover:shadow-xl transition w-full ${dark ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"}`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-4xl">{skill.icon}</div>
                                <h3 className={`text-lg sm:text-xl font-semibold break-words ${dark ? "text-white" : "text-gray-900"}`}>
                                    {skill.name}
                                </h3>
                            </div>
                            <p className="text-base sm:text-lg">{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sección Contacto */}
            <section
                id="contacto"
                className={`py-12 px-6 text-center ${dark ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-900"
                    } transition-colors duration-500`}
            >
                <h2 className="text-3xl font-bold mb-6">¡Nos pongamos en contacto!</h2>
                <p className="mb-4">
                    ¿Querés charlar o consultarme algo? Podés contactarme por:
                </p>
                <div className="flex justify-center gap-8 text-3xl">

                    <a
                        href="https://wa.me/543543550798"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-500 text-white rounded-full px-4 py-3 shadow-lg hover:bg-green-600 transition"
                        title="Contactar por WhatsApp"
                    >
                        {/* Ícono WhatsApp */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 32 32"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M16 .396C7.164.396.002 7.558.002 16.396c0 2.883.76 5.646 2.211 8.093L.02 32l7.712-2.013a15.91 15.91 0 008.268 2.26h.001c8.836 0 16-7.162 16-16.001 0-8.836-7.164-15.99-16-15.99zm0 29.31a13.26 13.26 0 01-6.746-1.834l-.483-.288-4.582 1.195 1.22-4.459-.315-.455A13.26 13.26 0 1129.26 16c0 7.314-5.946 13.258-13.26 13.258zm7.357-9.839c-.402-.2-2.376-1.174-2.745-1.309-.369-.134-.637-.2-.906.2-.268.402-1.04 1.309-1.275 1.576-.234.268-.469.3-.871.1-.402-.2-1.697-.624-3.234-1.993-1.195-1.064-2.003-2.38-2.237-2.783-.234-.402-.025-.617.176-.817.18-.179.402-.468.603-.702.2-.234.268-.402.402-.671.134-.268.067-.503-.034-.702-.1-.2-.906-2.178-1.24-2.98-.327-.788-.663-.682-.906-.694-.234-.01-.503-.012-.772-.012s-.703.1-1.07.502c-.368.402-1.408 1.375-1.408 3.35s1.442 3.886 1.643 4.154c.2.268 2.84 4.338 6.886 6.082.963.416 1.714.664 2.3.85.967.309 1.848.266 2.544.162.776-.116 2.376-.971 2.71-1.91.335-.939.335-1.743.234-1.91-.1-.167-.369-.267-.772-.467z" />
                        </svg>
                        <span className="font-semibold text-sm">WhatsApp</span>
                    </a>
                </div>
                <FormComponent dark={dark} />

                <p className="mt-4 mb-4">
                    Podés saber más de mí en:
                </p>
                <div className="flex justify-center gap-8 text-3xl">
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/danilo-delgado-755317208/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className={`hover:text-indigo-600 transition ${dark ? "dark:hover:text-indigo-400" : ""
                            }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11 19h-3v-9h3v9zm-1.5-10.27a1.73 1.73 0 110-3.46 1.73 1.73 0 010 3.46zm13.5 10.27h-3v-4.5c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.16-1.72 2.37v4.57h-3v-9h2.88v1.23h.04a3.16 3.16 0 012.84-1.56c3.04 0 3.6 2 3.6 4.59v4.74z" />
                        </svg>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/danilon1"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className={`hover:text-indigo-600 transition ${dark ? "dark:hover:text-indigo-400" : ""
                            }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6a3.15 3.15 0 00-1.3-1.7c-1-.7.1-.7.1-.7a2.5 2.5 0 011.8 1.3 2.6 2.6 0 003.5 1 2.6 2.6 0 01.8-1.6c-2.6-.3-5.3-1.3-5.3-5.8a4.5 4.5 0 011.2-3.2 4.2 4.2 0 01.1-3.1s1-.3 3.2 1.2a11 11 0 015.8 0c2.2-1.5 3.2-1.2 3.2-1.2a4.2 4.2 0 01.1 3.1 4.5 4.5 0 011.2 3.2c0 4.5-2.7 5.5-5.3 5.8a2.9 2.9 0 01.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 0z" />
                        </svg>
                    </a>
                </div>

            </section>
            {/* Footer */}
            <footer className="text-center py-8 border-t dark:border-gray-700">
                <p className="text-sm">© {new Date().getFullYear()} Danilo Delgado. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
