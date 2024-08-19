import Image from "next/image";
import React from "react";

interface AnimeListProps {
    image: string;
    title: string;
}

const AnimeList: React.FC<AnimeListProps> = ({title, image}) => {
  return (
    <div className="bg-indigo-50">
      <Image
        src={image}
        alt="..."
        width={600}
        height={600}
      />
      <h3>{title}</h3>
    </div>
  );
};

export default AnimeList;
