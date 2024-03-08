import Image from "next/image";
import ravenclaw from "../../public/ravenclaw.png";
import Challenges from "./challenges";

export default function Home() {
  return (
    <main>
      <div className="w-full min-h-[100vh] flex flex-row bg-[#0E1A33] ">
        <Challenges />
        <div className="flex items-center">
          <Image alt="ravenclaw" src={ravenclaw} width={400} />
        </div>
      </div>
    </main>
  );
}
