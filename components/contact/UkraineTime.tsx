"use client";

import Text from "@/components/ui/Text";
import { useEffect, useState } from "react";

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

  return (
    <div className="flex flex-col gap-3 items-end">
      <Text variant="cards-description" color="muted">
        I&#39;m in{" "}
        <b className="text-fg">
          Ukraine ({timeState ? timeState.offset : "UTC+3"})
        </b>
      </Text>
      <Text variant="h1">{timeState ? timeState.time : "--:--"}</Text>
    </div>
  );
}
