import React, {useState, useEffect} from "react";
import {Box, Typography} from "@mui/material";
import Link from "next/link";

const Links = [
  {link: "#home", title: "Profile"},
  {link: "#awards", title: "Awards"},
  {link: "#events", title: "Events"},
  {link: "#special-program", title: "Special Program"},
  {link: "#get-quote", title: "Get Quote"},
];

export default function MainCoachNav() {
  const [currentHash, setCurrentHash] = useState<string>("");

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".scroll-section");
    const handleInnerScroll = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      console.log("inner scrollTop:", target.scrollTop);
      console.log("is Visible?:", target.scrollTop > 50);
      setIsVisible(target.scrollTop > 50);
    };

    sections.forEach((sec) =>
      sec.addEventListener("scroll", handleInnerScroll, {passive: true})
    );
    return () =>
      sections.forEach((sec) =>
        sec.removeEventListener("scroll", handleInnerScroll)
      );
  }, []);

  useEffect(() => {
    // On mount, read whatever the URL’s hash is (default to "#home" if empty)
    const initialHash = window.location.hash || "#home";
    setCurrentHash(initialHash);

    // If someone edits the URL manually or uses Back/Forward, update state
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || "#home");
    };
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  const isOnHome = currentHash === "#home" || currentHash === "";
  const isOnOther =
    currentHash === "#events" ||
    currentHash === "#special-program" ||
    currentHash === "#get-quote";

  return (
    <Box
      sx={{
        backgroundColor: isVisible ? "white" : "transparent",
        p: 5,
        display: "flex",
        gap: 7,
        width: "100%",
        position: "fixed",
        zIndex: 99999,
        transition: "background-color 0.3s ease-in-out",
      }}>
      {isOnHome && (
        <Typography
          component={Link}
          href="/"
          sx={{
            fontFamily: "Outfit",
            fontSize: "16px",
            fontWeight: 300,
            color: "#737373",
            cursor: "pointer",
            textDecoration: "none",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              textDecoration: "underline",
            },
          }}>
          Home
        </Typography>
      )}

      {Links.map((linkObj, idx) => {
        if (linkObj.link === "#home" && isOnHome) {
          return null;
        }

        const color = isOnHome
          ? "#737373"
          : isOnOther && currentHash === linkObj.link
          ? "#132D4C"
          : isOnOther
          ? "#737373"
          : currentHash === "#awards" && isVisible
          ? "black"
          : "#ffffff";

        return (
          <a
            key={idx}
            href={linkObj.link}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();

              const targetId: string = linkObj.link.substring(1);
              const el: HTMLElement | null = document.getElementById(targetId);
              if (el) {
                // Smooth‐scroll to that section
                el.scrollIntoView({behavior: "smooth"});
              }

              // Update the URL’s hash without another “jump”
              history.replaceState({}, "", linkObj.link);

              // Update React state so color‐logic (and hiding/showing Profile) runs immediately
              setCurrentHash(linkObj.link);
            }}
            style={{
              fontFamily: "Outfit",
              fontSize: "16px",
              fontWeight: 300,
              color,
              textDecoration:
                currentHash === linkObj.link ? "underline" : "none",
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
            }}>
            <Typography
              component="span"
              sx={{"&:hover": {textDecoration: "underline"}}}>
              {linkObj.title}
            </Typography>
          </a>
        );
      })}
    </Box>
  );
}
