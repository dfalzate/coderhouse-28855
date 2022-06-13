const var1: string = 'String'
const var2: number = 1
const var3: boolean = true
const var4: number[] = [1, 2, 3]

type var5Type = {
    nombre: string
    edad: number
    email: string
}

const var5: var5Type = {
    nombre: '',
    edad: 0,
    email: '',
}

/* ------------------------- typescript en funciones ------------------------ */

type fun1Type = () => void

const fun1: fun1Type = () => console.log('Hola coderhouse')
fun1()

type fun2Type = (num1: number, num2: number) => number

const fun2: fun2Type = (num1: number, num2: number) => num1 + num2
console.log(fun2(1, 2))
