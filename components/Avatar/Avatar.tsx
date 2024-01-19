import classNames from "classnames";
import React from "react";
import AvatarIcon from "./AvatarIcon";
import AvatarImage from "./AvatarImage";

export type AvatarProps = {
  size?: "xs" | "sm" | "md" | "lg";
  image?: string;
  alt?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const avatarSizeMap = {
  xs: "w-5 h-5",
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-9 h-9",
};

const Avatar = ({
  size = "xs",
  className,
  image,
  alt,
  ...rest
}: AvatarProps) => {
  return (
    <div
      className={classNames(
        "relative rounded-full bg-slate-100 flex items-center justify-center text-slate-400",
        avatarSizeMap[size],
        className
      )}
      {...rest}
    >
      {image ? <AvatarImage src={image} alt={alt} /> : <AvatarIcon />}
    </div>
  );
};

export default Avatar;
