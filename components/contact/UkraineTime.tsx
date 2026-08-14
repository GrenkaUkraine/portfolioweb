"use client";

import Text from "@/components/ui/Text";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function UkraineTime() {
  const [timeState, setTimeState] = useState<{
    time: string;
    offset: string;
  } | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const timeFormatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Kyiv",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      const timeZoneFormatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Europe/Kyiv",
        timeZoneName: "shortOffset",
      });

      const timeStr = timeFormatter.format(now);
      const parts = timeZoneFormatter.formatToParts(now);
      const tzPart =
        parts.find((p) => p.type === "timeZoneName")?.value || "UTC+3";

      const formattedOffset = tzPart.replace("GMT", "UTC");

      setTimeState({ time: timeStr, offset: formattedOffset });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeChars = timeState
    ? timeState.time.split("")
    : ["-", "-", ":", "-", "-"];

  return (
    <div className="hidden md:flex flex-col gap-3 items-end">
      <Text variant="cards-description" color="muted">
        I&#39;m in{" "}
        <b className="text-fg">
          Ukraine ({timeState ? timeState.offset : "UTC+3"})
        </b>
      </Text>
      <div className="flex items-center overflow-hidden tabular-nums">
        {timeChars.map((char, index) => (
          <div
            key={index}
            className="relative overflow-hidden flex justify-center"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={char}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 30,
                }}
                className="inline-block"
              >
                <Text variant="h1">{char}</Text>
              </motion.span>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
