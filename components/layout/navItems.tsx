"use client";

import React, {useEffect, useState} from "react";
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
    return pathname === path ? "rounded-full bg-gray-200 drop-shadow" : "";
  };

  return (
    <div className="flex space-x-2">
      <Link
        href="/"
        passHref
        className={`flex space-x-2 items-center px-2 py-2 ${isActive(
          "/"
        )} hover:rounded-full hover:bg-gray-200 hover:drop-shadow`}
      >
        <BedIcon />
        <Balancer>Stays</Balancer>
      </Link>

      <Link
        href="/contact-us"
        passHref
        className={`flex space-x-2 items-center px-2 py-2 ${isActive(
          "/contact-us"
        )} hover:rounded-full hover:bg-gray-200 hover:drop-shadow`}
      >
        <Attractions />
        <Balancer>Contact Us</Balancer>
      </Link>

      <Link
        href="/about-us"
        passHref
        className={`flex space-x-2 items-center px-2 py-2 ${isActive(
          "/about-us"
        )} hover:rounded-full hover:bg-gray-200 hover:drop-shadow`}
      >
        <PlaneIcon />
        <Balancer>About Us</Balancer>
      </Link>
    </div>
  );
};

export default NavItems;
