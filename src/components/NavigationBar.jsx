import React from "react";
import Link from "next/link";
import NavItems from "./NavItems";
import NavigationBarMobile from "./NavigationBarMobile";

export default function NavigationBar() {
  return (
    <div className="flex p-4 flex-row justify-between items-center shadow-md">
      <Link href="/" className="font-bold text-xl uppercase">Peepoye Network</Link>
      <div className="hidden lg:flex flex-row gap-4 justify-between">
        <NavItems />
      </div>
      <div className="flex lg:hidden">
        <NavigationBarMobile />
      </div>
    </div>
  )
}
