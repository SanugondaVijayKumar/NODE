const name='Max';
let age=29;
const hasHobbies=true;

age=30;

const summerizeUser=(userName,userAge,userhasHobbies)=>{
    return ('Name is '+userName+', age is '+userAge+' and the user has hobbies: '+userhasHobbies);
}

const add=(a,b)=>{
    return a+b;
}


//Arrow function to return product of two numbers
const product=(a,b)=>{
    return a*b;
}

console.log(product(2,5));
console.log(add(1,2));
console.log(summerizeUser(name,age,hasHobbies));


const person={
    name:'Max',
    age:29,
    greet(){
        console.log('Hi,I am '+this.name);
    }
}

console.log(person);
person.greet();

const student={
    name:'vijay',
    age:'22'
}

console.log(student);