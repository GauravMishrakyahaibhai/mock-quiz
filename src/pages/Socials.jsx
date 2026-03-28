import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, scale: 0.9 },
  in: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  out: { opacity: 0, scale: 1.1, transition: { duration: 0.3 } }
};

export default function Socials() {
  const socials = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/GauravMishrakyahaibhai',
      color: 'hover:text-white',
      bgHover: 'hover:bg-gray-800 shadow-[0_0_20px_rgba(255,255,255,0.0)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/gaurav-mishra-180a68393',
      color: 'hover:text-blue-400',
      bgHover: 'hover:bg-blue-900/40 shadow-[0_0_0px_rgba(96,165,250,0)] hover:shadow-[0_0_30px_rgba(96,165,250,0.6)]'
    },
    {
      name: 'Gmail',
      icon: Mail,
      href: 'mailto:gauravsunilmishra@gmail.com',
      color: 'hover:text-red-400',
      bgHover: 'hover:bg-red-900/40 shadow-[0_0_0px_rgba(248,113,113,0)] hover:shadow-[0_0_30px_rgba(248,113,113,0.6)]'
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="flex flex-col items-center justify-center min-h-[80vh] w-full"
    >
      <div className="glass p-12 w-full max-w-2xl text-center rounded-3xl relative overflow-hidden">
        
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-600 rounded-full mix-blend-screen filter blur-[80px] opacity-40 animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-screen filter blur-[80px] opacity-40 animate-pulse delay-75" />

        <h1 className="text-4xl font-bold mb-4 relative z-10">Connect With Me</h1>
        <p className="text-gray-300 mb-10 text-lg relative z-10">
          Feel free to reach out for collaborations, questions, or just to say hi!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -10, scale: 1.1, rotateZ: social.name === 'GitHub' ? -5 : social.name === 'Gmail' ? 5 : 0 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className={`glass flex items-center justify-center w-36 h-36 rounded-2xl flex-col gap-3 transition-colors duration-300 ${social.color} ${social.bgHover}`}
            >
              <social.icon size={48} className="transition-transform duration-300 group-hover:scale-110" />
              <span className="font-bold tracking-wider">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
