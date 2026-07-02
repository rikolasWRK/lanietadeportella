/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Smoothly scrolls to a section by id. Because the app uses HashRouter, plain
 * in-page `#anchor` links collide with client-side routing — so section
 * navigation is handled programmatically instead.
 *
 * If the user is on a sub-page (e.g. /faq), it first returns Home and then
 * scrolls once the section has mounted.
 */
export function useSectionNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return useCallback(
    (sectionId: string) => {
      const scroll = () => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      };

      if (pathname !== "/") {
        navigate("/");
        // Give Home a tick to mount before scrolling to the target section.
        window.setTimeout(scroll, 80);
      } else {
        scroll();
      }
    },
    [navigate, pathname],
  );
}
