const landmark = document.querySelector("#landmarkimg");
const radiobtns = document.querySelector("#radioContainer");
const menu = document.querySelector("#sizes");
const descDiv = document.querySelector("#imgDesc");
const map = document.querySelector("#map");

radiobtns.addEventListener("click", (e) => {
    switch(e.target.id) {
        case "handaragate":
            landmark.src = "handaragate.jpg";
            descDiv.textContent = "The Handara Gate is in Bali, Indonesia and is a traditional Balinese temple gateway surrounded by mountains and gardens."
            map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.499356073613!2d115.15570077483875!3d-8.25298958290772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1891554a93a6f%3A0x39092eb84bc49cd3!2sBali%20Handara%20Gate!5e0!3m2!1ses-419!2sus!4v1759159614239!5m2!1ses-419!2sus";
            break;
        case "mtfuji":
            landmark.src = "mtfuji.jpg";
            descDiv.textContent = "Mt. Fuji is in Japan and is a 3,776-meter volcano with a snow-capped peak."
            map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13015.194744494529!2d138.71706365528027!3d35.36064206245967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019629a42fdc899%3A0xa6a1fcc916f3a4df!2sMonte%20Fuji!5e0!3m2!1ses-419!2sus!4v1759160028159!5m2!1ses-419!2sus";
            break;
        case "stonehenge":
            landmark.src = "stonehenge.jpg";
            descDiv.textContent = "Stonehenge is in Wiltshire, England and is a 5,000-year-old prehistoric stone circle."
            map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.1810800432754!2d-1.828789923717767!3d51.178885334649756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4873e63b850af611%3A0x979170e2bcd3d2dd!2sStonehenge!5e0!3m2!1ses-419!2sus!4v1759160282336!5m2!1ses-419!2sus";
            break;
    }
})

menu.addEventListener("change", () => {
    switch (menu.value) {
        case "small":
            landmark.style.height = "200px";
            landmark.style.width = "360px";
            break;
        case "medium":
            landmark.style.height = "300px";
            landmark.style.width = "540px";
            break;
        case "large":
            landmark.style.height = "400px";
            landmark.style.width = "810px";
            break;
    }
})