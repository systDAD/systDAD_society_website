document.getElementById("navlist-aside-toggle").addEventListener("click", openSideBar);

function openSideBar() {
    console.log("click successfull")
    const sideBar = document.getElementById("navlist-sideBar");

    if(sideBar.style.display!="flex"){
        // console.log("click successfull")



        sideBar.style.display="flex"
    }
    else{
        // console.log("click successfull")

        sideBar.style.display="none"
    }
}