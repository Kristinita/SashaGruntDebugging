/*
@Author: Kristinita
@Date: 2023-12-07 10:46:44
@Last Modified by: Kristinita
@Last Modified time: 2025-02-20 19:35:32
*/
//###############
// Bulma navbar #
//###############
/*
[OVERVIEW] Bulma navbar:
https://bulma.io/documentation/components/navbar/

[INFO] I use hoverable menu expanding on landscape screens
and toggable for portrait screens.

[INFO] If hoverable — the dropdown menu will open/close on hover on desktop devices and on tap on mobile.
Else toggable — dropdown menu will need to be manually opened/closed by clicking on desktop devices
and tapping on mobile.

[INFO] If toggable for landscape orientation,
click required to close dropdown menu:
https://i.imgur.com/8dVbsTC.png
*/
/*
[INFO] Open menu on mobile devices by tap/click on burger button:
https://bulma.io/documentation/components/navbar/#navbar-menu

[REQUIRED] Comma before functions calling.
*/
document.addEventListener("DOMContentLoaded", () => {
  var kiraElement, kiraMenu;
  // [INFO] Get all “navbar-burger” elements and add a click event on each of them:
  kiraElement = document.querySelector(".navbar-burger");
  kiraMenu = document.querySelector(".navbar-menu");
  return kiraElement.addEventListener("click", () => {
    // [INFO] Toggle the “is-active” class on both the “navbar-burger” and the “navbar-menu”
    kiraElement.classList.toggle("is-active");
    return kiraMenu.classList.toggle("is-active");
  });
});

/*
[INFO] Toggle dropdown menu by click:
https://github.com/jgthms/bulma/issues/1567#issue-284766970
https://codepen.io/tanmaydas/pen/dKbBQK
*/
/* eslint-disable unicorn/no-array-for-each --

[NOTE] I haven’t found a completely valid way in ESLint and Unicorn
on how I can use functions inside loops in CoffeeScript.
I selected “forEach()” solution with disabling Unicorn warning:
https://stackoverflow.com/q/78045471/5951529
*/
document.querySelectorAll(".navbar-link").forEach((navbarLink) => navbarLink.addEventListener("click", () => navbarLink.nextElementSibling.classList.toggle("is-hidden-portrait")));

/* eslint-enable unicorn/no-array-for-each */

//# sourceMappingURL=bulma-navbar.js.map
