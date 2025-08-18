import React, { useState, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import "./Styles/Progress.css";
 
const LogActivity = ({ user }) => {
  const [activities, setActivities] = useState(() => {
    const saved = localStorage.getItem("activities");
    return saved ? JSON.parse(saved) : [];
  });

  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  const validate = () => {
    const errs = {};
    if (!activity.trim()) errs.activity = "Activity name required";
    if (!date) errs.date = "Date required";
    if (!duration || isNaN(duration) || duration <= 0) errs.duration = "Valid duration required";
    if (!calories || isNaN(calories) || calories < 0) errs.calories = "Valid calories required";
    return errs;
  };

  const handleAdd = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setActivities((prev) => [
      ...prev,
      { activity, duration: Number(duration), calories: Number(calories), date, notes },
    ]);

    setActivity("");
    setDuration("");
    setCalories("");
    setDate("");
    setNotes("");
    setErrors({});
  };

  const getLast7DaysData = () => {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      days.push(d.toISOString().slice(0, 10));
    }

    const data = days.map((day) => {
      const totalDuration = activities
        .filter((a) => a.date === day)
        .reduce((sum, a) => sum + a.duration, 0);
      return { date: day, duration: totalDuration };
    });

    return data;
  };

  const chartData = getLast7DaysData();

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <h1>Log Your Activity</h1>
      <p>Hi {user?.displayName || "User"}, track your workouts and keep improving!</p>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: "1 1 200px" }}>
          <input
            type="text"
            placeholder="Activity Name (e.g., Running)"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            style={{ padding: "10px", width: "100%" }}
          />
          {errors.activity && <small style={{ color: "red" }}>{errors.activity}</small>}
        </div>

        <div style={{ flex: "1 1 150px" }}>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ padding: "10px", width: "100%" }}
          />
          {errors.date && <small style={{ color: "red" }}>{errors.date}</small>}
        </div>

        <div style={{ flex: "1 1 150px" }}>
          <input
            type="number"
            placeholder="Duration (mins)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            style={{ padding: "10px", width: "100%" }}
          />
          {errors.duration && <small style={{ color: "red" }}>{errors.duration}</small>}
        </div>

        <div style={{ flex: "1 1 150px" }}>
          <input
            type="number"
            placeholder="Calories Burned"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            style={{ padding: "10px", width: "100%" }}
          />
          {errors.calories && <small style={{ color: "red" }}>{errors.calories}</small>}
        </div>

        <div style={{ flex: "1 1 100%" }}>
          <textarea
            placeholder="Notes (optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            style={{ padding: "10px", width: "100%" }}
          ></textarea>
        </div>

        <button
          onClick={handleAdd}
          style={{
            padding: "10px 20px",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            flex: "1 1 100px",
          }}
        >
          Add Activity
        </button>
      </div>

      <h2 style={{ marginTop: "40px" }}>Last 7 Days Workout Duration (mins)</h2>
      <div style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={(tick) => tick.slice(5)} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="duration" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
          <div style={{ width: "100%", overflowX: "auto" }}>
      <table
        style={{
          // width: "100%",
          // marginTop: "20px",
          // borderCollapse: "collapse",
          // textAlign: "center",
          minWidth: "650px" ,
          marginTop: "20px",
          borderCollapse: "collapse",
          textAlign: "center",
          border: "1px solid #ddd",
          borderRadius: "5px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          background: "#fff",
          fontFamily: "'Roboto', sans-serif",
          fontSize: "14px",
          color: "#333",
        
          boxSizing: "border-box",
          marginBottom: "20px", 
          borderSpacing: "0",
          
          
        }}
      >
      
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Date</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Activity</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Duration (mins)</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Calories Burned</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Notes</th>
          </tr>
        </thead>
        <tbody>
          {activities.length > 0 ? (
            activities
              .slice()
              .reverse()
              .map((act, index) => (
                <tr key={index}>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{act.date}</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{act.activity}</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{act.duration}</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{act.calories}</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{act.notes}</td>
                </tr>
              ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "10px" }}>
                No activities logged yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default LogActivity;
