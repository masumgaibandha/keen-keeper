"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import callImg from "@/assets/call.png";
import textImg from "@/assets/text.png";
import videoImg from "@/assets/video.png";

const TimelinePage = () => {
  const [timeline, setTimeline] = useState([]);
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timelineData")) || [];
    setTimeline(data);
  }, []);

  const getIcon = (type) => {
    if (type === "call") return callImg;
    if (type === "text") return textImg;
    if (type === "video") return videoImg;
    return callImg;
  };

  const formatType = (type) => {
    if (!type) return "";
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  const filteredTimeline = useMemo(() => {
    if (filterType === "all") return timeline;
    return timeline.filter((item) => item.type === filterType);
  }, [timeline, filterType]);

  return (
    <div className="w-5xl mx-auto px-6 py-10">
      <h1 className="text-5xl font-bold text-slate-800 mb-8">Timeline</h1>

      <div className="mb-6">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="all">Filter timeline</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>

      <div className="space-y-5">
        {filteredTimeline.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-gray-500">No timeline data found.</p>
          </div>
        ) : (
          filteredTimeline.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="shrink-0">
                  <Image
                    src={getIcon(item.type)}
                    width={42}
                    height={42}
                    alt={item.type}
                  />
                </div>

                <div>
                  <p className="text-2xl text-slate-500">
                    <span className="font-bold text-[#244D3F]">
                      {formatType(item.type)}
                    </span>{" "}
                    with {item.friendName}
                  </p>
                  <p className="mt-1 text-lg text-slate-500">{item.time}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TimelinePage;
