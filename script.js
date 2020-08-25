const input = document.querySelector('.number');
const paragraph = document.querySelector('.output');

input.addEventListener("click",
    function() {
    paragraph.innerText  = input.target.innerText;
}
);
