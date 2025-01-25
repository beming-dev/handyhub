import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="text-black py-4 absolute top-0">
      <div className="font-extrabold container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold">
          HandyHub
        </Link>
      </div>
    </header>
  );
};

export default Header;
