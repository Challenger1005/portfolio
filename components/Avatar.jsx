import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none absolute -bottom-62 lg:top-16 lg:right-[0%]">
      <Image
        src="/avatar.jpg"
        alt="avatar"
        width={400}
        height={300}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
