import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Calendar,
  Bell,
  FileText,
  LogOut,
  Clock3,
  X,
} from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState("dashboard");

  // CLOCK IN / OUT POPUP
  const [showPopup, setShowPopup] = useState(false);

  const [isClockedIn, setIsClockedIn] = useState(false);

  const [time, setTime] = useState("");

  const handleClockAction = () => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setTime(currentTime);

    setIsClockedIn(!isClockedIn);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex text-white relative">
      {/* SIDEBAR */}
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

      {/* MAIN CONTENT */}
      <div className="flex-1 p-10">
        {/* TOPBAR */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold">Welcome Back 👋</h1>

            <p className="text-gray-400 mt-2">Praneeth Konda</p>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-5">
            {/* CLOCK BUTTON */}
            <button
              onClick={() => setShowPopup(true)}
              className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 px-5 py-3 rounded-2xl transition shadow-lg"
            >
              <Clock3 size={20} />
              {isClockedIn ? "Clock Out" : "Clock In"}
            </button>

            {/* PROFILE */}
            <div className="flex items-center gap-4 bg-white/10 px-5 py-3 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile"
                className="w-12 h-12 rounded-full"
              />

              <div>
                <h3 className="font-semibold">praneeth</h3>

                <p className="text-sm text-gray-400">UI Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* POPUP */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 ">
            <div className="bg-[#111827] w-[350px] p-4 rounded-2xl border border-white/10 relative shadow-2xl ms-[100px]">
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white"
              >
                <X />
              </button>

              <h2 className="text-xl font-bold mb-3 text-center">
                {isClockedIn ? "Clock Out" : "Clock In"}
              </h2>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <p className="text-gray-400 mb-2">Current Time</p>

                <h1 className="text-3xl font-bold">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </h1>
              </div>

              <button
                onClick={handleClockAction}
                className={`w-full mt-8 py-2 rounded-2xl text-lg font-semibold transition ${
                  isClockedIn
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {isClockedIn ? "Clock Out" : "Clock In"}
              </button>

              {time && (
                <p className="text-center text-gray-400 mt-5">
                  Last Action Time : {time}
                </p>
              )}
            </div>
          </div>
        )}

        {/* DASHBOARD */}
        {activeMenu === "dashboard" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Dashboard Overview</h2>

            <div className="grid md:grid-cols-3 gap-8 w-[70%]">
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

              {/* <div className="bg-gradient-to-br from-cyan-500 to-blue-700 p-8 rounded-3xl shadow-2xl hover:scale-105 transition">
                <h3 className="text-lg">Tasks</h3>

                <h1 className="text-5xl font-bold mt-6">5</h1>

                <p className="mt-3 text-cyan-100">Pending Tasks</p>
              </div> */}
            </div>
          </div>
        )}

        {/* ATTENDANCE */}
        {activeMenu === "attendance" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Attendance Details</h2>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 w-[30%]">
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

        {/* LEAVES */}
        {activeMenu === "leaves" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Leave Requests</h2>

            <div className="space-y-6 w-[30%]">
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

        {/* NOTIFICATIONS */}
        {activeMenu === "notifications" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Notifications</h2>

            <div className="space-y-5 w-[30%]">
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
