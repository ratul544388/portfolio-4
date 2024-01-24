"use client";

import { Fragment, ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface TabsProps {
  tabs: {
    label: string;
    title?: string;
    description?: string;
    content?: ReactNode;
  }[];
}

export const Tabs = ({ tabs }: TabsProps) => {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex border shadow rounded-full">
        {tabs.map((tab, index) => (
          <Button
            variant="ghost"
            onClick={() => setActive(index)}
            key={index}
            className={cn(
              "rounded-full relative",
              active && "text-white hover:bg-transparent hover:text-white"
            )}
          >
            {/* {tab} */}
            {active && (
              <motion.span
                layoutId="activeFAQ"
                className="inset-0 absolute bg-primary rounded-full -z-10"
              />
            )}
          </Button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <Fragment key={tab.label}>
          {active === index && (
            <div className="flex overflow-hidden flex-col gap-4">
              <motion.h3
                initial={{
                  x: -100,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  type: "tween",
                }}
                className="text-xl text-center font-bold"
              >
                {tab.title}
              </motion.h3>
              <motion.p
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  type: "tween",
                }}
                className="text-muted-foreground text-center text-sm"
              >
                {tab.description}
              </motion.p>
              {tab.content}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};
