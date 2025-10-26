import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import image from "../assets/image.png"
function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center py-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A] to-[#00CFE8]/80 z-10"></div>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 pt-10 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Next Generation <br />
            <span className="text-[#76e889]">Automotive Infrastructure</span>
          </h1>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto md:mx-0">
            Empowering the future of mobility with advanced digital solutions
            and seamless infrastructure management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/login"
              className="bg-[#76e889] text-[#0D1B2A] px-8 py-3 rounded-lg font-semibold hover:bg-[#76e889]/90 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started
            </Link>
            <button className="border-2 border-[#586E7C] text-white px-8 py-3 rounded-lg font-semibold hover:border-[#76e889] hover:text-[#76e889] transition-all">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 hidden md:block"
        >
          <img
            src={image}
            alt="Automotive Dashboard"
            className="w-full max-w-xl mx-auto transform hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
