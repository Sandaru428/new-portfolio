"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";
import { Tabs } from "./Tabs";

export function TextReveal() {
  return (
    <div className="flex items-center justify-center h-full rounded-2xl w-full">
      <TextRevealCard
        text="React, Next.js Developer"
        revealText="Welcome to My Portfolio"
      >
        <div className="absolute bottom-8 left-8 right-8 z-100">
          <Tabs />
        </div>
      </TextRevealCard>
    </div>
  );
}
