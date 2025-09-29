const landmark = document.querySelector("#landmarkimg");
const radiobtns = document.querySelector("#radioContainer");
const menu = document.querySelector("#sizes");
const descDiv = document.querySelector("#imgDesc");

radiobtns.addEventListener("click", (e) => {
    switch(e.target.id) {
        case "handaragate":
            landmark.src = "handaragate.jpg";
            descDiv.textContent = "The Handara Gate is in Bali, Indonesia and is a traditional Balinese temple gateway surrounded by mountains and gardens."
            break;
        case "mtfuji":
            landmark.src = "mtfuji.jpg";
            descDiv.textContent = "Mt. Fuji is in Japan and is a 3,776-meter volcano with a snow-capped peak."
            break;
        case "stonehenge":
            landmark.src = "stonehenge.jpg";
            descDiv.textContent = "Stonehenge is in Wiltshire, England and is a 5,000-year-old prehistoric stone circle."
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