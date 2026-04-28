let edadesIzquierdo = []; //crear un arreglo
let edadesDerecho =[];    //crear un arreglo

function agrefarEdad(){
    let edad = parseInt(document.getElementById("edad").value);
    if(!isNaN(edad)){   //validamos q edad sea diferente de null
        edadesIzquierdo.push(edad);
    }else{
        alert("Por favor ingrese un numero válido");
    }

    pintarArregloIzquierdo();

}


function eliminarIzquierdo(indice){
    edadesIzquierdo.splice(indice,1);  // splice(i, 1) elimina, i=indice, 1=# a eliminar
    pintarArregloIzquierdo();
}



function pintarArregloIzquierdo(){
    let tbody = document.getElementById("tablaIzquierda");
    let contenidoTabla="";
    let edadRecuperada;

    for(let i=0; i<edadesIzquierdo.length; i++ ){
        edadRecuperada=edadesIzquierdo[i];
        contenidoTabla+="<tr>";
        contenidoTabla+="<td>"+edadRecuperada+"</td>";
        contenidoTabla+="<td><button class='btn-eliminar' onclick='eliminarIzquierdo("+i+")'>Eliminar</button></td> <td><button class='btn-mover'>➜</button> </td>";
        contenidoTabla+="</tr>";
    }

    tbody.innerHTML=contenidoTabla;
}


function pintarArregloDerecho(){
    let tbody = document.getElementById("tablaDerecha");
    let contenidoTabla="";
    let edadRecuperada;

    for(let i=0; i<edadesIzquierdo.length; i++ ){
        edadRecuperada=edadesIzquierdo[i];
        contenidoTabla+="<tr>";
        contenidoTabla+="<td>"+edadRecuperada+"</td>";
        contenidoTabla+="<td><button class='btn-eliminar' onclick='eliminarIzquierdo("+i+")'>Eliminar</button></td> <td><button class='btn-mover'>➜</button> </td>";
        contenidoTabla+="</tr>";
    }

    tbody.innerHTML=contenidoTabla;
}