import React, { useEffect, useState } from "react";
import { getActivities } from "../utils/storage";
import "./Styles/Dashboard.css"

const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "Don't limit your challenges. Challenge your limits.",
  "Success starts with self-discipline.",
  "Sweat is just fat crying.",
  "Every workout is progress.",
];
 
const Dashboard = () => {
  const [activities, setActivities] = useState([]);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    setActivities(getActivities());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 8000); // 8 seconds me quote change hoga

    return () => clearInterval(interval); // cleanup
  }, []);

  const totalWorkouts = activities.length;
  const totalTime = activities.reduce((sum, a) => sum + a.duration, 0);
  const totalCalories = activities.reduce((sum, a) => sum + a.calories, 0);

  return (
    <div className="dashboard">
      <div className="quote">
        <strong>"{quotes[quoteIndex]}"</strong>
      </div>

      <div className="stats-container">
        <StatCard title="Workouts" value={totalWorkouts} subtitle="this week" color="#26955aff" />
        <StatCard title="Time" value={`${totalTime} mins`} subtitle="this week" color="#3b82f6" />
        <StatCard title="Calories Out" value={totalCalories} subtitle="burned this week" color="#f97316" />
        <StatCard title="Calories In" value="0" subtitle="eaten today" color="#a855f7" />
      </div>

      <h2>Recent Workouts</h2>
      <div className="recent-container">
        {activities.slice(-3).reverse().map((a, index) => (
          <div key={index} className="recent-card">
            <h3>{a.name}</h3>
            <p>{a.duration} min | {a.calories} cal</p>
            <p>{new Date(a.date).toLocaleDateString()}</p>
            <span className={`type-badge ${a.type}`}>{a.type}</span>
            {a.notes && <p className="notes">{a.notes}</p>}
          </div>
        ))}
      </div>

      {/* New Bottom Summary Section */}
      <div className="dashboard-bottom">
        <h2>Weekly Summary</h2>
        <ul>
          <li>Total Workouts: {totalWorkouts}</li>
          <li>Total Time: {totalTime} mins</li>
          <li>Calories Burned: {totalCalories}</li>
          <li>Goal Progress: 70% completed</li> {/* Static example, aap dynamic bana sakte ho */}
        </ul>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, subtitle, color }) => (
  <div className="stat-card" style={{ background: color }}>
    <h3>{title}</h3>
    <h2>{value}</h2>
    <p>{subtitle}</p>
  </div>
);

export default Dashboard;
