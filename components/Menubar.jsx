"usse client";
import React from "react";
import Link from "next/link";

const Menubar = () => {
  return (
    <section className="flex justify-between  ">
      <Link href="/current-auctions" className="border h-[50px] flex w-full items-center justify-center">
        Current auctions
      </Link>
      <Link href="/current-auctions" className="border h-[50px] flex w-full items-center justify-center">Categories</Link>
      <Link href="/current-auctions" className="border h-[50px] flex w-full items-center justify-center">Buy & Sell</Link>
      <Link href="/current-auctions" className="border h-[50px] flex w-full items-center justify-center">Upcoming auctions</Link>
      <Link href="/current-auctions" className="border h-[50px] flex w-full items-center justify-center">Past auctions</Link>
      <Link href="/current-auctions" className="border h-[50px] flex w-full items-center justify-center">News</Link>
    </section>
  );
};

export default Menubar;
