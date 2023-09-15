"use client";

import ContactForm from "@/components/ContactForm";
import { motion, AnimatePresence } from "framer-motion";

function ContatctUs() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="p-5"
      >
        <ContactForm />
      </motion.div>
    </AnimatePresence>
  );
}

export default ContatctUs;
