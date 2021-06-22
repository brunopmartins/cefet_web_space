// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML// Faça o exercício da GALERIA DE IMAGENS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

function calcGravity() {
  let gravity =  0 ;
  constante = document.getElementById('constante').value;
  massa1 = document.getElementById('massa1').value;
  massa2 = document.getElementById('massa2').value;
  distancia =  document.getElementById('distancia').value;
  gravity = (constante * massa1 * massa2) / (distancia * distancia)
  document.getElementById('resultado').value = gravity;
}

document.getElementById('calcular').addEventListener('click', function(e) {calcGravity()});

