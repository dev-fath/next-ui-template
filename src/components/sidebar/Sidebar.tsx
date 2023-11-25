"use client";
import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import IconBase from "@assets/icons/IconBase";
import { LogoImage } from "@assets/images";
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname();

  const [showSidebar, setShowSidebar] = useState(true);
  // Define our base class
  const className =
    "bg-black w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
  // Append class based on state of sidebar visiblity
  const appendClass = showSidebar ? " ml-0" : " ml-[-250px] md:ml-0";

  // Clickable menu items
  const MenuItem = ({
    icon,
    name,
    route,
  }: {
    icon: ReactNode;
    name: string;
    route: string;
  }) => {
    // Highlight menu item based on currently displayed route
    const colorClass =
      pathname === route ? "text-white" : "text-white/50 hover:text-white";

    return (
      <Link
        href={route}
        onClick={() => {
          setShowSidebar((oldVal) => !oldVal);
        }}
        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
      >
        <div className="text-xl flex [&>*]:mx-auto w-[30px]">{icon}</div>
        <div>{name}</div>
      </Link>
    );
  };

  // Overlay to prevent clicks in background, also serves as our close button
  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => {
        setShowSidebar((oldVal) => !oldVal);
      }}
    />
  );

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className="p-2 flex">
          <Link href="/">
            <Image src={LogoImage} alt="Company Logo" height={56} />
          </Link>
        </div>
        <div className="flex flex-col">
          <MenuItem
            name="Home"
            route="/"
            icon={
              <IconBase icon={"apple"} iconStyle={{ width: 24, height: 24 }} />
            }
          />
          <MenuItem
            name="T-Shirts"
            route="/t-shirts"
            icon={
              <IconBase icon={"apple"} iconStyle={{ width: 24, height: 24 }} />
            }
          />
          <MenuItem
            name="Hats"
            route="/hats"
            icon={
              <IconBase icon={"apple"} iconStyle={{ width: 24, height: 24 }} />
            }
          />
          <MenuItem
            name="About Us"
            route="/about"
            icon={
              <IconBase icon={"apple"} iconStyle={{ width: 24, height: 24 }} />
            }
          />
          <MenuItem
            name="Contact"
            route="/contact"
            icon={
              <IconBase icon={"apple"} iconStyle={{ width: 24, height: 24 }} />
            }
          />
        </div>
      </div>
      {showSidebar ? <ModalOverlay /> : <></>}
    </>
  );
}
