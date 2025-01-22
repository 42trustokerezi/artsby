"use client";
import React from "react";
import { useState, useEffect } from "react";
import { signIn, signOut, getProviders, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setProvider();
  }, []);

  return (
    <section className="px-10 min-w-screen h-[80px] flex justify-between items-center">
      <form className="w-[250px] items-center">
        <input
          placeholder="Search by artist, gallery, style ..."
          type="text"
          //   value={searchText}
          className="border border-black w-full px-2 py-2 rounded-sm text-sm"
        />
      </form>
      <h1 className="text-4xl font-semibold">Artsby</h1>
      {session?.user ? (
        <div>
          <Link href="/profile" className="">
            My Profile
          </Link>
        </div>
      ) : (
        <div>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                className="border rounded-md px-5 py-2 bg-black text-white"
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
              >
                Sign in
              </button>
            ))}
        </div>
      )}
    </section>
  );
};

export default Navbar;
