(() => {
  // ===== Drawer helper (works for both nav variants if present) =====
  const wireDrawer = (root, toggleSel, drawerSel) => {
    const toggle = root.querySelector(toggleSel);
    const drawer = root.querySelector(drawerSel);
    if (!toggle || !drawer) return null;

    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      drawer.hidden = !open;
    };

    setOpen(false);

    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      setOpen(open);
    });

    drawer.addEventListener("click", (e) => {
      if (e.target.closest("a")) setOpen(false);
    });

    return { setOpen };
  };

  // Wire both (safe)
  const acNav = document.querySelector(".ac-globalnav");
  const idealNav = document.querySelector(".ideal-nav");

  const ac = acNav ? wireDrawer(acNav, ".ac-globalnav-toggle", ".ac-globalnav-drawer") : null;
  const ideal = idealNav ? wireDrawer(idealNav, ".ideal-nav__toggle", ".ideal-nav__drawer") : null;

  // ===== Search Overlay =====
  const searchOverlay = document.querySelector(".ideal-search");
  const searchInput = document.querySelector(".ideal-search__input");
  const searchBtn = document.querySelector(".ideal-nav__iconBtn");
  const drawerSearchBtn = document.querySelector(".ideal-nav__drawerSearch");

  const isSearchOpen = () => searchOverlay && searchOverlay.hidden === false;

  const openSearch = () => {
    if (!searchOverlay || !searchInput) return;

    // close drawers when opening search
    if (ac) ac.setOpen(false);
    if (ideal) ideal.setOpen(false);

    searchOverlay.hidden = false;
    searchOverlay.setAttribute("aria-hidden", "false");

    // trigger animation
    requestAnimationFrame(() => searchOverlay.classList.add("is-open"));

    // lock scroll
    document.documentElement.style.overflow = "hidden";

    // focus input
    setTimeout(() => searchInput.focus(), 30);
  };

  const closeSearch = () => {
    if (!searchOverlay) return;

    searchOverlay.classList.remove("is-open");
    searchOverlay.setAttribute("aria-hidden", "true");

    // unlock scroll
    document.documentElement.style.overflow = "";

    // wait for transition then hide
    setTimeout(() => {
      if (searchOverlay) searchOverlay.hidden = true;
    }, 160);
  };

  if (searchBtn) searchBtn.addEventListener("click", openSearch);
  if (drawerSearchBtn) drawerSearchBtn.addEventListener("click", openSearch);

  if (searchOverlay) {
    // click backdrop or close button (data-close="search")
    searchOverlay.addEventListener("click", (e) => {
      if (e.target.closest('[data-close="search"]')) closeSearch();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;

    // close search first
    if (isSearchOpen()) {
      closeSearch();
      return;
    }

    // otherwise close drawers
    if (ac) ac.setOpen(false);
    if (ideal) ideal.setOpen(false);
  });
})();

//Year update
const yearEl = document.getElementById("idealYear");
if (yearEl) yearEl.textContent = new Date().getFullYear();
