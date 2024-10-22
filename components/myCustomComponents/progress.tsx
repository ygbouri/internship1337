"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(66);

  // React.useEffect(() => {
  //   const timer = setTimeout(() => setProgress(66), 500);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <Progress
      value={progress}
      className="w-[70%] max-xl:w-full h-1"
      color={"#25BF94"}
    />
  );
}
