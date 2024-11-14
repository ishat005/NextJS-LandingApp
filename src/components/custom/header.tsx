import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { ShoppingBag, Phone } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white">
      <nav className="container py-5 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/pizzeria.png" alt="New Image" width={220} height={250} />
          <Select>
            <SelectTrigger className="w-[180px] focus:ring-0">
              <SelectValue placeholder="Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vancouver">Vancouver</SelectItem>
              <SelectItem value="ontario">Ontario</SelectItem>
              <SelectItem value="quebec">Quebec</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <div className="flex items-center gap-4">
            <ul className="flex items-center font-medium space-x-4">
              <li>
                <Link className="hover:text-primary" href="/">
                  Menu
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/">
                  Orders
                </Link>
              </li>
            </ul>

            <div className="relative">
              <Link href="/cart">
                <ShoppingBag className="hover:text-primary" />
              </Link>

              <span className="absolute -top-4 -right-5 h-6 w-6 flex items-center justify-center rounded-full bg-primary font-bold text-white">
                3
              </span>
            </div>
            <div className="flex items-center ml-12">
              <Phone />
              <span>+1778-xxx-xxxx</span>
            </div>

            <Button size="sm">Logout</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
