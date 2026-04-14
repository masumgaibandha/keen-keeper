

const FriendsDetailsPage = async({params}) => {
    const {friendId} = await params
    console.log('Show friends Id', friendId)
    
    const res = await fetch("http://localhost:3000/friends.json");
    const friends = await res.json();
    const friend = friends.find(item => item.id === Number(friendId));
    
    return (
        <div>
          
            FriendsDetailsPage {friend.name}
        </div>
    );
};

export default FriendsDetailsPage;