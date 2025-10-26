import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Navbar from "../components/Navbar"
import ProtectedRoute from "../components/ProtectedRoute"
import Footer from "../components/Footer"

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home/> },
      { path: "/login", element: <Login/> },
      { path: "/dashboard", element:
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
      },
    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router
