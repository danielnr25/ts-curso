import './style.css'

const age:number = 20;
const name:string = 'John Doe';
const esEstudiante:boolean = true;
const x:null = null;
const y:undefined = undefined;

const persona = {
   name,
   age,
   esEstudiante
}

//persona.lastname = "Doe";

console.log(persona, x, y);

function suma(num1:number){
   return num1 + 10;
}

console.log(suma(90));


