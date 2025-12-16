import Image from "../components/Image";

interface AvatarProps {
  imageUrl?: string;
  altText?: string;
  size?: "sm" | "md";
  fallbackText?: string;
  className?: string;
}

const AVATAR_CONFIG = {
  sm: { size: 102, textClass: "text-4xl" },
  md: { size: 204, textClass: "text-6xl" },
};

const Avatar = ({
  imageUrl,
  altText,
  size,
  fallbackText,
  className,
}: AvatarProps) => {
  const config = AVATAR_CONFIG[size || "md"];
  const initial = fallbackText?.charAt(0).toUpperCase() || "?";

  return (
    <div
      className={`rounded-full bg-gradient-club flex items-center justify-center ${
        className || ""
      }`}
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          width={config.size}
          height={config.size}
          alt={altText || "Avatar"}
        />
      ) : (
        <span
          className={`flex justify-center items-center text-white ${config.textClass} font-bold`}
          style={{ width: `${config.size}px`, height: `${config.size}px` }}
        >
          {initial}
        </span>
      )}
    </div>
  );
};

export default Avatar;
