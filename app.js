var blocks = document.querySelectorAll("div.block");

for (var i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('click', function () {
        var create = document.createElement("div");
        // document.querySelector("div.circle").parentNode.removeChild(document.querySelector("div.circle"));
        create.className = this.className;
        var xhr = new XMLHttpRequest();
        this.style.position = "absolute";
        this.style.zIndex = "2";
        this.style.width = "100%";
        this.style.height = "100%";
        switch (this.className) {
        case "block purple-bg":
            this.className = "main question-bg";
            xhr.open("GET", "noise.html");
            break;
        case "block yellow-bg":
            this.className = "main alert-bg";
            this.style.right = "0px";
            xhr.open("GET", "vibration.html");
            break;
        case "block blue-bg":
            this.className = "main info-bg";
            this.style.bottom = "0px";
            break;
        case "block pink-bg":
            this.className = "main error-bg";
            this.style.bottom = "0px";
            this.style.right = "0px";
            break;
        }
        xhr.send("");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.querySelector("div.main").innerHTML = xhr.responseText;
            }
        }
        this.parentNode.insertBefore(create, this);
    });
}