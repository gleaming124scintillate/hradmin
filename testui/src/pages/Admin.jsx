import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  BadgeIndianRupee,
  Bell,
  LogOut,
} from "lucide-react";

function Admin() {
  const navigate = useNavigate();

  // Active Menu
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <div className="min-h-screen bg-[#0f172a] flex text-white">
      {/* ================= SIDEBAR ================= */}
      <div className="w-72 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6">
        <h1 className="text-3xl font-bold mb-12">HR Admin</h1>

        <div className="space-y-4">
          {/* Dashboard */}
          <div
            onClick={() => setActiveMenu("dashboard")}
            className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition ${
              activeMenu === "dashboard" ? "bg-pink-500" : "hover:bg-white/10"
            }`}
          >
            <LayoutDashboard />
            Dashboard
          </div>

          {/* Employees */}
          <div
            onClick={() => setActiveMenu("employees")}
            className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition ${
              activeMenu === "employees" ? "bg-pink-500" : "hover:bg-white/10"
            }`}
          >
            <Users />
            Employees
          </div>

          {/* Attendance */}
          <div
            onClick={() => setActiveMenu("attendance")}
            className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition ${
              activeMenu === "attendance" ? "bg-pink-500" : "hover:bg-white/10"
            }`}
          >
            <Calendar />
            Attendance
          </div>

          {/* Leave Requests */}
          <div
            onClick={() => setActiveMenu("leaves")}
            className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition ${
              activeMenu === "leaves" ? "bg-pink-500" : "hover:bg-white/10"
            }`}
          >
            <FileText />
            Leave Requests
          </div>

          {/* Payroll */}
          <div
            onClick={() => setActiveMenu("payroll")}
            className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition ${
              activeMenu === "payroll" ? "bg-pink-500" : "hover:bg-white/10"
            }`}
          >
            <BadgeIndianRupee />
            Payroll
          </div>

          {/* Notifications */}
          <div
            onClick={() => setActiveMenu("notifications")}
            className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition ${
              activeMenu === "notifications"
                ? "bg-pink-500"
                : "hover:bg-white/10"
            }`}
          >
            <Bell />
            Notifications
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={() => navigate("/")}
          className="mt-20 flex items-center gap-3 bg-red-500 px-5 py-3 rounded-xl hover:bg-red-600 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex-1 p-10">
        {/* TOPBAR */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold">Welcome Admin 👋</h1>

            <p className="text-gray-400 mt-2">HR Management Dashboard</p>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-4 bg-white/10 px-5 py-3 rounded-2xl">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-12 h-12 rounded-full"
            />

            <div>
              <h3 className="font-semibold">HR Admin</h3>

              <p className="text-sm text-gray-400">Administrator</p>
            </div>
          </div>
        </div>

        {/* ================= DASHBOARD ================= */}
        {activeMenu === "dashboard" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Dashboard Overview</h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-pink-500 to-pink-700 p-8 rounded-3xl shadow-2xl">
                <h3>Total Employees</h3>

                <h1 className="text-5xl font-bold mt-5">120</h1>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-8 rounded-3xl shadow-2xl">
                <h3>Attendance</h3>

                <h1 className="text-5xl font-bold mt-5">98%</h1>
              </div>

              <div className="bg-gradient-to-br from-cyan-500 to-blue-700 p-8 rounded-3xl shadow-2xl">
                <h3>Pending Leaves</h3>

                <h1 className="text-5xl font-bold mt-5">8</h1>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-emerald-700 p-8 rounded-3xl shadow-2xl">
                <h3>Payroll</h3>

                <h1 className="text-5xl font-bold mt-5">Done</h1>
              </div>
            </div>
          </div>
        )}

        {/* ================= EMPLOYEES ================= */}
        {activeMenu === "employees" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Employee List</h2>

            <div className="space-y-5">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex justify-between">
                <div>
                  <h3 className="font-semibold">Shiva</h3>

                  <p className="text-gray-400">UI Developer</p>
                </div>

                <span className="text-green-400">Active</span>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex justify-between">
                <div>
                  <h3 className="font-semibold">Ram</h3>

                  <p className="text-gray-400">Backend Developer</p>
                </div>

                <span className="text-green-400">Active</span>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex justify-between">
                <div>
                  <h3 className="font-semibold">Sai</h3>

                  <p className="text-gray-400">HR Executive</p>
                </div>

                <span className="text-yellow-400">On Leave</span>
              </div>
            </div>
          </div>
        )}

        {/* ================= ATTENDANCE ================= */}
        {activeMenu === "attendance" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Employee Attendance</h2>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-5">
              <div className="flex justify-between">
                <span>Shiva</span>

                <span className="text-green-400">Present</span>
              </div>

              <div className="flex justify-between">
                <span>Ram</span>

                <span className="text-green-400">Present</span>
              </div>

              <div className="flex justify-between">
                <span>Sai</span>

                <span className="text-red-400">Absent</span>
              </div>
            </div>
          </div>
        )}

        {/* ================= LEAVES ================= */}
        {activeMenu === "leaves" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Leave Requests</h2>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                <h3 className="text-xl font-semibold">Shiva</h3>

                <p className="text-gray-400 mt-2">Requested 2 Days Leave</p>

                <div className="mt-5 flex gap-4">
                  <button className="bg-green-500 px-5 py-2 rounded-xl">
                    Approve
                  </button>

                  <button className="bg-red-500 px-5 py-2 rounded-xl">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= PAYROLL ================= */}
        {activeMenu === "payroll" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Payroll Details</h2>

            <div className="space-y-5">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex justify-between">
                <span>Shiva</span>

                <span>₹45,000</span>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex justify-between">
                <span>Ram</span>

                <span>₹55,000</span>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex justify-between">
                <span>Sai</span>

                <span>₹40,000</span>
              </div>
            </div>
          </div>
        )}

        {/* ================= NOTIFICATIONS ================= */}
        {activeMenu === "notifications" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Notifications</h2>

            <div className="space-y-5">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="font-semibold">Payroll Completed</h3>

                <p className="text-gray-400 mt-2">
                  Salary processed successfully.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="font-semibold">Leave Request Pending</h3>

                <p className="text-gray-400 mt-2">
                  3 leave requests awaiting approval.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
