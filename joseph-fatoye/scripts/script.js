let toggleMenu = false

let toggleMenuBar = function () {
    let getMenuIcon = document.body.querySelector("#hero #menu #menu-body") 
    let getMenuBar = document.body.querySelector("#hero #menu-container") 
    let getMenuBarList = document.body.querySelector("#hero #menu-container #nav-list") 

    if (toggleMenu === false) {
        getMenuIcon.style.transform = "rotate(90deg)";
        getMenuBar.style.display = "flex";
        getMenuBar.style.width = "150px";
        getMenuBar.style.height = "260px";

        getMenuBarList.style.height = "58.5px";
        getMenuBarList.style.height = "135px";

        toggleMenu = true;
    }
    else if (toggleMenu === true) {
        getMenuIcon.style.transform = "rotate(0deg)";
        getMenuBar.style.display = "none";
        getMenuBar.style.width = "0";
        getMenuBar.style.height = "0";

        getMenuBarList.style.height = "0";
        getMenuBarList.style.height = "0";

        toggleMenu = false;
    }
    
}

document.body.querySelector("#hero #firstBlock #menu-body").onclick = toggleMenuBar;