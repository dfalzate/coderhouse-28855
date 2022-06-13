const let1: string = "let1";
const num1: number = 1;
const bool: boolean = false;
console.log(let1, num1, bool);

const arrAny: any[] = [1, "string", true, [1, 0.2, 3], { name: "coderhouse" }];
const arrNum: number[] = [];
arrNum.push(1);
arrNum.push(2);
console.log(arrAny, arrNum);

type objType = {
    nombre: string;
    curso: string;
    duracion: number;
    arr: number[];
};

type obj2Type = {
    obj1: objType;
    arr: any[];
};

const obj: objType = {
    nombre: "",
    curso: "",
    duracion: 0,
    arr: [],
};
