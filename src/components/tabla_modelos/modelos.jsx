import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function Modelos_tabla({modelos, modelo_a_buscar}) {


    /*
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
            */

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
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {new_modelos.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.nombre}</TableCell>
              <TableCell align="right">{row.precio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </>
    );


}


