

export function Modelos_tabla({modelos, modelo_a_buscar}) {

    console.log(modelo_a_buscar);
    //SE DEFINE UN CLON DEL ARRAY DE MODELOS PARA NO MODIFICAR LA PROP ORIGINAL
    let new_modelos = [...modelos];

    //SI EL MODELO A BUSCAR NO ESTA VACIO SE FILTRA EL ARRAY DE MODELOS
    if(modelo_a_buscar !== ''){
        //VERIFICA EN CADA ELEMENTO DEL ARRAY SI CONTIENE EL MODELO A BUSCAR
        new_modelos = new_modelos.filter((modelo) => {
            //LO RETORNA SI LO CONTIENE
            return modelo.nombre.includes(modelo_a_buscar);
        })  
    }

    return (


        <>
            <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    new_modelos.map((modelo) => {
                        return(
                            <tr key={modelo.id}>
                            <td>{modelo.id}</td>
                            <td>{modelo.nombre}</td>
                            <td>{modelo.precio}</td>
                        </tr>
                        )
                       
                    })}

                </tbody>
            </table>
        </>
    );


}