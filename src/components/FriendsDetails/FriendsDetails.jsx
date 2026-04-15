import FriendsCard from "./FriendsCard";

const FriendsDetails = async () => {
  const res = await fetch("http://localhost:3000/friends.json");
  const friends = await res.json();
  
  return (
    <div className="py-6 w-7xl mx-auto">
      <h2 className="text-2xl font-bold">Your Friends</h2>
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {friends.map((friend) => (
            <FriendsCard key={friend.id} friend={friend}></FriendsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
