"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Course1</HoveredLink>
            <HoveredLink href="/individual">Course2</HoveredLink>
            <HoveredLink href="/team">Course3</HoveredLink>
            <HoveredLink href="/enterprise">Course4</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
export default Navbar