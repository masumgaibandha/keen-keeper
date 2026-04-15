"use client";
import Image from "next/image";
import demoImg from "@/assets/w22.png";
import callImg from "@/assets/call.png";
import textImg from "@/assets/text.png";
import videoImg from "@/assets/video.png";

const CheckInToggleButton = ({ friend }) => {
  const handleCheckIn = (type) => {
    console.log("handle Check in Clicked");
    alert(`${type} clicked for ${friend.name}`);

    const newEntry = {
      id: Date.now(),
      type,
      friendId: friend.id,
      friendName: friend.name,
      time: new Date().toLocaleString(),
    };

    const oldData = JSON.parse(localStorage.getItem("timelineData")) || [];

    const updatedData = [newEntry, ...oldData];

    localStorage.setItem("timelineData", JSON.stringify(updatedData));
  };
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-3">
        {/* Call Button */}
        <div className="card border border-gray-300 shadow-sm ">
          <div
            onClick={() => handleCheckIn("call")}
            className="card-body cursor-pointer"
          >
            <span className="text-3xl font-bold text-center  text-[#244D3F]">
              <Image
                width={30}
                height={30}
                src={callImg}
                className="mx-auto"
                alt="call image"
              ></Image>
            </span>
            <p className="text-xl text-center text-[#64748B]">Call</p>
          </div>
        </div>
        {/* Text Button */}
        <div className="card border border-gray-300 shadow-sm ">
          <div onClick={() => handleCheckIn("text")} className="card-body">
            <span className="text-3xl font-bold text-center  text-[#244D3F]">
              <Image
                width={30}
                height={30}
                src={textImg}
                className="mx-auto"
                alt="call image"
              ></Image>
            </span>
            <p className="text-xl text-center text-[#64748B]">Text</p>
          </div>
        </div>
        {/* Video Button */}
        <div className="card border border-gray-300 shadow-sm ">
          <div onClick={() => handleCheckIn("video")} className="card-body">
            <span className="text-3xl font-bold text-center  text-[#244D3F]">
              <Image
                width={30}
                height={30}
                src={videoImg}
                className="mx-auto"
                alt="call image"
              ></Image>
            </span>
            <p className="text-xl text-center text-[#64748B]">Video</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckInToggleButton;
