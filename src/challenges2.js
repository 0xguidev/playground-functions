// Desafio 10
function techList(vetor,name) {
  // seu código aqui
 
  let resultado = []
  vetor.sort()
  let obj = {};
  for(let each in vetor){
    obj ={
      tech: vetor[each],
      name: name
    };
    resultado.push(obj)
  }
if(vetor.length == 0){
  return "Vazio!"
}
else{ 
  return resultado
}
}
let nom = 'Lucas'
let vet = []
console.log(techList(vet,nom))


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
