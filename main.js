const puntos = [0,0,0,0]
let meta = undefined


 const caja1 = document.querySelectorAll('.caja1')
let index = 0
caja1.forEach(element => {
    element.textContent = puntos[index]
   console.log(caja1[0].textContent)
   /*
   Entonces, cuando ejecutas console.log(caja1[0].textContent) dentro del bucle,
    se imprimirá el contenido del primer elemento en cada iteración del bucle. 
    Es por eso que ves cuatro impresiones del valor 1 en la consola.
   
   */
    index++
});

function generarNumero() {
    return Math.floor(Math.random() * 12) + 1;
  }
  

const valorA = document.querySelector('.valorA');
const sumar = document.getElementById('sumar');
let indice = 0
sumar.addEventListener("click", () => {
    
 caja1[indice].textContent = parseInt(caja1[indice].textContent) + parseInt(meta)
 indice = (indice + 1) % 4
 alertaGanador()
 popUpContainer.style.display = "none"
   
});


const popUpContainer =  document.querySelector('.popUpContainer')
document.getElementById('jugar').addEventListener('click', ()=>{
  popUpContainer.style.display = "block"
    meta = generarNumero()
  valorA.textContent = meta
})

document.querySelector('.close').addEventListener('click', ()=>{
    popUpContainer.style.display = "none"
})


// Función que alerta la meta en uno de los cuadrantes

function alertaGanador() {
    const cajas = document.getElementsByClassName("caja1");
    
    for (let i = 0; i < cajas.length; i++) {
      if (parseInt(cajas[i].textContent) >= 9) {
        alert('¡Ganaste!');
      }
    }
  }
  