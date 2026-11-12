"use client";

import {
  LayoutDashboard,
  Users,
  Briefcase,
  Building2,
  Settings,
  ClipboardPenIcon
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Jobs", icon: Briefcase },
  { name: "Applications", icon: ClipboardPenIcon,}
//   { name: "Users2", icon: Users },
//   { name: "Jobs2", icon: Briefcase },
//   { name: "Companies2", icon: Building2 },
//   { name: "Settings2", icon: Settings },
];
const elementChoosenOfSidebarFeatures = "bg-background text-sidebar-foreground"; 
const elementNotChoosenOfSidebarFeatures = "hover:bg-white/10 hover:text-white text-white/70";
export default function Sidebar() {
  const [linksIndex,setLinksIndex] = useState(0);
  return (
    <aside className="
    sm:w-[20vw]
    ">
      <h1 
      className="logo-name">
        JobHub
      </h1>

      <nav className="space-y-10 pl-5 pb-5 pt-20">
        {links.map((item,index) => {
          const Icon = item.icon;
          return (
        <Link href={index != 0?`/dashboard/${(item.name).toLowerCase()}`:"/dashboard"} 
        onClick={()=>{setLinksIndex(index);}}
              key={item.name}
              className="flex gap-3 items-center justify-end">
            <div className={`max-sm:p-3 ${linksIndex == index?"max-sm:bg-background":""} max-sm:rounded-l-full max-sm:flex-1`}>
                <Icon size={25} className={`${linksIndex==index?"max-sm:text-sidebar-foreground":"max-sm:text-sidebar-primary-foreground"} sm:text-white`} />
            </div>
            <div className={`flex-1 items-end gap-3
                px-4 py-3 rounded-l-4xl
                transition
                hidden
                sm:block
                ${linksIndex != index?elementNotChoosenOfSidebarFeatures:elementChoosenOfSidebarFeatures}
                `}>
              {item.name}
              </div>
              </Link>
          );
        })}
      </nav>
    </aside>
  );
}