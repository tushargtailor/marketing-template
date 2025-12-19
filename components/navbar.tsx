import React from "react";
import { Logo } from "./logo";
import { Container } from "./container";
import Link from "next/link";
import { Button } from "./ui/button";

export const Navbar = () => {
  const navLinks = [
    { title: "Features", href: "/features" },
    { title: "Product", href: "/product" },
    { title: "Pricing", href: "/pricing" },
    { title: "Socials", href: "/socials" },
  ];
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <Container className="py-4 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-sm text-neutral-600 dark:text-neutral-400 font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm px-4 inline-block py-2 rounded-md text-neutral-600 dark:text-neutral-400 font-medium"
          >
            Login
          </Link>
          <Button>Signup</Button>
        </div>
      </Container>
    </div>
  );
};
