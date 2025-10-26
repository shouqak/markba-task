import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#0D1B2A] text-[#AAB8C2] py-10"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <img
            src="https://i.ibb.co/20hYCzJs/Screenshot-2025-05-18-180804-removebg-preview.png"
            alt="Logo"
            className="h-10 mx-auto md:mx-0 mb-2"
          />
          <p className="text-sm max-w-xs">
            Empowering mobility through technology and smart infrastructure.
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          {["Home", "Dashboard", "Login"].map((item, i) => (
            <motion.a
              key={i}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              whileHover={{ y: -3, color: "#76e889" }}
              transition={{ duration: 0.2 }}
              className="hover:text-[#76e889] transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="flex gap-4 text-xl">
          {[
            { icon: <FaGithub />, link: "https://github.com/" },
            { icon: <FaLinkedin />, link: "https://linkedin.com/" },
            { icon: <FaGlobe />, link: "#" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              whileHover={{ scale: 1.2, color: "#76e889" }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-[#AAB8C2] hover:text-[#76e889] transition"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 border-t border-white/10 pt-4 text-center text-sm text-[#7D8A9B]"
      >
        © {new Date().getFullYear()} Markba. All rights reserved.
      </motion.div>
    </motion.footer>
  )
}
