import Link from "next/link";
import React, { ReactNode } from "react";

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = ({}) => {
  return (
    <header className="bg-indigo-500">
        <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
            <Link href="/" className="font-bold text-white text-2xl">PHIANIMELIST</Link>
            <input type="text" placeholder="Search anime ..." />
        </div>
    </header>
  );
};

export default Navbar;
