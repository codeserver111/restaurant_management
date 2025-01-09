"use client";
import React, { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={cn(
          "fixed top-4 inset-x-0 mx-auto max-w-2xl rounded-full border z-50",
          className
        )}
      >
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute right-4 top-3 p-2 text-white"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-4 px-8 py-3">
          {navItems.map((item, idx) => (
            <Link
              key={`nav-${idx}`}
              href={item.link}
              className={cn(
                "relative px-4 py-2 rounded-full transition-all duration-300",
                "text-sm font-medium text-neutral-100 hover:text-white",
                pathname === item.link && "text-white bg-white/20"
              )}
            >
              <div className="flex items-center space-x-2">
                {item.icon}
                <span>{item.name}</span>
              </div>
              {pathname === item.link && (
                <motion.div
                  layoutId="navbar-active"
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full -z-10"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden flex flex-col space-y-2 px-4 py-3"
            >
              {navItems.map((item, idx) => (
                <Link
                  key={`nav-mobile-${idx}`}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-2 rounded-full transition-all duration-300",
                    "text-sm font-medium text-neutral-100 hover:text-white",
                    pathname === item.link && "text-white bg-white/20"
                  )}
                >
                  <div className="flex items-center space-x-2">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
