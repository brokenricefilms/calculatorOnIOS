const input = document.querySelector('button');
document.body.appendChild(button);
const paragraph = document.querySelector('.output');

input.addEventListener('click',
    function(input) {
    paragraph.innerText  = input.innerText;
}
);

