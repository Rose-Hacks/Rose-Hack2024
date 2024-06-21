import Image from "next/image";
import Link from "next/link";
import building from "../../../../public/svg/building.svg";
import blackBuilding from "../../../../public/svg/blackbuilding.svg";
import Content from "./Content.jsx";
import LandingCircle from "./LandingCircle";

const Landing = () => {
  return (
    <div className="w-full relative overflow-hidden min-h-[90vh] md:min-h-screen flex items-center justify-center">
      <Link
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
        target="_blank"
        rel="noopener noreferrer"
        className="right-3 lg:right-10 top-0 z-1 w-12 md:w-28 cursor-pointer absolute"
      >
        <Image
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
          alt="Major League Hacking 2024 Hackathon Season"
          className="w-full cursor-pointer"
          width={100}
          height={100}
        />
      </Link>
      <Image
        src={building}
        alt="building"
        className="absolute w-full opacity-25 bottom-0 h-3/4 md:h-full object-cover"
      />
      <LandingCircle />
      <Image
        src={blackBuilding}
        alt="building"
        className="absolute w-full bottom-0 h-3/4 md:h-full object-cover"
      />
      <Content />
    </div>
  );
};

export default Landing;
