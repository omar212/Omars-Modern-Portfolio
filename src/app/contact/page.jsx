"use client"
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import ResumeButton from "./resumeButton";
import ShareButton from "./shareButton";

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
            <div className="
                h-[100vh] 
                flex 
                flex-col 
                gap-2 
                px-4

                sm:px-8

                md:gap-0
                md:px-12

                lg:gap-0
                lg:px-20
                lg:flex-row
                lg:justify-center
                lg:items-center 
                
                xl:px-48 
                xl:gap-0
                xl:items-center">
                {/* TEXT CONTAINER */}
                <div className="
                    h-1/6  
                    flex 
                    flex-row 
                    items-center 
                    justify-center 
                    text-3xl

                    md:text-4xl 

                    lg:h-full 
                    lg:w-1/2  
                    lg:text-6xl
                    ">
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
                <div className="
                    xl:flex
                    xl:flex-col
                    xl: w-full
                    xl:justify-center
                    xl:items-center
                ">
                    <form 
                        ref={form} 
                        onSubmit={sendEmail} 
                        className="
                            h-fit 
                            p-4
                            bg-gray-50
                            rounded-xl 
                            text-xl 
                            flex 
                            flex-col 
                            gap-8 
                            justify-between
                            mb-8
                            contact-text
                            
                            sm:p-12

                            md:p-10

                            lg:h-fit 
                            lg:w-1/2    
                            lg:p-10">
                        <span>Dear Omar,</span>
                        <textarea className="bg-transparent border-b-2 outline-none resize-none" rows={6} name="user_message" />
                        <span>My email address:</span>
                        <input name="user_email" className="bg-transparent border-b-2 outline-none resize-none" type="email" />
                        <span>Best Regards,</span>
                        <button className="bg-purple-200 rounded p-4 text-gray-600 font-semibold">Send</button> 
                        {
                            success && <span className="text-green-500">Message Sent!</span>
                        }
                        {
                            error && <span className="text-red-500">Message Failed!</span>
                        }
                    </form>
                    <div className="flex gap-5 justify-center">
                        <ResumeButton />
                        <ShareButton />
                    </div>
                </div>
                
            </div>
        </motion.div>
    );
}

export default ContactPage;