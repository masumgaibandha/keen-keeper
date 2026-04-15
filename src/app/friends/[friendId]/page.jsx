import fs from "fs/promises";
import path from "path";
import Image from "next/image";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { FiArchive } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import CheckInToggleButton from "@/components/FriendsDetails/CheckInToggleButton";

const FriendsDetailsPage = async ({ params }) => {
  const { friendId } = await params;


  const filePath = path.join(process.cwd(), "public", "friends.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const friends = JSON.parse(jsonData);

  const friend = friends.find((item) => item.id === Number(friendId));

  if (!friend) {
    return <div className="p-10 text-center">Friend not found</div>;
  }

 
  const getStatusColor = (status) => {
    if (status === "overdue") return "bg-red-400 text-white";
    if (status === "on track") return "bg-green-400 text-white";
    if (status === "Almost due") return "bg-yellow-400 text-black";
    return "bg-gray-300 text-black";
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-5 my-10">
        {/* LEFT CARD */}
        <div className="card border shadow-md md:col-span-3">
          <figure className="px-10 pt-10">
            <Image
              className="rounded-full"
              width={100}
              height={100}
              src={friend.picture}
              alt="friend"
            />
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title">{friend.name}</h2>

            <div className="flex flex-col items-center gap-3">
              <button
                className={`badge rounded-3xl px-5 py-3 ${getStatusColor(
                  friend.status,
                )}`}
              >
                {friend.status}
              </button>

              <div className="flex flex-wrap justify-center gap-2">
                {friend.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="badge px-5 py-3 bg-[#CBFADB] text-[#244D3F]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="py-3">{friend.bio}</p>
            <p className="text-sm text-gray-500">{friend.email}</p>
          </div>

          <div className="divider"></div>

          {/* ACTIONS */}
          <div className="space-y-2 px-4 pb-4">
            <div className="card border text-center py-3">
              <span>
                <HiOutlineBellSnooze className="inline mr-2" />
                Snooze 2 weeks
              </span>
            </div>

            <div className="card border text-center py-3">
              <span>
                <FiArchive className="inline mr-2" />
                Archive
              </span>
            </div>

            <div className="card border text-center py-3">
              <span className="text-red-500">
                <MdOutlineDelete className="inline mr-2" />
                Delete
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="md:col-span-7 space-y-6">
          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="card border shadow-sm text-center p-5">
              <p className="text-3xl font-bold text-[#244D3F]">
                {friend.days_since_contact}
              </p>
              <p className="text-[#64748B]">Days Since Contact</p>
            </div>

            <div className="card border shadow-sm text-center p-5">
              <p className="text-3xl font-bold text-[#244D3F]">{friend.goal}</p>
              <p className="text-[#64748B]">Goal (Days)</p>
            </div>

            <div className="card border shadow-sm text-center p-5">
              <p className="text-xl font-bold text-[#244D3F]">
                {friend.next_due_date}
              </p>
              <p className="text-[#64748B]">Next Due</p>
            </div>
          </div>

          {/* GOAL */}
          <div className="card border shadow-sm flex flex-col sm:flex-row justify-between items-center p-6 gap-4">
            <div>
              <p className="font-bold text-[#244D3F]">Relationship Goal</p>
              <p className="text-[#64748B]">Connect every {friend.goal} days</p>
            </div>
            <button className="btn">Edit</button>
          </div>

          {/* CHECK-IN */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Check-In</h2>
            <CheckInToggleButton friend={friend} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetailsPage;
