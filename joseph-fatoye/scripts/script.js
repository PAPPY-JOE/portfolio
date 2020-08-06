let toggleMenu = false

let toggleMenuBar = function () {
    let getMenuIcon = document.body.querySelector("#hero #menu #menu-body") 
    let getMenuBar = document.body.querySelector("#hero #menu-container") 
    let getMenuBarList = document.body.querySelector("#hero #menu-container #nav-list") 
    let w = window.innerWidth

    if (toggleMenu === false) {
        getMenuIcon.style.transform = "rotate(90deg)";
        getMenuBar.style.display = "flex";

        
        getMenuBarList.style.height = "58.5px";
        getMenuBarList.style.height = "135px";

        toggleMenu = true;
    }
    else if (toggleMenu === true) {
        getMenuIcon.style.transform = "rotate(0deg)";
        getMenuBar.style.display = "none";
       

        getMenuBarList.style.height = "0";
        getMenuBarList.style.height = "0";

        toggleMenu = false;
    }
    
}

document.body.querySelector("#hero #firstBlock #menu-body").onclick = toggleMenuBar;

