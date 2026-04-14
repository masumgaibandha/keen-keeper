import Image from "next/image";
import Link from "next/link";

const FriendsPage = async () => {
  const res = await fetch("http://localhost:3000/friends.json");
  const friends = await res.json();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 w-7xl mx-auto my-6">
      {friends.map((friend) => {
        return (
          <div key={friend.id}>
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
                    <button className="badge rounded-3xl px-5 py-5 bg-[#EFAD44] text-white">
                      {friend.status}
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsPage;
