import { useAuthStore } from "../store/useAuthStore"
import { motion } from "framer-motion"

const Dashboard = () => {
  const user = useAuthStore((state) => state.user)

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="min-h-screen bg-[#0D1B2A] p-6"
    >
      <div className="max-w-7xl mx-auto space-y-8 pt-20">
        <motion.div
          variants={cardVariants}
          className="bg-white/5 backdrop-blur-lg shadow-xl rounded-xl p-8 border border-[#586E7C]/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-24 h-24 rounded-full ring-4 ring-[#76e889]/30"
            />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-2">
                {user?.name}
              </h2>
              <p className="text-[#586E7C]">{user?.email}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Vehicle Fleet",
              value: "127",
              desc: "Active vehicles in fleet",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              ),
            },
            {
              title: "Infrastructure",
              value: "85%",
              desc: "System efficiency",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              ),
            },
            {
              title: "Analytics",
              value: "24.8K",
              desc: "Data points collected",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              ),
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="stat-card bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-[#586E7C]/20 hover:border-[#76e889]/50 transition-all hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#76e889] font-semibold">{stat.title}</h3>
                <svg
                  className="w-6 h-6 text-[#76e889]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {stat.icon}
                </svg>
              </div>
              <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-[#586E7C] text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-[#586E7C]/20"
        >
          <h3 className="text-xl font-semibold text-white mb-6">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {[
              {
                time: "2h ago",
                event: "Fleet maintenance scheduled",
                status: "Pending",
              },
              {
                time: "5h ago",
                event: "System update completed",
                status: "Completed",
              },
              {
                time: "1d ago",
                event: "New vehicle added to fleet",
                status: "Active",
              },
            ].map((activity, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#76e889]"></div>
                  <div>
                    <p className="text-white font-medium">{activity.event}</p>
                    <p className="text-[#586E7C] text-sm">{activity.time}</p>
                  </div>
                </div>
                <span className="text-[#76e889] text-sm">
                  {activity.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Dashboard
