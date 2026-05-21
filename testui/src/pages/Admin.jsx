import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  Bell,
  LogOut,
} from "lucide-react";

function Admin() {
  const navigate = useNavigate();

  // ACTIVE MENU
  const [activeMenu, setActiveMenu] = useState("dashboard");

  // EMPLOYEE LIST
  const [employees, setEmployees] = useState([
    {
      name: "Shiva",
      id: "EMP001",
      designation: "UI Developer",
      status: "Active",
      attendance: "Present",
      checkIn: "09:15 AM",
    },
    {
      name: "Ram",
      id: "EMP002",
      designation: "Backend Developer",
      status: "Active",
      attendance: "Late",
      checkIn: "10:05 AM",
    },
    {
      name: "Ashish",
      id: "EMP003",
      designation: "Full Stack Developer",
      status: "On Leave",
      attendance: "Absent",
      checkIn: "--",
    },
  ]);

  // EMPLOYEE FORM
  const [employeeData, setEmployeeData] = useState({
    name: "",
    id: "",
    designation: "",
    status: "Active",
    attendance: "Present",
    checkIn: "",
  });

  // NOTIFICATIONS
  const [notifications, setNotifications] = useState([
    {
      title: "Payroll Completed",
      message: "Salary processed successfully.",
    },
    {
      title: "Leave Request Pending",
      message: "3 leave requests awaiting approval.",
    },
  ]);

  // NOTIFICATION FORM
  const [notificationData, setNotificationData] = useState({
    title: "",
    message: "",
  });

  // ADD EMPLOYEE
  const handleAddEmployee = () => {
    if (
      employeeData.name === "" ||
      employeeData.id === "" ||
      employeeData.designation === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    setEmployees([...employees, employeeData]);

    setEmployeeData({
      name: "",
      id: "",
      designation: "",
      status: "Active",
      attendance: "Present",
      checkIn: "",
    });
  };

  // ADD NOTIFICATION
  const handleAddNotification = () => {
    if (notificationData.title === "" || notificationData.message === "") {
      alert("Please fill all fields");
      return;
    }

    setNotifications([...notifications, notificationData]);

    setNotificationData({
      title: "",
      message: "",
    });
  };

  // EXPORT PDF
  const exportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Today Attendance Report", 14, 20);

    doc.setFontSize(11);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 30);

    autoTable(doc, {
      startY: 40,
      head: [
        ["Employee Name", "Employee ID", "Designation", "Check In", "Status"],
      ],
      body: employees.map((emp) => [
        emp.name,
        emp.id,
        emp.designation,
        emp.checkIn,
        emp.attendance,
      ]),
    });

    doc.save("attendance-report.pdf");
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex text-white">
      {/* SIDEBAR */}
      <div className="w-72 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6">
        <h1 className="text-3xl font-bold mb-12">HR Admin</h1>

        <div className="space-y-4">
          <div
            onClick={() => setActiveMenu("dashboard")}
            className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer ${
              activeMenu === "dashboard" ? "bg-pink-500" : "hover:bg-white/10"
            }`}
          >
            <LayoutDashboard />
            Dashboard
          </div>

          <div
            onClick={() => setActiveMenu("employees")}
            className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer ${
              activeMenu === "employees" ? "bg-pink-500" : "hover:bg-white/10"
            }`}
          >
            <Users />
            Employees
          </div>

          <div
            onClick={() => setActiveMenu("attendance")}
            className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer ${
              activeMenu === "attendance" ? "bg-pink-500" : "hover:bg-white/10"
            }`}
          >
            <Calendar />
            Get Attendance
          </div>

          <div
            onClick={() => setActiveMenu("leaves")}
            className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer ${
              activeMenu === "leaves" ? "bg-pink-500" : "hover:bg-white/10"
            }`}
          >
            <FileText />
            Leave Requests
          </div>

          <div
            onClick={() => setActiveMenu("notifications")}
            className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer ${
              activeMenu === "notifications"
                ? "bg-pink-500"
                : "hover:bg-white/10"
            }`}
          >
            <Bell />
            Notifications
          </div>
        </div>

        {/* LOGOUT */}
        <button
          onClick={() => navigate("/")}
          className="mt-20 flex items-center gap-3 bg-red-500 px-5 py-3 rounded-xl hover:bg-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-10">
        {/* TOPBAR */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold">Welcome Admin 👋</h1>

            <p className="text-gray-400 mt-2">HR Management Dashboard</p>
          </div>

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

        {/* DASHBOARD */}
        {activeMenu === "dashboard" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Dashboard Overview</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-pink-500 to-pink-700 p-8 rounded-3xl">
                <h3>Total Employees</h3>

                <h1 className="text-5xl font-bold mt-5">{employees.length}</h1>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-8 rounded-3xl">
                <h3>Attendance</h3>

                <h1 className="text-5xl font-bold mt-5">98%</h1>
              </div>

              <div className="bg-gradient-to-br from-cyan-500 to-blue-700 p-8 rounded-3xl">
                <h3>Pending Leaves</h3>

                <h1 className="text-5xl font-bold mt-5">8</h1>
              </div>
            </div>
          </div>
        )}

        {/* EMPLOYEES */}
        {activeMenu === "employees" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Employees Management</h2>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* LEFT */}
              <div>
                <h3 className="text-2xl font-semibold mb-5">Employee List</h3>

                <div className="space-y-5">
                  {employees.map((emp, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/10 p-6 rounded-2xl flex justify-between items-center"
                    >
                      <div className="flex w-full">
                        <div className="flex flex-col">
                          <h3 className="font-semibold">{emp.name}</h3>

                          <p className="text-sm text-gray-500 mt-1">{emp.id}</p>
                        </div>

                        <p className="text-gray-400 ml-auto">
                          {emp.designation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Add Employee</h3>

                <div className="space-y-5">
                  <div>
                    <label className="block mb-2 text-gray-300">
                      Employee Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter employee name"
                      value={employeeData.name}
                      onChange={(e) =>
                        setEmployeeData({
                          ...employeeData,
                          name: e.target.value,
                        })
                      }
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-gray-300">
                      Employee ID
                    </label>

                    <input
                      type="text"
                      placeholder="EMP001"
                      value={employeeData.id}
                      onChange={(e) =>
                        setEmployeeData({
                          ...employeeData,
                          id: e.target.value,
                        })
                      }
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-gray-300">
                      Designation
                    </label>

                    <input
                      type="text"
                      placeholder="UI Developer"
                      value={employeeData.designation}
                      onChange={(e) =>
                        setEmployeeData({
                          ...employeeData,
                          designation: e.target.value,
                        })
                      }
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none"
                    />
                  </div>

                  <button
                    onClick={handleAddEmployee}
                    className="w-full bg-pink-500 hover:bg-pink-600 transition py-3 rounded-xl font-semibold"
                  >
                    Add Employee
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ATTENDANCE */}
        {activeMenu === "attendance" && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold">Today Attendance Report</h2>

                <p className="text-gray-400 mt-2">
                  Date : {new Date().toLocaleDateString()}
                </p>
              </div>

              <button
                onClick={exportPDF}
                className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl font-semibold"
              >
                Export PDF
              </button>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
              <div className="grid grid-cols-5 bg-white/10 p-5 font-semibold text-lg">
                <span>Employee Name</span>
                <span>Employee ID</span>
                <span>Designation</span>
                <span>Check In</span>
                <span>Status</span>
              </div>

              <div className="divide-y divide-white/10">
                {employees.map((emp, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-5 p-5 items-center"
                  >
                    <span>{emp.name}</span>
                    <span>{emp.id}</span>
                    <span>{emp.designation}</span>
                    <span>{emp.checkIn}</span>

                    <span
                      className={`font-semibold ${
                        emp.attendance === "Present"
                          ? "text-green-400"
                          : emp.attendance === "Late"
                            ? "text-yellow-400"
                            : "text-red-400"
                      }`}
                    >
                      {emp.attendance}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* LEAVES */}
        {activeMenu === "leaves" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Leave Requests</h2>

            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl w-[40%]">
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
        )}

        {/* NOTIFICATIONS */}
        {activeMenu === "notifications" && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Notifications</h2>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* LEFT */}
              <div className="space-y-5">
                {notifications.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 p-6 rounded-2xl"
                  >
                    <h3 className="font-semibold text-xl">{item.title}</h3>

                    <p className="text-gray-400 mt-2">{item.message}</p>
                  </div>
                ))}
              </div>

              {/* RIGHT */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-fit">
                <h3 className="text-2xl font-semibold mb-6">
                  Add Notification
                </h3>

                <div className="space-y-5">
                  <div>
                    <label className="block mb-2 text-gray-300">
                      Heading / Title
                    </label>

                    <input
                      type="text"
                      placeholder="Enter heading"
                      value={notificationData.title}
                      onChange={(e) =>
                        setNotificationData({
                          ...notificationData,
                          title: e.target.value,
                        })
                      }
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-gray-300">Message</label>

                    <textarea
                      rows="5"
                      placeholder="Enter message"
                      value={notificationData.message}
                      onChange={(e) =>
                        setNotificationData({
                          ...notificationData,
                          message: e.target.value,
                        })
                      }
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none resize-none"
                    ></textarea>
                  </div>

                  <button
                    onClick={handleAddNotification}
                    className="w-full bg-pink-500 hover:bg-pink-600 transition py-3 rounded-xl font-semibold"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
