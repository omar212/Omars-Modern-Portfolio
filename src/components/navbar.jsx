"use client"

import Link from 'next/link';
import Image from 'next/image';
import NavLink from './navLink';
import { useState } from 'react';
import { motion } from 'framer-motion';

const links = [
    {
        url: "/",
        title: "Home"
    },
    {
        url: "/about",
        title: "About"
    },
    {
        url: "/projects",
        title: "Projects"
    },
    {
        url: "/contact",
        title: "Contact"
    }
]

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened:{
            rotate: 45,
            backgroundColor: "rgb(255,255,255)"
        }
    }

    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened:{
            opacity: 0,
        }
    }

    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        opened:{
            rotate: -45,
            backgroundColor: "rgb(255,255,255)"
        }
    }

    const listVariants = {
        closed: {
            x: "100vw",
        },
        opened:{
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    }

    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0,
        },
        opened:{
            x: 0,
            opacity: 1, 
        }
    }

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            {/* NAVIGATION LINKS */}  
            <div className="hidden md:flex gap-4 w-1/3 text-xl">
                {links.map((link) => (
                    <NavLink link={link} key={link.title} />
                ))}
            </div>
            {/* LOGO */}
            <div className='hidden md:hidden lg:flex xl:w-1/3 xl:justify-center'>
                <Link href="/" className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
                    <span className='text-white mr-2'>Omar</span>
                    <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>.dev</span>
                </Link>
            </div>
            {/*  SOCIAL MEDIA ICONS */}
            <div className="
                w-full 
                flex
                flex-row 
                justify-around
                
                sm:w-1/2
                md:w-1/3
                lg:w-1/3
                ">
                <Link href="https://www.buymeacoffee.com/omar.dev" target='_blank'>
                    <Image src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="" width={100} height={100}/>
                </Link>
                <Link href="https://github.com/omar212" target='_blank'>
                    <Image src="/github.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="https://www.instagram.com/omarr_x/" target='_blank'>
                    <Image src="/instagram.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="https://www.linkedin.com/in/omar-elnagdy/" target='_blank'>
                    <Image src="/linkedin.png" alt="" width={24} height={24}/>
                </Link>
            </div>
            {/* Responsive Menu */}
            <div className='md:hidden'>
                {/* MENU BUTTON */}
                <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={() => setOpen(!open)}>
                    <motion.div 
                        variants={topVariants} 
                         animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left"
                    >
                        
                    </motion.div>
                    <motion.div 
                        variants={centerVariants} 
                        animate={open ? "opened" : "closed"} 
                        className="w-10 h-1 bg-black rounded">
                        
                    </motion.div>
                    <motion.div 
                        variants={bottomVariants} 
                        animate={open ? "opened" : "closed"} 
                        className="w-10 h-1 bg-black rounded origin-left">
                        
                    </motion.div>
                </button>
                {/* Menu List */}
                {open &&  (
                 <motion.div 
                    className='absolute top-0 left-0 w-screen h-screen bg-black flex flex-col items-center justify-center gap-8 text-4xl z-40'
                    variants={listVariants}
                    initial="closed"
                    animate="opened"
                >
                    {links.map((link) => (
                        <motion.div key={link.title} variants={listItemVariants}>
                            <Link href={link.url} >
                                <span className='text-white'>{link.title}</span>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>)
                }
                
            </div>
        </div>
    );
}

export default Navbar;