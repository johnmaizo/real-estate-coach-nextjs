"use client";

import {useEffect, useRef} from "react";

import {handleAnchorClick, handlePopState} from "@/components/utils/CoachUtils";


import "../../css/CoachMainPage.css";

import "@fontsource/outfit/300.css";
import "@fontsource/outfit";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/800.css";

import {Coach} from "@/types";

import MainCoachNav from "../utils/links/MainCoachNav";
import CoachHero from "./sections/CoachHero";
import AwardsSection from "./sections/AwardsSection";
import EventsSection from "./sections/EventsSection";
import SpecialProgramSection from "./sections/SpecialProgramSection";
import GetQuoteSection from "./sections/GetQuoteSection";

export default function MainCoachPage({data}: {data: Coach}) {
  const containerRef = useRef(null);
  const lastClickTimeRef = useRef(0);

  // Debounce anchor click navigation
  useEffect(() => {
    // Local wrapper to include the ref
    const handleClick = (e: Event) =>
      handleAnchorClick(e as MouseEvent, lastClickTimeRef);
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="DevelopersPage">
      <MainCoachNav />
      <main ref={containerRef} className="horizontal-scroll-container">
        <section id="home" className="scroll-section">
          <CoachHero data={data} />
        </section>
        <section id="awards" className="scroll-section">
          <AwardsSection
            AwardsData={data.awards.map((a) => ({
              imageUrl: a.imageURL,
              title: a.name,
            }))}
          />
        </section>
        <section id="events" className="scroll-section">
          <EventsSection />
        </section>
        <section id="special-program" className="scroll-section">
          <SpecialProgramSection />
        </section>
        <section id="get-quote" className="scroll-section">
          <GetQuoteSection />
        </section>
      </main>
    </div>
  );
}
