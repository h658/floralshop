"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  
} from "@/components/ui/navigation-menu"

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Contact
            </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-4  md:w-[100px] lg:w-[200px] p-6">
             
              <ListItem href="" title="Call us">
                +977 9811706633
              </ListItem>
              <ListItem href="" title="Email">
                bloom@342
              </ListItem>
              <ListItem href="" title="Visit!" >
               www.bloom.com.np
              </ListItem>

             </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef(function (
    { className, title, children, ...props },
    ref
  ) {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
            
              "block select-none rounded-md pr-2 leading-normal  outline-none hover:bg-pink-200 hover:text-black ",
            
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-1 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem";
  