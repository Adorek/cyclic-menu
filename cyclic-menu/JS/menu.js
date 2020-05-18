(function () {

    // All items we'd like to add
    var navItems = [
        {
            href: 'http://google.com',
            text: 'Google'
        },
        {
            href: 'http://bing.com',
            text: 'Bing'
        },
        {
            href: 'http://stackoverflow.com',
            text: 'StackOverflow'
        }
    ];

    // A few variables for use later
    var navElem = document.createElement("nav"),
        navList = document.createElement("ul"),
        navItem, navLink;

    navList.classList.add("nav");

    navElem.appendChild(navList);
    //

    // Cycle over each nav item
    for (var i = 0; i < navItems.length; i++) {
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

    console.log(navLink);

    var listItems = navList.children;
    console.log(listItems);

    var currentListElement = 0;

    // Set first list item as current
    listItems[currentListElement].className = "active";
    console.log(navList.childNodes[currentListElement].firstChild);
    navList.childNodes[currentListElement].lastChild.focus();

    // Add list to body (or anywhere else)
    window.onload = function () {
        document.body.appendChild(navElem);
    }


    document.onkeydown = function (e) {
        switch (e.which) {
            case 37: // left
                console.log('left');
                listItems[currentListElement].classList.remove('active');
                currentListElement = currentListElement > 0 ? --currentListElement : 0; // Decrease the counter      
                listItems[currentListElement].classList.add('active');
                navList.childNodes[currentListElement].lastChild.focus();
                break;

            case 39: // right
                console.log('right');
                listItems[currentListElement].classList.remove('active');
                currentListElement = currentListElement < listItems.length - 1 ? ++currentListElement : listItems.length - 1; // Increase counter
                listItems[currentListElement].classList.add('active');
                console.log(navItem.childNodes);
                console.log(navList.childNodes[currentListElement].firstChild);
                console.log(navLink);
                navList.childNodes[currentListElement].firstChild.focus();
                break;

            case 13: // enter
                console.log(document.getElementsByClassName('active')[0]);
                event.preventDefault();
                navList.childNodes[currentListElement].firstChild.click();
                break;

            default:
                return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    };

}());