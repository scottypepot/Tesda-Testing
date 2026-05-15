import { useState } from "react";

const student = {
  name: "Maria Santos",
  id: "TESDA-2024-08821",
  photo: null,
  program: "Computer Systems Servicing NC II",
  institution: "Cebu Training Center",
  status: "Active",
  completionRate: 72,
  nextSession: "May 19, 2026 · 8:00 AM",
};

const stats = [
  { label: "Units Completed", value: "18", total: "25", icon: "📚" },
  { label: "Assessments Passed", value: "4", total: "6", icon: "✅" },
  { label: "Attendance Rate", value: "94%", total: null, icon: "📅" },
  { label: "Certificates Earned", value: "1", total: "3", icon: "🏅" },
];

const courses = [
  {
    name: "Computer Hardware Servicing",
    code: "CSS-101",
    progress: 100,
    status: "Completed",
    grade: "Competent",
  },
  {
    name: "Networking Fundamentals",
    code: "CSS-102",
    progress: 85,
    status: "Ongoing",
    grade: null,
  },
  {
    name: "Operating Systems",
    code: "CSS-103",
    progress: 60,
    status: "Ongoing",
    grade: null,
  },
  {
    name: "Preventive Maintenance",
    code: "CSS-104",
    progress: 30,
    status: "Ongoing",
    grade: null,
  },
  {
    name: "Software Installation",
    code: "CSS-105",
    progress: 0,
    status: "Upcoming",
    grade: null,
  },
];

const assessments = [
  {
    name: "Written Exam – Hardware",
    date: "Mar 10, 2026",
    result: "Passed",
    score: "88/100",
  },
  {
    name: "Practical Demo – Assembly",
    date: "Mar 24, 2026",
    result: "Passed",
    score: "92/100",
  },
  {
    name: "Written Exam – Networking",
    date: "Apr 14, 2026",
    result: "Passed",
    score: "79/100",
  },
  {
    name: "Practical Demo – LAN Setup",
    date: "Apr 28, 2026",
    result: "Passed",
    score: "85/100",
  },
  {
    name: "Written Exam – OS",
    date: "May 20, 2026",
    result: "Upcoming",
    score: null,
  },
  {
    name: "Practical Demo – Troubleshooting",
    date: "Jun 5, 2026",
    result: "Upcoming",
    score: null,
  },
];

const certificates = [
  {
    name: "TESDA NC I – Computer Hardware Servicing",
    issued: "Apr 1, 2026",
    expiry: "Apr 1, 2029",
    status: "Active",
  },
  {
    name: "TESDA NC II – Networking",
    issued: null,
    expiry: null,
    status: "Pending",
  },
  {
    name: "TESDA NC II – Computer Systems Servicing",
    issued: null,
    expiry: null,
    status: "Locked",
  },
];

const navItems = [
  "Dashboard",
  "Courses",
  "Assessments",
  "Certificates",
  "Profile",
];

const GOLD = "#C9A84C";
const NAVY = "#0B1F3A";

export default function App() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div
      style={{
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        background: "#F4F6FA",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:wght@700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        button { cursor: pointer; border: none; background: none; font-family: inherit; }
        ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #ccc; border-radius: 3px; }
        .card { background: #fff; border-radius: 16px; padding: 20px 22px; box-shadow: 0 1px 4px rgba(0,0,0,0.06); }
        .prog-bar-bg { background: #E8ECF4; border-radius: 99px; height: 7px; width: 100%; }
        .prog-bar { height: 7px; border-radius: 99px; transition: width 0.6s ease; }
        .badge { display: inline-block; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 20px; }
        .badge-green { background: #E6F4EC; color: #1A7A3F; }
        .badge-blue { background: #E6EFF9; color: #1A5FA0; }
        .badge-gray { background: #EDEEF2; color: #666; }
        .badge-gold { background: #FDF3DC; color: #8A6300; }
        .badge-red { background: #FDECEA; color: #B22222; }
        .stat-card { background: linear-gradient(135deg, ${NAVY} 60%, #16325C); border-radius: 16px; color: #fff; padding: 20px; position: relative; overflow: hidden; }
        .stat-card::after { content: ''; position: absolute; bottom: -20px; right: -20px; width: 80px; height: 80px; border-radius: 50%; background: rgba(255,255,255,0.06); }
        .table-row:hover { background: #F7F9FD; }
        .cert-card { border: 1.5px solid #E2E8F0; border-radius: 14px; padding: 18px 20px; background: #fff; display: flex; align-items: center; gap: 16px; }
        .cert-card.active-cert { border-color: ${GOLD}; background: #FFFDF5; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp 0.35s ease both; }
      `}</style>

      <header
        style={{
          background: NAVY,
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          height: 60,
          gap: 16,
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              background: GOLD,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 15,
              color: NAVY,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            T
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#fff",
                fontSize: 15,
                lineHeight: 1,
              }}
            >
              TESDA
            </div>
            <div
              style={{
                color: "#9AAFCE",
                fontSize: 10,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Training Portal
            </div>
          </div>
        </div>
        <nav style={{ display: "flex", gap: 4 }}>
          {navItems.map((n) => (
            <button
              key={n}
              onClick={() => setActive(n)}
              style={{
                padding: "6px 14px",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 500,
                color: active === n ? GOLD : "#9AAFCE",
                background:
                  active === n ? "rgba(201,168,76,0.12)" : "transparent",
                borderBottom:
                  active === n ? `2px solid ${GOLD}` : "2px solid transparent",
                transition: "all 0.15s",
              }}
            >
              {n}
            </button>
          ))}
        </nav>
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #4A7BC5, #2458A8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: 600,
            fontSize: 13,
            marginLeft: 8,
            flexShrink: 0,
          }}
        >
          MS
        </div>
      </header>

      <main
        style={{
          flex: 1,
          padding: "28px 24px",
          maxWidth: 1100,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {active === "Dashboard" && <DashboardView />}
        {active === "Courses" && <CoursesView />}
        {active === "Assessments" && <AssessmentsView />}
        {active === "Certificates" && <CertificatesView />}
        {active === "Profile" && <ProfileView />}
      </main>
    </div>
  );
}

function DashboardView() {
  return (
    <div className="fade-up">
      <div
        style={{
          background: `linear-gradient(120deg, ${NAVY} 0%, #16325C 60%, #1A4080 100%)`,
          borderRadius: 20,
          padding: "28px 32px",
          marginBottom: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -40,
            right: 120,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(201,168,76,0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -30,
            right: 30,
            width: 130,
            height: 130,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
          }}
        />
        <div>
          <div
            style={{
              color: GOLD,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 6,
            }}
          >
            Welcome back
          </div>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#fff",
              fontSize: 26,
              marginBottom: 4,
            }}
          >
            Maria Santos
          </div>
          <div style={{ color: "#9AAFCE", fontSize: 13 }}>
            {student.program}
          </div>
          <div style={{ color: "#9AAFCE", fontSize: 12, marginTop: 4 }}>
            🏫 {student.institution} &nbsp;·&nbsp; ID: {student.id}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ color: "#9AAFCE", fontSize: 12, marginBottom: 8 }}>
            Next session
          </div>
          <div
            style={{
              background: "rgba(201,168,76,0.15)",
              border: `1px solid ${GOLD}`,
              borderRadius: 10,
              padding: "8px 16px",
              color: GOLD,
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            📅 {student.nextSession}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
          marginBottom: 24,
        }}
      >
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <div style={{ fontSize: 22, marginBottom: 8 }}>{s.icon}</div>
            <div
              style={{
                fontSize: 26,
                fontWeight: 700,
                fontFamily: "'Playfair Display', serif",
                color: "#fff",
              }}
            >
              {s.value}
              {s.total && (
                <span
                  style={{
                    fontSize: 14,
                    color: "#9AAFCE",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  /{s.total}
                </span>
              )}
            </div>
            <div style={{ color: "#9AAFCE", fontSize: 12, marginTop: 4 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div className="card">
          <div
            style={{
              fontWeight: 600,
              fontSize: 15,
              color: NAVY,
              marginBottom: 16,
            }}
          >
            Program Progress
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <span style={{ fontSize: 13, color: "#666" }}>
              {student.program}
            </span>
            <span style={{ fontWeight: 700, color: NAVY, fontSize: 18 }}>
              {student.completionRate}%
            </span>
          </div>
          <div className="prog-bar-bg">
            <div
              className="prog-bar"
              style={{
                width: `${student.completionRate}%`,
                background: `linear-gradient(90deg, #1A5FA0, ${GOLD})`,
              }}
            />
          </div>
          <div style={{ marginTop: 20 }}>
            {courses.slice(0, 4).map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    color: "#666",
                    width: 140,
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {c.name}
                </div>
                <div className="prog-bar-bg" style={{ flex: 1 }}>
                  <div
                    className="prog-bar"
                    style={{
                      width: `${c.progress}%`,
                      background: c.progress === 100 ? "#1A7A3F" : "#1A5FA0",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#888",
                    width: 32,
                    textAlign: "right",
                  }}
                >
                  {c.progress}%
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div
            style={{
              fontWeight: 600,
              fontSize: 15,
              color: NAVY,
              marginBottom: 16,
            }}
          >
            Recent Assessments
          </div>
          {assessments.slice(0, 4).map((a, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: i < 3 ? "0.5px solid #EEF0F5" : "none",
              }}
            >
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: NAVY }}>
                  {a.name}
                </div>
                <div style={{ fontSize: 11, color: "#999", marginTop: 2 }}>
                  {a.date}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <span
                  className={`badge ${a.result === "Passed" ? "badge-green" : a.result === "Upcoming" ? "badge-gray" : "badge-red"}`}
                >
                  {a.result}
                </span>
                {a.score && (
                  <div style={{ fontSize: 11, color: "#888", marginTop: 4 }}>
                    {a.score}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CoursesView() {
  return (
    <div className="fade-up">
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 22,
          color: NAVY,
          marginBottom: 20,
        }}
      >
        My Courses
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {courses.map((c, i) => (
          <div
            key={i}
            className="card"
            style={{ display: "flex", alignItems: "center", gap: 20 }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                flexShrink: 0,
                background:
                  c.status === "Completed"
                    ? "#E6F4EC"
                    : c.status === "Upcoming"
                      ? "#EDEEF2"
                      : "#E6EFF9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
              }}
            >
              {c.status === "Completed"
                ? "✅"
                : c.status === "Upcoming"
                  ? "🔒"
                  : "📖"}
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 4,
                }}
              >
                <span style={{ fontWeight: 600, fontSize: 15, color: NAVY }}>
                  {c.name}
                </span>
                <span style={{ fontSize: 11, color: "#999" }}>{c.code}</span>
                <span
                  className={`badge ${c.status === "Completed" ? "badge-green" : c.status === "Upcoming" ? "badge-gray" : "badge-blue"}`}
                >
                  {c.status}
                </span>
              </div>
              <div className="prog-bar-bg">
                <div
                  className="prog-bar"
                  style={{
                    width: `${c.progress}%`,
                    background:
                      c.status === "Completed"
                        ? "#1A7A3F"
                        : c.status === "Upcoming"
                          ? "#ccc"
                          : `linear-gradient(90deg, #1A5FA0, #4A7BC5)`,
                  }}
                />
              </div>
              <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>
                {c.progress}% complete
              </div>
            </div>
            {c.grade && (
              <div
                style={{
                  textAlign: "center",
                  background: "#E6F4EC",
                  borderRadius: 10,
                  padding: "8px 14px",
                }}
              >
                <div
                  style={{ fontSize: 11, color: "#1A7A3F", fontWeight: 600 }}
                >
                  GRADE
                </div>
                <div
                  style={{ fontSize: 13, fontWeight: 700, color: "#1A7A3F" }}
                >
                  {c.grade}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function AssessmentsView() {
  return (
    <div className="fade-up">
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 22,
          color: NAVY,
          marginBottom: 20,
        }}
      >
        Assessments
      </div>
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <table
          style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}
        >
          <thead>
            <tr style={{ background: "#F7F9FD" }}>
              {["Assessment", "Date", "Result", "Score"].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: "14px 20px",
                    textAlign: "left",
                    fontWeight: 600,
                    color: "#555",
                    fontSize: 12,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    borderBottom: "0.5px solid #E8ECF4",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {assessments.map((a, i) => (
              <tr
                key={i}
                className="table-row"
                style={{
                  borderBottom:
                    i < assessments.length - 1 ? "0.5px solid #F0F2F8" : "none",
                }}
              >
                <td
                  style={{ padding: "14px 20px", fontWeight: 500, color: NAVY }}
                >
                  {a.name}
                </td>
                <td style={{ padding: "14px 20px", color: "#666" }}>
                  {a.date}
                </td>
                <td style={{ padding: "14px 20px" }}>
                  <span
                    className={`badge ${a.result === "Passed" ? "badge-green" : a.result === "Upcoming" ? "badge-gold" : "badge-red"}`}
                  >
                    {a.result}
                  </span>
                </td>
                <td
                  style={{
                    padding: "14px 20px",
                    color: a.score ? NAVY : "#bbb",
                    fontWeight: a.score ? 600 : 400,
                  }}
                >
                  {a.score ?? "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CertificatesView() {
  return (
    <div className="fade-up">
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 22,
          color: NAVY,
          marginBottom: 20,
        }}
      >
        Certificates
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {certificates.map((c, i) => (
          <div
            key={i}
            className={`cert-card ${c.status === "Active" ? "active-cert" : ""}`}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                flexShrink: 0,
                background:
                  c.status === "Active"
                    ? "#FDF3DC"
                    : c.status === "Pending"
                      ? "#E6EFF9"
                      : "#EDEEF2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
              }}
            >
              {c.status === "Active"
                ? "🏅"
                : c.status === "Pending"
                  ? "⏳"
                  : "🔒"}
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 14,
                  color: NAVY,
                  marginBottom: 4,
                }}
              >
                {c.name}
              </div>
              {c.issued ? (
                <div style={{ fontSize: 12, color: "#888" }}>
                  Issued: {c.issued} &nbsp;·&nbsp; Expires: {c.expiry}
                </div>
              ) : (
                <div style={{ fontSize: 12, color: "#aaa" }}>
                  {c.status === "Pending"
                    ? "Awaiting completion of requirements"
                    : "Complete prior certifications to unlock"}
                </div>
              )}
            </div>
            <span
              className={`badge ${c.status === "Active" ? "badge-gold" : c.status === "Pending" ? "badge-blue" : "badge-gray"}`}
            >
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileView() {
  const fields = [
    ["Full Name", "Maria Santos"],
    ["Student ID", "TESDA-2024-08821"],
    ["Program Enrolled", "Computer Systems Servicing NC II"],
    ["Training Center", "Cebu Training Center"],
    ["Enrollment Date", "August 5, 2024"],
    ["Status", "Active"],
    ["Email", "maria.santos@email.com"],
    ["Contact No.", "+63 912 345 6789"],
  ];
  return (
    <div className="fade-up">
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 22,
          color: NAVY,
          marginBottom: 20,
        }}
      >
        My Profile
      </div>
      <div
        style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 20 }}
      >
        <div
          className="card"
          style={{ textAlign: "center", padding: "32px 20px" }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: `linear-gradient(135deg, #1A5FA0, ${NAVY})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 28,
              fontWeight: 700,
              margin: "0 auto 16px",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            MS
          </div>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 18,
              color: NAVY,
            }}
          >
            Maria Santos
          </div>
          <div style={{ fontSize: 12, color: "#999", marginTop: 4 }}>
            TESDA-2024-08821
          </div>
          <div style={{ marginTop: 12 }}>
            <span className="badge badge-green">Active Trainee</span>
          </div>
          <div
            style={{
              marginTop: 20,
              padding: "14px",
              background: "#F7F9FD",
              borderRadius: 10,
            }}
          >
            <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>
              Program Completion
            </div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: NAVY,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              72%
            </div>
            <div className="prog-bar-bg" style={{ marginTop: 8 }}>
              <div
                className="prog-bar"
                style={{
                  width: "72%",
                  background: `linear-gradient(90deg, #1A5FA0, ${GOLD})`,
                }}
              />
            </div>
          </div>
        </div>
        <div className="card">
          <div
            style={{
              fontWeight: 600,
              fontSize: 14,
              color: NAVY,
              marginBottom: 16,
            }}
          >
            Personal & Enrollment Details
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}
          >
            {fields.map(([label, value], i) => (
              <div
                key={i}
                style={{
                  padding: "12px 0",
                  borderBottom: "0.5px solid #F0F2F8",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: "#999",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 3,
                  }}
                >
                  {label}
                </div>
                <div style={{ fontSize: 14, fontWeight: 500, color: NAVY }}>
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
