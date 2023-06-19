window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    let img = document.querySelector('img');

    img.addEventListener('mouseover', () => {
        body.style.backgroundColor = 'rgb(186 186 186)'
        body.classList.add('fondoMoviesList');
    })
    // let modo = confirm('Desea modo oscuro');
    // if(modo){
    //     body.style.backgroundColor = '#7f7f7f'
    //     body.classList.add('fondoMoviesList');
    // }
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

    moviesListTitulo.addEventListener("mouseover", () => {
        moviesListTitulo.style.color = "yellow";
  });
}