console.log('correcto');
document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos(){
	    fetch('lm_ev2_lol.json')
        .then( response => response.json())
        .then( data => {
            tabla(data)
        })
        .catch( error => console.log(error))
       
    function tabla(data){
        console.log(data)
        let res = document.querySelector('#res'); 
        res.innerHTML = '';

        for (let item of data) {
            res.innerHTML +='<tr><td>'+item.rol+'</td><td>'+item.dificultad+'</td><td>'+item.nombre+'</td></tr>';
            
        } 
          
    }
}