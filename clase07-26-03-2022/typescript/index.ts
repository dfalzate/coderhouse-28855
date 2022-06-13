const numeros: number[] = [1, 2, 3, 4, 5];
numeros.map((x: number) => x * x).forEach((x: number) => console.log(x));

const persona: {
  nombre: string;
  edad: number;
  url: string;
} = {
  nombre: "Coderhouse",
  edad: 30,
  url: "www.coderhouse.com",
};

console.log(persona);
