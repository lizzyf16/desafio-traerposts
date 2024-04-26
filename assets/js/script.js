let urlApi = "https://jsonplaceholder.typicode.com/posts";

const getData = async (url) => {

try{
    let response = await fetch(url);
    let data = await response.json();
    return data
    
} catch(error){
    console.error("Llamada a la api fallido", error);
    return "Llamada a la api fallido"

}
}

const agregarPost =  (listado) => {
    let elementoLista = "";
    listado.forEach(post =>{
        elementoLista+= `<li class="py-2"><strong>Titulo:</strong> ${post.title} <p><strong>Post:</strong> ${post.body}</p></li>`
    })
    document.getElementById("listaPost").innerHTML = elementoLista;
}

const main = async () =>{
    let datos = await getData(urlApi);
    agregarPost(datos);
}