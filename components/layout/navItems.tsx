"use client";

import React, { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { BedIcon } from "@/components/shared/icons";
import { PlaneIcon } from "@/components/shared/icons";
import { Attractions } from "@/components/shared/icons";

interface NavItemsProps {
  pathname: string;
}

const NavItems: React.FC<NavItemsProps> = ({ pathname }) => {
  const isActive = (path: string) => {
    return pathname === path ? "rounded-full bg-gray-200 drop-shadow " : "";
  };

  const linkStyles = "flex items-center px-2 py-1 space-x-1 md:px-3 md:py-1 md:space-x-2"; // Adjust the padding and spacing as needed

  return (
    <div className="flex flex-wrap">
      <Link
        href="/"
        passHref
        className={`mb-1 ${linkStyles} ${isActive("/")}`}
      >
        <BedIcon />
        <Balancer>Places</Balancer>
      </Link>

      <Link
        href="/contact-us"
        passHref
        className={`mb-1 ${linkStyles} ${isActive("/contact-us")}`}
      >
        <Attractions />
        <Balancer>Contact Us</Balancer>
      </Link>

      <Link
        href="/about-us"
        passHref
        className={`mb-1 ${linkStyles} ${isActive("/about-us")}`}
      >
        <PlaneIcon />
        <Balancer>About Us</Balancer>
      </Link>
    </div>
  );
};

export default NavItems;
