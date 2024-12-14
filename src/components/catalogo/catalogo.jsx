import { useState } from "react";
import { Buscador } from "../buscador/buscador";
import { Modelos_tabla } from "../tabla_modelos/modelos";

export function Catalogo() {
    //DATOS DE EJEMPLO
    const data = [
        { id: 1, nombre: 'Juan', precio: 25 },
        { id: 2, nombre: 'Ana', precio: 30 },
        { id: 3, nombre: 'Luis', precio: 28 },
    ];
    //SE CREA UN USESTATE PARA QUE EL HIJO PUEDA MODIFICAR EL VALOR DE LA BUSQUEDA
    const [busqueda, setBusqueda] = useState('');

    //SE CREA LA FUNCION QUE ACTUALIZA EL VALOR DE LA BUSQUEDA
    const buscarModelo = (modelo) => {
        setBusqueda(modelo);
    }

    return (
        <>
            <Buscador buscarModelo={buscarModelo}></Buscador>

            <Modelos_tabla modelos={data} modelo_a_buscar={busqueda}></Modelos_tabla>
        </>

    );
}