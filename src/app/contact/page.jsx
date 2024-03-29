"use client"
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const text = "Say Hello!"
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID, 
                form.current, {
                    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
                }).then(
                () => {
                    setSuccess(true);
                    console.log('SUCCESS!');
                },
                (error) => {
                    setError(true);
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                {/* TEXT CONTAINER */}
                <div className="h-1/2 m-auto lg:h-full lg:w-1/2 flex flex-row items-center justify-center text-6xl sm:text-3xl">
                    <div>
                        {
                            text.split("").map((letter, index) => (
                                <motion.span 
                                    key={index} 
                                    initial={{ opacity: 1}} 
                                    animate={{ opacity: 0 }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: index * 0.1
                                    }}>
                                        {letter} 
                                    </motion.span>
                             ))
                        }
                        😁
                    </div>
                </div>
                {/* FORM CONTAINER */}
                <form 
                    ref={form} 
                    onSubmit={sendEmail} 
                    className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24 mb-8 sm:p-12">
                    <span>Dear Omar,</span>
                    <textarea className="bg-transparent border-b-2 outline-none resize-none" rows={6} name="user_message" />
                    <span>My email address:</span>
                    <input name="user_email" className="bg-transparent border-b-2 outline-none resize-none" type="email" />
                    <span>Regards</span>
                    <button className="bg-purple-200 rounded p-4 text-gray-600 font-semibold">Send</button> 
                    {
                        success && <span className="text-green-500">Message Sent!</span>
                    }
                    {
                        error && <span className="text-red-500">Message Failed!</span>
                    }
                </form>
            </div>
        </motion.div>
    );
}

export default ContactPage;