function digitalRoot(n) {
    let numeros = n.toString();
    let numerosSeparados = Array.from(numeros);
    let numerosSeparadosNumber = [];
    let numerosTypeNumber = numerosSeparados.forEach((num, i) => {
      numerosSeparadosNumber.push(parseInt(num));
    });
  let result = numerosSeparadosNumber.reduce((acumulator,current) => acumulator + current , 0)
  console.log(result)
  }
  
  digitalRoot(730459);