const aData = [1, 2, 3, 4, 5];

const aLenght = (aData) => {
  let n = 0;
  while (aData[n] !== undefined) {
    n++;
  }

  return n;
};

const aPush = (aData, x) => {
  aData[aLenght(aData)] = x;
  return aData;
};

console.log(aLenght(aData));
console.log(aPush(aData, 'hola'));
