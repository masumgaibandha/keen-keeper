import Image from "next/image";
import BannerPage from "./banner/page";
import TimeLinePage from "./timeline/page";
import StatsPage from "./stats/page";

export default function Home() {
  return (
    <div>
      <BannerPage/>
      <TimeLinePage/>
      <StatsPage/>
    </div>
  );
}
