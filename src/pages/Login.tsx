import { useAuthStore } from "../store/useAuthStore"
import { useNavigate, useLocation } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
import { useGoogleLogin } from "@react-oauth/google"
import toast, { Toaster } from "react-hot-toast"
import { motion } from "framer-motion"
import { FaGithub, FaGoogle } from "react-icons/fa"

const Login = () => {
  const login = useAuthStore((state) => state.login)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const location = useLocation()

  const apiBase =
    import.meta.env.API_URL || "https://markba-backend.onrender.com"
  const githubClientId =
    import.meta.env.GITHUB_CLIENT_ID || "Ov23liPmLeugyOWxbMgg"
  const githubRedirectUri = useMemo(
    () =>
      import.meta.env.GITHUB_REDIRECT_URI || `${window.location.origin}/login`,
    []
  )

  const googleLogin = useGoogleLogin({
    flow: "implicit",
    scope: "openid email profile",
    onSuccess: async (tokenResponse) => {
      try {
        setLoading(true)
        const res = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          }
        )
        if (!res.ok) throw new Error("Failed to fetch Google profile")
        const profile = await res.json()
        const user = {
          name: profile.name || profile.given_name || "User",
          email: profile.email || "",
          avatar: profile.picture || "",
        }
        login(user, tokenResponse.access_token || "")
        navigate("/dashboard")
      } catch (e) {
        toast.error("Google login failed")
      } finally {
        setLoading(false)
      }
    },
    onError: () => toast.error("Google login failed"),
  })

  const handleGithubClick = () => {
    if (!githubClientId) {
      toast.error("Missing GitHub Client ID")
      return
    }
    const state = crypto.randomUUID?.() || Math.random().toString(36).slice(2)
    sessionStorage.setItem("gh_oauth_state", state)
    const params = new URLSearchParams({
      client_id: githubClientId,
      redirect_uri: githubRedirectUri,
      scope: "read:user user:email",
      allow_signup: "true",
      prompt: "consent",
      state,
    })
    window.location.href = `https://github.com/login/oauth/authorize?${params.toString()}`
  }

  useEffect(() => {
    const search = new URLSearchParams(location.search)
    const code = search.get("code")
    if (!code) return
    ;(async () => {
      setLoading(true)
      try {
        const res = await fetch(`${apiBase}/auth/github`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        })
        const data = await res.json()
        const user = {
          name: data?.user?.name || "GitHub User",
          email: data?.user?.email || "",
          avatar: data?.user?.avatar || "",
        }
        login(user, data?.token || "")
        navigate("/dashboard")
      } catch (e) {
        toast.error("GitHub login failed")
      } finally {
        setLoading(false)
      }
    })()
  }, [location.search])

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0D1B2A] px-4 relative overflow-hidden">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300CFE8' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 4V0H4v4H0v2h4v4h2V6h4V4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="bg-white/5 backdrop-blur-xl p-8 rounded-xl shadow-2xl w-full max-w-md text-center border border-[#586E7C]/20 relative z-10"
      >
        <div className="mb-8 flex justify-center">
          <img
            src="https://i.ibb.co/20hYCzJs/Screenshot-2025-05-18-180804-removebg-preview.png"
            alt="Logo"
            className="h-20"
          />
        </div>

        <motion.h2
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold mb-2 text-white"
        >
          Welcome Back
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-[#9CA3AF] mb-8"
        >
          Sign in to access your dashboard
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => googleLogin()}
          disabled={loading}
          className="w-full bg-[#76e889] text-[#0D1B2A] py-3 rounded-lg font-semibold hover:bg-[#76e889]/90 transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg shadow-[#76e889]/10"
        >
          {loading ? (
            <span>Signing in...</span>
          ) : (
            <>
              <FaGoogle />

              <span>Continue with Google</span>
            </>
          )}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleGithubClick}
          className="w-full mt-4 bg-white/10 text-white py-3 rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
        >
          <FaGithub />
          Continue with GitHub
        </motion.button>

        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#76e889]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-[#76e889]/20 to-transparent rounded-full blur-3xl"></div>
      </motion.div>
    </div>
  )
}

export default Login
