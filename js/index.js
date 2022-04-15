// The application lives here
App = {}
App.handleClick = function() {
    // Only apply when the hamburger icon is visible i.e on smaller screens
    if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) <= 575) {
        const navList = document.getElementsByClassName("nav-list")[0];
        navList.classList.toggle("expand");
        const body = document.getElementsByTagName("body")[0];
        body.classList.toggle('bd-overflow');
      }
  }

App.addHandleClickEventListener = function() {
    // Add click event listener to navigation and hamburger icon
    const navigationEventListener = document.getElementById("navigation");
    const hamburgerButtonEventListener = document.getElementById("hamburger-button");
    navigationEventListener.addEventListener("click", App.handleClick, false);
    hamburgerButtonEventListener.addEventListener("click", App.handleClick, false);
}

App.setCopyrightDate = function() {
    // Set the year automatically
    let time_div = document.getElementById("copyright-date");
    time_div.textContent = new Date().getFullYear();
}

App.setCopyrightDate()
App.addHandleClickEventListener()