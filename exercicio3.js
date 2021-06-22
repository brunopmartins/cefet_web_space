const expandText = document.getElementsByClassName('botao-expandir-retrair');

for (let index = 0; index < expandText.length; index++) {
    expandText[index].addEventListener('click', function(e) {
        if(this.innerHTML === "-") {
        	this.innerHTML = "+";
        } else {
        	this.innerHTML = "-";
        }
        this.parentElement.classList.toggle('expandido');
    });
}