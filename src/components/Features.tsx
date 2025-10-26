import { motion } from "framer-motion"
import { IoAnalytics } from "react-icons/io5"
import { FaCar } from "react-icons/fa"
import { MdFactory } from "react-icons/md"
function Features() {

const features = [
    {
      title: "Smart Analytics",
      description:
        "Real-time insights and predictive maintenance for your fleet.",
      icon: <IoAnalytics />,
    },
    {
      title: "Fleet Management",
      description:
        "Comprehensive vehicle tracking and management solutions.",
      icon: <FaCar />,
    },
    {
      title: "Infrastructure Control",
      description:
        "Centralized control of your automotive infrastructure.",
      icon: <MdFactory />,
    },
  ]
    return (
      <section className="bg-[#0D1B2A] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-[#00CFE8] via-[#0D1B2A] to-[#00CFE8] blur-3xl"></div>

        <div className="relative container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Powerful Automotive Solutions
            </h2>
            <p className="text-[#AAB8C2] max-w-2xl mx-auto">
              Empowering the future of mobility with intelligent, data-driven
              technologies.
            </p>
            <div className="mt-3 h-1 w-20 bg-[#76e889] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="feature-card group bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-[#00CFE8]/50 shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
              >
                <div className="text-[#76e889] text-4xl mb-4 group-hover:text-white transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#AAB8C2] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>  )
}

export default Features