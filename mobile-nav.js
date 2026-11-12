(() => {
  const nav = document.querySelector("nav");
  const links = nav?.querySelector(".nav-links");
  if (!nav || !links) return;

  const toggle = document.createElement("button");
  toggle.className = "mobile-menu-toggle";
  toggle.type = "button";
  toggle.setAttribute("aria-label", "Open navigation");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-controls", "site-nav-links");
  toggle.innerHTML = '<span aria-hidden="true">☰</span>';
  links.id = "site-nav-links";
  nav.insertBefore(toggle, nav.firstChild);

  const close = document.createElement("button");
  close.className = "mobile-nav-close";
  close.type = "button";
  close.setAttribute("aria-label", "Close navigation");
  close.innerHTML = '<span aria-hidden="true">×</span>';
  links.insertBefore(close, links.firstChild);

  const backdrop = document.createElement("button");
  backdrop.className = "mobile-nav-backdrop";
  backdrop.type = "button";
  backdrop.setAttribute("aria-label", "Close navigation");
  document.body.append(backdrop);

  function setOpen(open) {
    links.classList.toggle("nav-links-active", open);
    backdrop.classList.toggle("is-visible", open);
    document.body.classList.toggle("mobile-nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    if (open) close.focus();
    else toggle.focus();
  }

  toggle.addEventListener("click", () => setOpen(true));
  close.addEventListener("click", () => setOpen(false));
  backdrop.addEventListener("click", () => setOpen(false));
  links.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && links.classList.contains("nav-links-active")) setOpen(false);
  });
})();
