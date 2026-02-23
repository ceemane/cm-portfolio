"use client";

import { useState, useEffect } from "react";
import { RetroChomper } from "./RetroChomper";
import { PixelJumper } from "./PixelJumper";
import { SpeedRunner } from "./SpeedRunner";
import { SpaceDefender } from "./SpaceDefender";
import { PixelGhost } from "./PixelGhost";
import { DinoCompanion } from "./DinoCompanion";
import { BlockDrop } from "./BlockDrop";
import { RoadHopper } from "./RoadHopper";
import { PaddleBounce } from "./PaddleBounce";
import { QuestHero } from "./QuestHero";
import { BarrelClimber } from "./BarrelClimber";

const artworks = [
  RetroChomper,
  PixelJumper,
  SpeedRunner,
  SpaceDefender,
  PixelGhost,
  DinoCompanion,
  BlockDrop,
  RoadHopper,
  PaddleBounce,
  QuestHero,
  BarrelClimber,
];

export function HeroArt() {
  const [ArtComponent, setArtComponent] = useState<typeof artworks[number] | null>(null);

  useEffect(() => {
    const index = Math.floor(Math.random() * artworks.length);
    setArtComponent(() => artworks[index]);
  }, []);

  if (!ArtComponent) return <div className="h-80 sm:h-[28rem]" />;

  return (
    <div className="h-80 sm:h-[28rem] w-full max-w-lg mx-auto opacity-80">
      <ArtComponent />
    </div>
  );
}
