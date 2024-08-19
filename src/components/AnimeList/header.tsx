import Link from "next/link";
import React from "react";

interface IHeader {
    title: string;
    linkHref: string;
    linkTitle: string;
}

const Header: React.FC<IHeader> = ({title, linkHref, linkTitle}) => {
  return (
    <div className="p-4 flex justify-between text-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <Link
        href={linkHref}
        className="md:text-xl text-md hover:underline hover:text-indigo-500 transition-all"
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default Header;
