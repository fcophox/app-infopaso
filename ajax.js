//console.log ('correcto');

document.querySelector('#boton').addEventListener('click' , traerDatos);

function traerDatos(){

    //console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'infopaso.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);

            let resultado = document.querySelector('#resultado');
            //resultado.innerHTML = '';


            for(let item of datos){
                //console.log(comuna);
                resultado.innerHTML += `
                <div class="cardPlace">
                <div class="grid-container">
                  <div class="infoCardPlace">
                    <p class="dataName">${item.comuna}</p> 
                    <p class="dataSeg">Estado de ${item.estado}</p>
                  </div>
                  <div class="stateCardPlace">
                    <img src="${item.paso}" class="dataState" alt="estado">
                  </div>
                </div>
              </div>
                `
            }
        }
    }
}