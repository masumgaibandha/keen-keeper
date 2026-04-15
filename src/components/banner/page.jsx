import fs from "fs/promises";
import path from "path";
import { HiOutlinePlusSm } from "react-icons/hi";

const BannerPage = async () => {
  const filePath = path.join(process.cwd(), "public", "friends.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const friends = JSON.parse(jsonData);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center space-y-3 py-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937]">
          Friends to keep close in your life
        </h2>
        <p className="text-[#64748B] text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br className="hidden md:block" />
          relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white rounded-xl px-5">
          <HiOutlinePlusSm size={25} />
          Add a Friend
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="card border border-gray-300 shadow-sm my-4 md:my-10">
          <div className="card-body">
            <span className="text-3xl font-bold text-center text-[#244D3F]">
              {friends.length}
            </span>
            <p className="text-xl text-center text-[#64748B]">Total Friends</p>
          </div>
        </div>

        <div className="card border border-gray-300 shadow-sm my-4 md:my-10">
          <div className="card-body">
            <span className="text-3xl font-bold text-center text-[#244D3F]">
              3
            </span>
            <p className="text-xl text-center text-[#64748B]">On Track</p>
          </div>
        </div>

        <div className="card border border-gray-300 shadow-sm my-4 md:my-10">
          <div className="card-body">
            <span className="text-3xl font-bold text-center text-[#244D3F]">
              6
            </span>
            <p className="text-xl text-center text-[#64748B]">Need Attention</p>
          </div>
        </div>

        <div className="card border border-gray-300 shadow-sm my-4 md:my-10">
          <div className="card-body">
            <span className="text-3xl font-bold text-center text-[#244D3F]">
              12
            </span>
            <p className="text-xl text-center text-[#64748B]">
              Interactions This Month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
