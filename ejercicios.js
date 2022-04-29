function esPar(numero) {
  if (numero == 0) {
    return `${numero} par`
  } else if (numero === 1) {
    return `${numero} impar`
  } else if (numero < 0) {
    return 'Solo mumeros enteros '
  } else {
    return esPar(numero - 2)
  }
}

console.log(esPar(-1))

function contarFrijores(texto, letra) {

  let cantidad = 0

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === letra) {
      cantidad = texto[i] + cantidad
    }
  }
  return cantidad.length - 1
}

let person= {
  name:"jose"
}

let person2= {...person}

person2.name="Henner"


console.log(person)
