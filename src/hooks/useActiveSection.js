import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently in view using IntersectionObserver.
 * Drives the active-key mapping in the nav, chassis status bar, and dot rail
 * as the user scrolls the page.
 *
 * @param {string[]} ids  section ids in document order
 * @returns {string} the active section id
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
