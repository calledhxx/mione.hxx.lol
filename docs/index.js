document.addEventListener("DOMContentLoaded", function() {
    let links = [
        {
            name: "founders",
            link: "https://" + window.location.hostname + ""
        },
        {
            name: "about",
            link: "https://" + window.location.hostname + "/about"
        },
        {
            name: "docs",
            link: "https://" + window.location.hostname + "/docs"
        },
        {
            name: "thanks",
            link: "https://" + window.location.hostname + ""
        },
        {
            name: "mione",
            link: "https://" + window.location.hostname + ""
        },

    ]

    for (let link of links) {
        let linkLink = document.getElementById("b-" + link.name);

        console.log("b-" + link.name, link.link);
        linkLink.addEventListener("click", function () {
            window.location.href = (link.link);
        })
    }


    //docs
    let docs = [
        ["Home","home"],
        ["MPL","mpl"]
    ]

    for (let i = 0; i < docs.length; i++) {
        let a = document.createElement("p");
        let b = document.createElement("a");

        a.appendChild(b);
        a.classList.add("docLinkCase");
        b.classList.add("docLink");
        b.textContent = docs[i][0];
        b.href = "?page="+docs[i][1];
        document.getElementById("L").appendChild(a);
    }


    var oReq = new XMLHttpRequest();


    const params = new URLSearchParams(window.location.search);

    if (params.get('page')) {
        oReq.open("GET", "./d/" + params.get('page') + ".json");
        oReq.send();

        oReq.addEventListener("load", function () {
            let R = document.getElementById("R");

            let t = JSON.parse(oReq.responseText);


            for (let i = 0; i < t.length; i++) {
                let oD = [
                    [(t[i]).Title, ("h1"), "docs-A", "textContent"],
                    [(t[i]).Detailed, ("h2"), "docs-B", "textContent"],
                    [(t[i]).Img, ("img"), "docs-C", "src"],
                    [(t[i]).Table, ("table"), "docs-D", false],
                ]

                for (let ii = 0; ii < oD.length; ii++) {
                    if (oD[ii][0] === "") {
                    } else {
                        let a = document.createElement(oD[ii][1]);
                        a.classList.add(oD[ii][2]);


                        if (oD[ii][3]) {
                            a[oD[ii][3]] = oD[ii][0];
                        } else {
                            if (oD[ii][1] === "table") {
                                let T = document.createElement("thead");
                                let t = document.createElement("tr");
                                for (let TL = 0; TL < oD[ii][0].T.length; TL++) {
                                    let m = document.createElement("th");
                                    m.classList.add("line" + ((TL % 2) === 0 ? "Odd" : "Even"));
                                    m.textContent = oD[ii][0].T[TL];
                                    T.appendChild(t);
                                    t.appendChild(m);
                                }
                                a.appendChild(T);

                                for (let BL = 0; BL < oD[ii][0].C.length; BL++) {
                                    let B = document.createElement("tbody");
                                    let b = document.createElement("tr");

                                    for (let BBL = 0; BBL < oD[ii][0].C[BL].length; BBL++) {
                                        let m = document.createElement("th");
                                        m.classList.add("line" + ((BBL % 2) === 0 ? "Odd" : "Even"));
                                        m.textContent = oD[ii][0].C[BL][BBL];
                                        b.appendChild(m);
                                        B.appendChild(b);
                                    }

                                    a.appendChild(B);
                                }


                                a.appendChild(T);
                            }
                        }

                        R.appendChild(a);
                    }

                }
            }


        });
    } else {
        let B = document.createElement("h2");
        B.textContent = "(Choose a Document from Left)";
        B.classList.add("docs-B");

        R.appendChild(B);
    }

})