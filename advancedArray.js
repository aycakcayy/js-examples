
//squaring

const array=[1,2,3,4]

const squaring=[]
array.forEach(num=>{
    squaring.push(num*num);
})

console.log(squaring)



//map -> data transformation object için kullanılır.

const mapArray= array.map(num=> num*3)   //tek sırada göndermemiz gerekir.

console.log(mapArray);


//filter

const filteredArray=array.filter(num=>num>2)
console.log(filteredArray);

//reduce
//acc başlangıç değeri, default olarak 0
const sum=array.reduce((acc,num)=>{
   return acc+ num;
})
console.log(sum);