import React from 'react';
import './contacto.css';
import Button from '../Button/Button';
import Swal from 'sweetalert2';
import { motion } from "framer-motion"
import { useEffect } from 'react';
import Hero4 from '../Hero4/Hero4'


export const Contacto = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sendMessage = () => {
        Swal.fire({
            title: 'Enviar mensaje',
            text: '¿Estás seguro de que deseas enviar mensaje?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, enviar mensaje',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;

                let mensaje = `Hola soy ${name}, este es mi mail, ${email}:\n\n`;
                if (message) {
                    mensaje += `Mensaje: ${message}\n\n`;
                }

                const numeroWhatsApp = '543412524906';

                function esDispositivoMovil() {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                }

                let urlWhatsApp = '';

                if (esDispositivoMovil()) {
                    urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;
                } else {
                    urlWhatsApp = `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;
                }

                window.open(urlWhatsApp, '_blank');
            }
        });
    };

    return (
        <>
            <Hero4 title="Contacto" img="https://firebasestorage.googleapis.com/v0/b/orlandi-propiedades.appspot.com/o/contact.jpg?alt=media&token=44653b30-2a50-43d6-b26b-a77fae464e71" />
            <div className='contactoContainer'>
                <motion.form className='contactForm'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3, ease: "easeInOut", delay: 0.7, type: "spring" }}>
                    <form>
                        <h2>Envianos un mensaje</h2>
                        <div className="modalBody">
                            <input type="text" placeholder="Nombre" name="nombre" id='nombre' />
                            <input type='mail' placeholder='Email' name='email' id='email' />
                            <textarea placeholder='Mensaje' name='mensaje' id='mensaje' />
                        </div>
                    </form>
                    <Button label='Enviar' name='contact' action={sendMessage} />
                </motion.form>
            </div>
        </>
    );
};
