const mostrarLetras = (palabra, callback) => {
  let count = 0;
  const timer = setInterval(() => {
    console.log(palabra[count]);
    count++;
    if (count >= palabra.length) {
      clearInterval(timer);
      callback();
    }
  }, 1000);
};

const fin = () => console.log("Termine");

setTimeout(() => {
  mostrarLetras("Hola0", fin);
}, 0);
setTimeout(() => {
  mostrarLetras("Hola250", fin);
}, 250);
setTimeout(() => {
  mostrarLetras("Hola500", fin);
}, 500);
