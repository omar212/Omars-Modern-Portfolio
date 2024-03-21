"use client"

import { motion } from "framer-motion";

const TestPage = () => {

    const variants = {
        variant1: {
            x: 100,
            y: 100,
            scale: 1.2,
            rotate: 180,
            transition: {
                delay: 2,
                duration: 2
            }
        },
        variant2: {
            x: 200,
            y: 200,
            scale: 1.5,
            rotate: 360
        }
    }
    
    return (
        <div className="h-full flex items-center justify-center">
            <motion.div 
                className="w-96 h-96 bg-red-400 rounded" 
                initial={{ x: -100}} 
                variants={variants}
                animate="variant1"
                >
                
            </motion.div>
        </div>
    )
}

export default TestPage;