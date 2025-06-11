interface LastClickTimeRef {
  current: number;
}

/**
 * Handles anchor click events.
 * @param {MouseEvent} e - The native click event.
 * @param {LastClickTimeRef} lastClickTimeRef - A ref object tracking the last click time.
 */
export const handleAnchorClick = (
  e: MouseEvent,
  lastClickTimeRef: LastClickTimeRef
): void => {
  const now = Date.now();
  if (now - lastClickTimeRef.current < 1500) {
    e.preventDefault();
    return;
  }
  lastClickTimeRef.current = now;

  // Cast currentTarget to HTMLAnchorElement so we can safely call getAttribute("href")
  const anchor = e.currentTarget as HTMLAnchorElement;
  const href = anchor.getAttribute("href");

  if (href && href.startsWith("#")) {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({behavior: "smooth", inline: "start"});
      window.history.pushState(null, "", href);
    }
  }
};

/**
 * Handles the popstate event when the user navigates to a section.
 * If window.location.hash is set and the element exists, scroll it into view.
 */
export const handlePopState = () => {
  const hash = window.location.hash;
  if (hash) {
    const sectionId = hash.substring(1);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({behavior: "smooth", inline: "start"});
    }
  }
};
