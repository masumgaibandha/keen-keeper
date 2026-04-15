import fs from "fs/promises";
import path from "path";
import FriendsCard from "./FriendsCard";

const FriendsDetails = async () => {
  const filePath = path.join(process.cwd(), "public", "friends.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const friends = JSON.parse(jsonData);

  return (
    <div className="py-6 max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Your Friends</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {friends.map((friend) => (
          <FriendsCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsDetails;
