// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.

const balloon = document.getElementById("balloon");

let size = 20;
balloon.style.fontSize = size + 'px';

function changeBalloonSize(increase) {
    size = increase ? Math.min(size + 10, 200) : Math.max(size - 10, 0);
    balloon.textContent = size >= 200 ? '💥' : '🎈';
    balloon.style.fontSize = size + 'px';
    if (size >= 200) {
        window.removeEventListener('keydown', handleKey);
    }
}
function handleKey(event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        changeBalloonSize(event.key === "ArrowUp");
    }
}
window.addEventListener('keydown', handleKey);

// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it

document.addEventListener("DOMContentLoaded", function () {
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(function (tabContent) {
        tabContent.style.display = "none";
    });
    const tabLinks = document.querySelectorAll("#tabbed-layout ul li a");
    tabLinks.forEach(function (tabLink) {
        tabLink.addEventListener("click", function (event) {
            event.preventDefault();
            const targetTabID = this.getAttribute("href").substr(1);
            tabContents.forEach(function (tabContent) {
                tabContent.style.display = "none";
            });
            document.getElementById(targetTabID).style.display = "block";
        });
    });
    const defaultTab = document.querySelector("#tab1");
    defaultTab.style.display = "block";
});