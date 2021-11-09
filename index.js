//greatest of two numbers

let a=10,b=5;
let res = greatestOfTwoNumbers(a,b);
function greatestOfTwoNumbers (a,b) {
    if(a>b) {
        return a;
    } else {
        return b;
    }
}

//scary word

let words = ['George', 'Alice', 'Alex', 'John', 'Infanta', 'Xavior', 'LourdhAntony'];
let res = findScaryWord(words);
function findScaryWord(words) {
    let index = 0;
    let value;
    let name;
    for (let i = 0; i < words.length; i++) {
        value = words[i].length;
        if (value > index) {
            index = value;
            name = words[i];
        }
    }
    return name;
}

//net price

let arr = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110];
let t = netPrice();
function netPrice() {
    netPrice = arr.reduce((a, b) => {
        return a + b;
    });
    
    console.log(netPrice);
}

//sum of array

const sumOfArray = (values) => {
    const sum = values.reduce((c, a) => Number(c) + Number(a));
    console.log("sum", sum);
    return sum;
}
const add = (arr) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            newArray.push(arr[i].length);
        } else if(typeof arr[i] === 'boolean') {
            newArray.push(parseInt(Number(arr[i])));
        } else {
            newArray.push(arr[i]);
        }
    }
    return sumOfArray(newArray);
}

let arr = [63, 122, 'Audi', 61, true,'Volvo', '20', 'Lamborghini', 38, 156];    
let t = add(arr);

// mid point

const midPointOfLevels = (values) => {
    
     let aa = (add(values) / values.length);
     console.log(aa);
     return aa;
}

let a = [22,16,9,10,7,14,11,9];
let temp = midPointOfLevels(a);

//average word length

const averageWordLength = (values) => {
    console.log((add(values) / values.length));
    return (add(values) / values.length);
}
let values = ['bread','jam','milk','egg','flour','oil','rice','coffee powder','sugar','salt'];
let temp = averageWordLength(values);

//generic avg function

const avg = (values) => {
    console.log((add(values) / values.length));
    return (add(values) / values.length);
}
let values = [63, 122, 'Audi', 61, true,'Volvo', '20', 'Lamborghini', 38, 156];
let temp1 = avg(values);

//unique arrays

const uniqueArrays = (value,index,self) => {
        return self.indexOf(value) === index;
}
const ages = ['bread','jam','milk','egg','jam','oil','oil','jam','oil','oil'];
const uniqueAges = ages.filter(uniqueArrays);
console.log(uniqueAges);

//array search

const arraySearch = (words,a) => {
     if(words.includes(a)) {
         console.log("yes")
         return true;
    } else {
        console.log("no")
         return false;
    }
}
const words = ['door','window','ceiling','roof','plinth','tiles','ceiling','flooring'];
let temp2 = arraySearch(words,'roof');

//how many times elements  repeated

const howManyTimesElementRepeated = (word,a) => {
    let count = word.filter(( num ) => {
         return num.includes(a);
    });
    console.log(count.length);
    return count.length;
}
let word = ['machine','matter','subset','trouble','starting','matter','eating','matter','truth','disobedience','matter'];
let temp2 = howManyTimesElementRepeated(word,'matter');

//product of adjacent numbers

const maximumProduct = (arr) => {


    let maxProduct = 0;
  for(let i =0; i< arr.length; i++) {
    for(let j = 0; j<arr.length; j++) {
      if((j-3) >= 0) {
        let p1 = multiplyFourNumbers(arr[i][j], arr[i][j-1], arr[i][j-2], arr[i][j-3]);
        if(p1 > maxProduct) {
          maxProduct = p1;
        }
      } 
      if((i-3) >= 0) {
        let p2 = multiplyFourNumbers(arr[i][j], arr[i-1][j], arr[i-2][j], arr[i-3][j]);
        if(p2 > maxProduct) {
          maxProduct = p2;
        }
      }
    }
  }
  return maxProduct;
}

const multiplyFourNumbers = (a, b, c, d) => {
    return a*b*c*d;
}

const matrix = [[1,2,3,4,5],
                [1,25,3,4,5],
                [1,20,3,4,5],
                [1,20,3,4,5],
                [1,4,3,4,5]
              ];

console.log(maximumProduct(matrix));

const maximunProductOfDiagonal = (arr) => {
    let maxProduct = 0;
    for(let i =0; i< arr.length; i++) {
      for(let j = 0; j<arr.length; j++) {
        if((j-3) >= 0 && (i-3) >= 0) {
          let p1 = multiplyFourNumbers(arr[i][j], arr[i-1][j-1], arr[i-2][j-2], arr[i-3][j-3]);
          if(p1 > maxProduct) {
            maxProduct = p1;
          }
        } 
        if((i-3) >= 0 && (j-1) <= 0) {
          let p2 = multiplyFourNumbers(arr[i][j], arr[i-1][j+1], arr[i-2][j+2], arr[i-3][j+3]);
          if(p2 > maxProduct) {
            maxProduct = p2;
          }
        }
      }
    }
    return maxProduct;
  }
  
  console.log(maximunProductOfDiagonal(matrix));