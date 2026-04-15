"use client";

import { useEffect, useState } from "react";

const TimelinePage = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timelineData")) || [];
    setTimeline(data);
  }, []);

  return (
    <div className="p-6 w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Timeline Page</h2>

      <div className="space-y-3">
        {timeline.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 rounded-lg p-4 shadow-sm"
          >
            <p className="font-semibold">
              {item.type} - {item.friendName}
            </p>
            <p className="text-sm text-gray-500">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;
