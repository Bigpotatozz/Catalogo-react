import './buscador.css';

//SE RECIBE COMO PARAMETRO LA FUNCION DEL PADRE
export function Buscador({buscarModelo}) {

    /*SE CREA UNA FUNCION QUE ACCEDE AL INPUT, A SU VALOR Y LO ESTABLECE COMO PARAMETROE EN LA FUNCION PADRE
    (LA QUE MODIFICA EL ESTADO DE LA BUSQUEDA)*/
    const handleInputChange = (e) => {
        const newValue = e.target.value;
        buscarModelo(newValue);  
    }


    //EN EL ONCHANGE SE LLAMA A LA FUNCION QUE MODIFICA EL ESTADO DE LA BUSQUEDA PARA MODIFICAR EN TIEMPO REAL
    return (
        <>
        
        <input type='text' placeholder='Escribe el modelo a buscar'onChange={handleInputChange}></input>


        </>
    );

};