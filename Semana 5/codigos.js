var peliculas=[];

function agregar(){
    var titulo=document.getElementById("titulo").value;
    if(titulo == ""){
    alert("Debe ingresar los datos antes de presionar Agregar");
    }else{
        re= peliculas.indexOf(titulo);
        if(re == -1){
            alert("Se registro con ¡Exito!");
            peliculas.push(titulo);
            document.getElementById("titulo").value = "";
        }else{
            alert("Pelicula repetida");
        }
    }
    mostrar();
}
function mostrar(){ 
    document.getElementById("contenido").innerHTML= ""
    peliculas.forEach(function(elemento, index){
    document.getElementById("contenido").innerHTML += "<tr><td>" +
    100 + index + "</td><td>" + elemento + 
    "</td><td><button class= 'btn btn-danger' onclick='eliminar()'>"+
    "Eliminar</button></td><td><button class = 'btn btn-warning' onclick='editar()'>EDITAR</button></td></tr>"
    });
}
function eliminar(){
    var pos=(event.target.parentNode.parentNode);
    peliculas.splice(pos,1);
    event.target.parentNode.parentNode.remove();
}
function editar(){
    let idform= 0;
    const fila= event.target.parentNode.parentNode;
    idform = fila.children[1].innerHTML;
    pos=peliculas.indexOf(idform);
    var np=prompt("Introduzca el nuevo titulo de la pelicula", idform);
    if(np== "" || np == null){
        mostrar();
    }else{
        peliculas.splice(pos, 1, np);
    }
    mostrar();
}
