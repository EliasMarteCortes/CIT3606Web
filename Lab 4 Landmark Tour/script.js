const landmark = document.querySelector("#landmarkimg");
const radiobtns = document.querySelector("#radioContainer");
const menu = document.querySelector("#sizes");

radiobtns.addEventListener("click", (e) => {
    switch(e.target.id) {
        case "handaragate":
            landmark.src = "handaragate.jpg";
            break;
        case "mtfuji":
            landmark.src = "mtfuji.jpg";
            break;
        case "stonehenge":
            landmark.src = "stonehenge.jpg";
            break;
    }
})

menu.addEventListener("change", () => {
    switch (menu.value) {
        case "small":
            landmark.style.height = "100px";
            landmark.style.width = "180px";
            break;
        case "medium":
            landmark.style.height = "200px";
            landmark.style.width = "360px";
            break;
        case "large":
            landmark.style.height = "300px";
            landmark.style.width = "540px";
            break;
    }
})