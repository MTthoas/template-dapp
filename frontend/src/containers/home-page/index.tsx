"use client";
import React from "react";
import { ModeToggle } from "@/components/modeToggle";

export default function HomePage() {
  return (
    <div className="flex flex-col w-1/3">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        <span className="font-bold text-6xl">Welcome </span>to the
        <br />
        <span className="font-bold underline text-6xl"> MTthoas</span> Template
      </p>
      <div className="flex justify-center mt-8">
        <ModeToggle />
      </div>
    </div>
  );
}
