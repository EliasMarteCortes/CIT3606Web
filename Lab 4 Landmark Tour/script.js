const landmark = document.querySelector("#landmarkimg");
const radiobtns = document.querySelector("#radioContainer");

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