import Image from "next/image";

import TimeLinePage from "./timeline/page";
import StatsPage from "./stats/page";
import BannerPage from "@/components/banner/page";
import FriendsDetails from "@/components/FriendsDetails/FriendsDetails";
import UsersDetailsCard from "@/components/FriendsDetails/UsersDetailsCard";

export default function Home() {
  return (
    <div  className="w-7xl mx-auto">
      <BannerPage/>
      <FriendsDetails/>
{/*       
      
      <TimeLinePage/>
      <StatsPage/> */}
    </div>
  );
}
