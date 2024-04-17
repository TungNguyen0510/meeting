import { cn } from "@/lib/utils";
import React from "react";
import Icon, { svgPath } from "@/components/Icon";

interface HomeCardProps {
  icon: string;
  title: string;
  des: string;
  className?: string;
  handleClick?: () => void;
}
const HomeCard = ({
  icon,
  title,
  des,
  className,
  handleClick,
}: HomeCardProps) => {
  return (
    <div
      className={cn(
        "px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className="glassmorphism flex items-center justify-center size-12 rounded-[10px]">
        <Icon name={icon as keyof typeof svgPath} />
      </div>
      <div className="flex flex-col gap-2 text-white">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{des}</p>
      </div>
    </div>
  );
};

export default HomeCard;
