var blocks = document.querySelectorAll("div.block");

for (var i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('click', function () {
        var create = document.createElement("div");
        document.querySelector("div.circle").parentNode.removeChild(document.querySelector("div.circle"));
        create.className = this.className;
        var xhr = new XMLHttpRequest();
        this.style.position = "absolute";
        this.style.zIndex = "2";
        this.style.width = "100%";
        this.style.height = "100%";
        switch (this.className) {
        case "animated block purple-bg bounceInLeft":
            this.className = "main question-bg";
            xhr.open("GET", "noise.html");
            break;
        case "animated block yellow-bg bounceInUp":
            this.className = "main alert-bg";
            this.style.right = "0px";
            xhr.open("GET", "vibration.html");
            break;
        case "animated block blue-bg bounceInDown":
            this.className = "main info-bg";
            this.style.bottom = "0px";
            //xhr.open("GET", "light.html");
            break;
        case "animated block pink-bg bounceInRight":
            this.className = "main error-bg";
            this.style.bottom = "0px";
            this.style.right = "0px";
            //xhr.open("GET", "temperature.html");
            break;
        }
        xhr.send("");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.querySelector("div.main").innerHTML = xhr.responseText;
                eval(document.querySelector("div.main script").innerHTML);
            }
        }
        this.parentNode.insertBefore(create, this);
    });
}