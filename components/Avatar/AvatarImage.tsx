import Image from "next/image";

export type AvatarImageProps = {
  src: string;
  alt?: string;
};

const AvatarImage = ({ src, alt = "" }: AvatarImageProps) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        className="rounded-full"
        width={100}
        height={100}
      />
    </div>
  );
};

export default AvatarImage;
