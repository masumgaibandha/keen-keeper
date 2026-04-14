import Image from "next/image";
import friendImg from '../../assets/w22.png'

const FriendsCard = ({friend}) => {

  return (
    <div className="my-6">
      <div className="">
        <div className="card border border-gray-200 shadow-md">
          <figure className="px-10 pt-10">
            <Image className="rounded-full" width={100} height={100} src={friend.picture} alt="friends-image"></Image>

          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{friend.name}</h2>
            <span>
              {friend.days_since_contact} d ago
            </span>
            <div className="card-actions">
                {friend.tags.map((tag, index)=><button key={index} className="badge px-5 py-3 bg-[#CBFADB] text-[#244D3F]">
                {tag}
                </button>)}
              
            </div>
            <div className="card-actions">
              <button className="badge rounded-3xl px-5 py-5 bg-[#EFAD44] text-white">{friend.status}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsCard;
