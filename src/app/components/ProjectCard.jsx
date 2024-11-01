import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  technos,
  onClick,
}) => {
  return (
    // <div>
    //   <div
    //     className="h-52 md:h-72 rounded-t-xl relative group"
    //     style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
    //   >
    //     <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
    //       <Link
    //         href={gitUrl}
    //         className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
    //       >
    //         <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
    //       </Link>
    //       <Link
    //         href={previewUrl}
    //         className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
    //       >
    //         <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
    //     <h5 className="text-xl font-semibold mb-2">{title}</h5>
    //     <p className="text-[#ADB7BE]">{description}</p>
    //   </div>
    // </div>
    <div
      className=" max-w-7xl mx-auto px-4 w-[100%]  hover:cursor-pointer sm:h-300px"
      onClick={onClick}
    >
      <WobbleCard containerClassName="sm:h-300px lg:col-span-2 md:h-[80%] bg-gray-800 lg:min-h-[300px]">
        <div className="max-w-xs">
          <h2 className="w-[450px] text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
            {title}
          </h2>
          <p className="mt-2 text-left md:w-[200px]  text-base/6 text-neutral-200">
            {description}
          </p>

          {/* <div className="flex flex-row">
          <Link
            href={gitUrl}
            className="h-10 w-10 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-10 w-10 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          </div> */}

          <div className="flex flex-row gap-1 justify-center flex-wrap fixed md:w-[200px] mb-4">
            {technos.map((techno, index) => (
              <p
                key={`${techno}-${index}`} // Add a unique key here
                className="flex text-[10px] flex-row rounded-full bg-gray-800 p-2 mt-2"
              >
                {techno}
              </p>
            ))}
          </div>
        </div>
        <Image
          src={imgUrl}
          width={350}
          height={200}
          alt="linear demo image"
          className="absolute  md:-bottom-4 md:-right-[10%]  hidden md:block lg:-bot-3  grayscale-2 filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
};

export default ProjectCard;
