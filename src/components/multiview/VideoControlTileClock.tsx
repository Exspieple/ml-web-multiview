import { useEffect, useState } from "react";

import { CalendarSync } from "lucide-react";
import { Button } from "../ui/button";

export default function VideoControlTileClock() {
  let date = getTime();
  const [timeZone, setTimeZone] = useState<string | undefined>("UTC");

  function toggleTimeZone() {
    if (timeZone == "UTC") {
      setTimeZone(undefined);
    } else {
      setTimeZone("UTC");
    }
  }

  function getTime() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => {
        setDate(new Date());
      }, 1000);

      // Cleanup interval on unmount
      return () => clearInterval(timer);
    }, []);

    return date;
  }

  return (
    <>
      <div className="font-mono text-center">
        <div className="text-xl">
          {Intl.DateTimeFormat(undefined, {
            dateStyle: "long",
            timeZone: timeZone,
          }).format(date)}
        </div>

        <div className="flex gap-3 justify-center items-center">
          <div className="text-5xl">
            {Intl.DateTimeFormat(undefined, {
              timeStyle: "long",
              timeZone: timeZone,
            }).format(date)}
          </div>
          <div onClick={toggleTimeZone}>
            <Button
              variant="outline"
              size="icon-lg"
              aria-label="Change time zone"
            >
              <CalendarSync />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}