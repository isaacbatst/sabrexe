import Image from "next/image";
import ravenclaw from "../../public/ravenclaw.png";
import Challenges from "./challenges";

export default function Home() {
  return (
    <main>
      <div className="w-full min-h-[100vh] flex flex-row bg-black ">
        <Challenges />
        <div className="flex items-center px-20">
          <Image alt="ravenclaw" src={ravenclaw} width={400} />
        </div>
      </div>
    </main>
  );
}
