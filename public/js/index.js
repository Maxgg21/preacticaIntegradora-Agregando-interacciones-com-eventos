window.onload = function(){
    //JavaScript del Index
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = document.querySelector('body');
    let enlace = document.querySelector('a');
    let logo = document.querySelector('img');
    let menu = document.querySelector('#menu');
    let itemMenu = document.querySelector("#items")
    

    let nombre = localStorage.getItem('nombre'); // Obtener el nombre almacenado en localStorage
    if (!nombre) {
      nombre = prompt('Ingrese su nombre');
      localStorage.setItem('nombre', nombre); // Guardar el nombre en localStorage
    }
    if(nombre !=''){
        subtitulo.innerHTML += nombre;
    }else{
        subtitulo.innerHTML += 'INVITADO';
    }
        
    subtitulo.style.textTransform = 'uppercase';
    let confirmar = localStorage.getItem('confirmar');
    if (confirmar === null) {
        confirmar = confirm('Desea colocar un fondo de pantalla');
        localStorage.setItem('confirmar', confirmar);
    } else {
        confirmar = confirmar === 'true'; // Convertir el valor almacenado en booleano
    }
    if(confirmar){
        fondo.classList.add('fondo');
        enlace.style.color = '#E51B3E';
    }
    console.log(destacado);
    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    }
    
    logo.addEventListener('click', () => {
        menu.classList.toggle("menu");
    })

    menu.addEventListener('mouseleave', () => {
        menu.classList.add("menu")
    })

    container.style.display = 'block';
    
}