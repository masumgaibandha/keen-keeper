import Image from "next/image";
import friendImg from "../../assets/w22.png";
import Link from "next/link";

const FriendsCard = ({ friend }) => {
  const getStatusColor = (status) => {
    if (status === "overdue") return "bg-red-400 text-white";
    if (status === "on track") return "bg-green-400 text-white";
    if (status === "Almost due") return "bg-yellow-400 text-black";
    return "bg-gray-300 text-black";
  };

  return (
    <div className="my-6">
      <div className="">
        <Link href={`/friends/${friend.id}`}>
          <div className="card border border-gray-200 shadow-md">
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
              <span>{friend.days_since_contact} d ago</span>
              <div className="card-actions">
                {friend.tags.map((tag, index) => (
                  <button
                    key={index}
                    className="badge px-5 py-3 bg-[#CBFADB] text-[#244D3F]"
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="card-actions">
                <button
                  className={`badge rounded-3xl px-5 py-3 ${getStatusColor(
                    friend.status)}`}
                >
                  {friend.status}
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FriendsCard;
