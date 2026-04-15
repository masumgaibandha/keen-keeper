
import Image from "next/image";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { FiArchive } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import CheckInToggleButton from "@/components/FriendsDetails/CheckInToggleButton";


const FriendsDetailsPage = async ({ params }) => {
  const { friendId } = await params;
 

  const res = await fetch("http://localhost:3000/friends.json");
  const friends = await res.json();
  const friend = friends.find((item) => item.id === Number(friendId));

  return (
    <div className="w-7xl mx-auto">
      <div className="grid grid-cols-10 gap-5 my-10">
        <div className="card border border-gray-200 shadow-md col-span-3 ">
          <figure className="px-10 pt-10">
            <Image
              className="rounded-full"
              width={100}
              height={100}
              src={friend.picture}
              alt="friends-image"
            ></Image>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{friend.name}</h2>
            <span>
              <div className="flex flex-col justify-center items-center gap-3">
                <button className="badge rounded-3xl px-5 py-5 bg-[#EFAD44] text-white">
                  {friend.status}
                </button>

                <div>
                    {
                    friend.tags.map((tag, index)=><button key={index} className=" badge px-5 py-3 bg-[#CBFADB] text-[#244D3F]">
                {tag}
                </button>)
                  }
                </div>
              </div>
              <p className="py-3">{friend.bio}</p>
              <span>{friend.email}</span>
              
            </span>
          </div>
          <div className="divider"></div>
          <div className="card border border-gray-200 shadow-md text-center py-3 ">
            <span>
              <HiOutlineBellSnooze className="mx-auto inline" /> Snooze 2 weeks
            </span>
          </div>
          <div className="card border border-gray-200 shadow-md text-center py-3 ">
            <span>
              <FiArchive className="mx-auto inline" /> Archive
            </span>
          </div>
          <div className="card border border-gray-200 shadow-md text-center py-3 ">
            <span>
              <MdOutlineDelete
                color="red"
                size={20}
                className="mx-auto inline"
              />{" "}
              Delete
            </span>
          </div>
        </div>

        <div className="my-10 col-span-7 ">
          <div className="grid md:grid-cols-3 mb-5 gap-3">
            <div className="card border border-gray-300 shadow-sm ">
              <div className="card-body">
                <span className="text-3xl font-bold text-center  text-[#244D3F]">
                  62
                </span>
                <p className="text-xl text-center text-[#64748B]">
                  Days Since Contact
                </p>
              </div>
            </div>

            <div className="card border border-gray-300 shadow-sm ">
              <div className="card-body">
                <span className="text-3xl font-bold text-center  text-[#244D3F]">
                  30
                </span>
                <p className="text-xl text-center text-[#64748B]">
                  Goal (Days)
                </p>
              </div>
            </div>

            <div className="card border border-gray-300 shadow-sm ">
              <div className="card-body">
                <span className="text-3xl font-bold text-center  text-[#244D3F]">
                  Feb 27, 2026
                </span>
                <p className="text-xl text-center text-[#64748B]">Next Due</p>
              </div>
            </div>
          </div>

          <div className="card border border-gray-300 shadow-sm ">
            <div className=" p-10 border border-gray-300 shadow-sm flex justify-between items-center">
              <div className="">
                <span className="text-xl font-bold text-center  text-[#244D3F]">
                  Relationship Goal
                </span>
                <p className="text-xl text-center text-[#64748B]">
                  Connect every 30 days
                </p>
              </div>
              <button className="btn">Edit</button>
            </div>
          </div>

          <h2 className="py-5 text-2xl font-bold">Quick Check-In</h2>           
                  <CheckInToggleButton friend={friend}></CheckInToggleButton>        
          </div>
        </div>
      </div>
   
  );
};

export default FriendsDetailsPage;
