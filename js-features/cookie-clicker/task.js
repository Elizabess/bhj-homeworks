const image = document.getElementById("cookie")
const click = document.getElementById("clicker__counter")
let x = 0
let sizeCookies = true

function clicker_count() {
    x++
    click.textContent = x

    if (sizeCookies) {
        image.style.width = '250px';
    } else {
        image.style.width = '200px';
    }

    sizeCookies = !sizeCookies;
}

image.addEventListener("click", clicker_count)

