function newButton(text,callback){
    const $body = document.querySelector("body");
    const $button = document.createElement("button");
    $button.textContent = text;

    callback($button);

    $body.insertAdjacentElement("beforeend", $button);

    return $button;
}

newButton("Login", (button) => {
    button.style.cssText = `
        font-size: 40px;  
    `;

    button.addEventListener("click", () => {
        console.log("oi");
    });
});

newButton("Signup", (button) => {
    button.style.cssText = `
        font-size: 80px;  
        color: red;
    `;
    button.addEventListener("click", () => {
        console.log("oi2");
    });
});