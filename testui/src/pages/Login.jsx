import { useState } from "react";
import { User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Employee Login
    if (email === "employee@gmail.com" && password === "123456") {
      navigate("/dashboard");
    }

    // Admin / HR Login
    else if (email === "admin@gmail.com" && password === "admin123") {
      navigate("/admin");
    }

    // Invalid
    else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] relative flex items-center justify-center p-6 md:p-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] rounded-full bg-pink-500 opacity-20 blur-[140px]"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] rounded-full bg-purple-500 opacity-20 blur-[140px]"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-8xl max-h-[900px] overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.5)] grid md:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="relative hidden md:flex flex-col justify-center px-4 py-5">
          <div className="absolute w-[320px] h-[320px] rounded-full bg-pink-500 opacity-30 blur-[120px]"></div>

          <div className="relative z-10">
            <h1 className="text-7xl font-black leading-tight text-white">
              Welcome
            </h1>

            <p className="mt-8 text-xl leading-9 text-gray-300">
              Modern Employee <br />
              Management System
            </p>

            <img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png"
              alt="employee"
              className="mt-12 w-80 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white px-2 py-3 md:px-16 md:py-16">
          {/* Profile Icon */}
          <div className="flex justify-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-700 shadow-2xl">
              <User size={45} className="text-white" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-center text-5xl font-black text-gray-800">
            LOGIN
          </h1>

          <p className="mt-3 text-center text-gray-500">Sign in to continue</p>

          {/* FORM */}
          <form onSubmit={handleLogin} className="mt-12 space-y-8">
            {/* EMAIL */}
            <div className="relative">
              <User
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-gray-200 py-5 pl-14 pr-5 shadow-sm outline-none transition focus:border-pink-500"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <Lock
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-500"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl border border-gray-200 py-5 pl-14 pr-5 shadow-sm outline-none transition focus:border-pink-500"
              />
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-pink-500 to-purple-700 py-5 text-lg font-bold text-white shadow-2xl transition duration-300 hover:scale-[1.02]"
            >
              LOGIN
            </button>
          </form>

          {/* Dummy Credentials */}
          <div className="mt-10 rounded-2xl border border-pink-100 bg-pink-50 p-5">
            <h3 className="mb-4 font-bold text-pink-600">Dummy Credentials</h3>

            {/* Employee */}
            <div className="mb-5">
              <h4 className="font-semibold text-gray-700">Employee Login</h4>

              <p className="text-sm text-gray-600">
                Email : employee@gmail.com
              </p>

              <p className="text-sm text-gray-600">Password : 123456</p>
            </div>

            {/* Admin */}
            <div>
              <h4 className="font-semibold text-gray-700">Admin / HR Login</h4>

              <p className="text-sm text-gray-600">Email : admin@gmail.com</p>

              <p className="text-sm text-gray-600">Password : admin123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
