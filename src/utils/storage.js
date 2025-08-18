// utils/storage.js
export const getActivities = () => {
  return JSON.parse(localStorage.getItem("activities")) || [];
};

export const saveActivity = (activity) => {
  const activities = getActivities();
  activities.push(activity);
  localStorage.setItem("activities", JSON.stringify(activities));
};
