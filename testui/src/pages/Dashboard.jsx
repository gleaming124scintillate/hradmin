import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Calendar,
  Bell,
  FileText,
  LogOut,
} from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <div className="min-h-screen bg-[#0f172a] flex text-white">
      <div className="w-72 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6">
        <h1 className="text-3xl font-bold mb-12">Employee Portal</h1>

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

          {/* Leaves */}
          <div
            onClick={() => setActiveMenu("leaves")}
            className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition ${
              activeMenu === "leaves" ? "bg-pink-500" : "hover:bg-white/10"
            }`}
          >
            <FileText />
            Leaves
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

      <div className="flex-1 p-10">
        {/* TOPBAR */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold">Welcome Back 👋</h1>

            <p className="text-gray-400 mt-2">Employee Dashboard</p>
          </div>

          <div className="flex items-center gap-4 bg-white/10 px-5 py-3 rounded-2xl">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-12 h-12 rounded-full"
            />

            <div>
              <h3 className="font-semibold">Shiva</h3>

              <p className="text-sm text-gray-400">UI Developer</p>
            </div>
          </div>
        </div>

        {activeMenu === "dashboard" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Dashboard Overview</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-pink-500 to-pink-700 p-8 rounded-3xl shadow-2xl hover:scale-105 transition">
                <h3 className="text-lg">Attendance</h3>

                <h1 className="text-5xl font-bold mt-6">24</h1>

                <p className="mt-3 text-pink-100">Present Days</p>
              </div>

              <div className="bg-gradient-to-br from-violet-500 to-purple-700 p-8 rounded-3xl shadow-2xl hover:scale-105 transition">
                <h3 className="text-lg">Leave Balance</h3>

                <h1 className="text-5xl font-bold mt-6">12</h1>

                <p className="mt-3 text-purple-100">Remaining Leaves</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-500 to-blue-700 p-8 rounded-3xl shadow-2xl hover:scale-105 transition">
                <h3 className="text-lg">Tasks</h3>

                <h1 className="text-5xl font-bold mt-6">5</h1>

                <p className="mt-3 text-cyan-100">Pending Tasks</p>
              </div>
            </div>
          </div>
        )}

        {activeMenu === "attendance" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Attendance Details</h2>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="flex justify-between border-b border-white/10 py-4">
                <span>Monday</span>
                <span className="text-green-400">Present</span>
              </div>

              <div className="flex justify-between border-b border-white/10 py-4">
                <span>Tuesday</span>
                <span className="text-green-400">Present</span>
              </div>

              <div className="flex justify-between border-b border-white/10 py-4">
                <span>Wednesday</span>
                <span className="text-red-400">Absent</span>
              </div>

              <div className="flex justify-between py-4">
                <span>Thursday</span>
                <span className="text-green-400">Present</span>
              </div>
            </div>
          </div>
        )}

        {activeMenu === "leaves" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Leave Requests</h2>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                <h3 className="text-xl font-semibold">Casual Leave</h3>

                <p className="text-gray-400 mt-2">2 Days Requested</p>

                <span className="inline-block mt-4 bg-green-500 px-4 py-2 rounded-full text-sm">
                  Approved
                </span>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                <h3 className="text-xl font-semibold">Sick Leave</h3>

                <p className="text-gray-400 mt-2">1 Day Requested</p>

                <span className="inline-block mt-4 bg-yellow-500 px-4 py-2 rounded-full text-sm">
                  Pending
                </span>
              </div>
            </div>
          </div>
        )}

        {activeMenu === "notifications" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Notifications</h2>

            <div className="space-y-5">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="font-semibold">Payroll Generated</h3>

                <p className="text-gray-400 mt-2">
                  Salary credited successfully.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="font-semibold">Team Meeting</h3>

                <p className="text-gray-400 mt-2">Meeting scheduled at 4 PM.</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="font-semibold">Holiday Announcement</h3>

                <p className="text-gray-400 mt-2">
                  Friday declared as holiday.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
