document.addEventListener("DOMContentLoaded", function() {
    let links = [
        {
            name : "founders",
            link : "https://"+window.location.hostname+""
        },
        {
            name : "about",
            link : "https://"+window.location.hostname+"/about"
        },
        {
            name : "docs",
            link :  "https://"+window.location.hostname+"/docs"
        },
        {
            name : "thanks",
            link : "https://"+window.location.hostname+""
        },
        {
            name : "mione",
            link : "https://"+window.location.hostname+""
        },

    ]

    for (let link of links) {
        let linkLink = document.getElementById("b-"+link.name);
        console.log("b-"+link.name,link.link);
        linkLink.addEventListener("click", function() {
            window.location.href = (link.link);
        })
    }
})