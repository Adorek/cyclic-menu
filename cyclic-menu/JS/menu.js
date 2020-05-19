"use strict"(
  (function () {
    // All menu items we'd like to add
    const navItems = [
      { href: "#Google", text: "Google" },
      { href: "#Bing", text: "Bing" },
      { href: "#StackOverflow", text: "StackOverflow" },
    ];

    // A few variables for use later
    var navElem = document.createElement("nav"),
      navList = document.createElement("ul"),
      navItem,
      navLink;

    navList.classList.add("nav");

    navElem.appendChild(navList);

    // Cycle over each nav item
    var i;
    for (i = 0; i < navItems.length; i += 1) {
      // Create a fresh list item, and anchor
      navItem = document.createElement("li");
      navLink = document.createElement("a");

      // Set properties on anchor
      navLink.href = navItems[i].href;
      navLink.innerHTML = navItems[i].text;

      // Add anchor to list item, and list item to list
      navItem.appendChild(navLink);
      navList.appendChild(navItem);
    }

    var listItems = navList.children;

    var currentListElement = 0;

    // Set first list item as current
    listItems[currentListElement].className = "active";

    // Add list to body (or anywhere else)
    window.onload = function () {
      document.body.appendChild(navElem);
      // Make first element focused
      navList.childNodes[currentListElement].firstChild.focus();
    };

    document.onkeydown = function (e) {
      switch (e.which) {
        case 39: // right arrow pressed
          console.log("right arrow pressed");
          listItems[currentListElement].classList.remove("active");
          currentListElement =
            currentListElement < listItems.length - 1
              ? ++currentListElement
              : 0; // Increase the counter
          listItems[currentListElement].classList.add("active");
          navList.childNodes[currentListElement].firstChild.focus();
          break;

        case 37: // left arrow pressed
          console.log("left arrow pressed");
          listItems[currentListElement].classList.remove("active");
          currentListElement =
            currentListElement < 1
              ? (currentListElement = listItems.length - 1)
              : --currentListElement; // Decrease the counter
          listItems[currentListElement].classList.add("active");
          navList.childNodes[currentListElement].lastChild.focus();
          break;

        case 13: // enter pressed
          console.log("Enter pressed");
          event.preventDefault();
          navList.childNodes[currentListElement].firstChild.click();
          break;

        default:
          return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
    };
  })()
);
