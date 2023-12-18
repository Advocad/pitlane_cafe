import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center">
        <Image
          src="/icons/logo-pitlane.svg"
          alt={"Pitlane Cafe"}
          width={70}
          height={70}
        />
        <div className="text-lg font-extrabold">
          Pitlane <br /> Cafe
        </div>
      </div>
    </Link>
  );
};
