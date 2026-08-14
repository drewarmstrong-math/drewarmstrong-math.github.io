// This is the single menu definition used by every page.
// Edit this list to add, remove, rename, or reorder menu links.
const menuItems = [
  { href: "me.html", label: "About Me", color: "g" },
  { href: "activity.html", label: "Activity", color: "o" },
  { href: "oldcourses.html", label: "Old Courses", color: "g" },
  { href: "310fa26.html", label: "MTH 310", color: "o", separated: true },
  { href: "510fa26.html", label: "MTH 510", color: "g" }
];

class SiteMenu extends HTMLElement {
  connectedCallback() {
    if (this.firstElementChild) return;

    const menu = document.createElement("nav");
    menu.id = "menu";
    menu.setAttribute("aria-label", "Main navigation");

    for (const item of menuItems) {
      if (item.separated) {
        const separator = document.createElement("span");
        separator.className = "menu-separator";
        separator.setAttribute("aria-hidden", "true");
        menu.append(separator);
      }

      const link = document.createElement("a");
      link.className = item.color;
      link.href = item.href;
      link.textContent = item.label;
      menu.append(link);
    }

    this.append(menu);
  }
}

customElements.define("site-menu", SiteMenu);
