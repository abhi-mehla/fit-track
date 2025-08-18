import React, { useState } from "react";
import { saveActivity } from "../utils/storage";
import "./Styles/LogActivity.css";
import { FaRunning } from "react-icons/fa";

const LogActivity = () => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");
  const [type, setType] = useState("workout");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = {
      name,
      duration: Number(duration),
      calories: Number(calories),
      type,
      notes,
      date: new Date().toISOString(),
    };
    saveActivity(newActivity);
    alert("✅ Activity Logged Successfully!");
    setName("");
    setDuration("");
    setCalories("");
    setType("workout");
    setNotes("");
  };

  return (
    <div className="log-activity-page">
      {/* Left Section */}
      <div className="log-activity-left">
        <FaRunning className="activity-icon" />
        <h1>Track Your Fitness</h1>
        <p>Stay consistent. Log your workouts and track progress every day.</p>
      </div>

      {/* Right Section */}
      <div className="log-activity-right">
        <div className="log-activity-card">
          <h2>Log New Activity</h2>
          <form onSubmit={handleSubmit} className="log-activity-form">
            <div className="form-group">
              <label>Activity Name</label>
              <input
                type="text"
                placeholder="e.g. Morning Run"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Duration (mins)</label>
                <input
                  type="number"
                  placeholder="30"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Calories Burned</label>
                <input
                  type="number"
                  placeholder="250"
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Activity Type</label>
              <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="workout">Workout</option>
                <option value="cardio">Cardio</option>
                <option value="strength">Strength</option>
              </select>
            </div>

            <div className="form-group">
              <label>Notes</label>
              <textarea
                placeholder="Any additional notes..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-save">Save Activity</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogActivity;
