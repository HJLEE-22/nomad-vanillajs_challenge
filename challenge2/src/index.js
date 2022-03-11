const body = document.querySelector("body");



function windowResize() {
    const width = window.innerWidth;
    if(width>600 && width<900){
        body.classList.add("cornflowerblue");
        body.classList.remove("darkorange");
        body.classList.remove("blueviolet");
    } else if(width>=900 && width<1200){
        body.classList.remove("cornflowerblue");
        body.classList.remove("darkorange");
        body.classList.add("blueviolet");
    } else if(width>=1200){
        body.classList.remove("blueviolet");
        body.classList.add("darkorange");
    };
};



window.addEventListener("resize", windowResize);

