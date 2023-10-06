import Image from "next/image";

export const Logo = () => {
  return (
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
  );
};
