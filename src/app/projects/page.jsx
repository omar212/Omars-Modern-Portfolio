"use client"
import { motion } from "framer-motion";

const ProjectsPage = () => {
    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            Projects Page
        </motion.div>
    );
}

export default ProjectsPage;