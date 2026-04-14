
import { HiOutlinePlusSm } from "react-icons/hi";

const BannerPage = async() => {
    const res = await fetch("http://localhost:3000/friends.json");
  const friends = await res.json();
  return (
    <div>
      <div className="text-center space-y-3 py-10">
        <h2 className="text-5xl font-bold  text-[#1F2937]">
          Friends to keep close in your life
        </h2>
        <p className="text-[#64748B]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white rounded-xl px-5">
          <HiOutlinePlusSm size={25} />
          Add a Friend
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="card border border-gray-300 shadow-sm my-10">
          <div className="card-body">
            <span className="text-3xl font-bold text-center  text-[#244D3F]">
              {friends.length}
            </span>
            <p className="text-xl text-center text-[#64748B]">Total Friends</p>
          </div>
        </div>
        <div className="card border border-gray-300 shadow-sm my-10">
          <div className="card-body">
            <span className="text-3xl font-bold text-center  text-[#244D3F]">
              3
            </span>
            <p className="text-xl text-center text-[#64748B]">On Track</p>
          </div>
        </div>
        <div className="card border border-gray-300 shadow-sm my-10">
          <div className="card-body">
            <span className="text-3xl font-bold text-center  text-[#244D3F]">
              6
            </span>
            <p className="text-xl text-center text-[#64748B]">Need Attention</p>
          </div>
        </div>
        <div className="card border border-gray-300 shadow-sm my-10">
          <div className="card-body">
            <span className="text-3xl font-bold text-center  text-[#244D3F]">
              12
            </span>
            <p className="text-xl text-center text-[#64748B]">Interactions This Month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
