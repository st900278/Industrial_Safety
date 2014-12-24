var blocks = document.querySelectorAll("div.whole");
for (var i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('click', function () {
        window.location.href = this.getAttribute('data-target') + ".html";
    });
}


