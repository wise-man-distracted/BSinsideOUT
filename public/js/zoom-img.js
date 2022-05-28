! function (e) {
    "undefined" == typeof vanillaZoom ? e.vanillaZoom = {
        init: function (e) {
            let t = document.querySelector(e);
            if (t) {
                let n = t.querySelector(".small-preview"),
                    o = t.querySelector(".zoomed-image");
                o ? n ? (o.style.backgroundImage = "url(" + n.src + ")", n.classList.add("active"), t.addEventListener("click", (function (e) {
                    let n = e.target;
                    if (n.classList.contains("small-preview")) {
                        t.querySelectorAll(".small-preview").forEach((function (e) {
                            e.classList.remove("active")
                        })), n.classList.add("active");
                        let a = n.src;
                        o.style.backgroundImage = "url(" + a + ")"
                    }
                })), o.addEventListener("mouseenter", (function (e) {
                    this.style.backgroundSize = "250%"
                }), !1), o.addEventListener("mousemove", (function (e) {
                    let t = this.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        o = e.clientY - t.top,
                        a = Math.round(100 / (t.width / n)),
                        i = Math.round(100 / (t.height / o));
                    this.style.backgroundPosition = a + "% " + i + "%"
                }), !1), o.addEventListener("mouseleave", (function (e) {
                    this.style.backgroundSize = "contain", this.style.backgroundPosition = "left center"
                }), !1)) : console.error("No preview images on page.") : console.error("No zoomed image element.")
            } else console.error("No container element.")
        }
    } : console.log("Library already defined.")
}(window), document.getElementsByClassName("clean-gallery").length > 0 && baguetteBox.run(".clean-gallery", {
    animation: "slideIn"
}), document.getElementsByClassName("clean-product").length > 0 && (window.onload = function () {
    vanillaZoom.init("#product-preview")
});