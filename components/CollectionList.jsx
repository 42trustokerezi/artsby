import Link from "next/link";
import React from "react";

const CollectionList = () => {
  return (
    <section className="flex justify-between mt-10">
      <div className="w-full">&nbsp;</div>
      <div className="flex w-full">
        <div className="w-full">
          <h1>BEST AUCTION COLLECTIONS</h1>
        </div>
        <div className="w-full flex justify-center">
          <Link href="">buy art</Link>
        </div>
      </div>
      <span></span>
    </section>
  );
};

export default CollectionList;
