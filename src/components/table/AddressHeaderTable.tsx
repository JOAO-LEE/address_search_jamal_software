import { TableCell, TableRow, TableHead } from '@mui/material';
import { useContext } from 'react';
import AddressContext from '../../context/AddressContext';

export default function AddressHeaderTable() {
    // let { address } = useContext(AddressContext);
    // const addressKeys = Object.entries(address);
    // // console.log(addressKeys);
    return (
        <TableHead>
            <TableRow>
                <TableCell align="right">Cep</TableCell>
                <TableCell align="right">Logradouro</TableCell>
                <TableCell align="right">Bairro</TableCell>
                <TableCell align="right">Complemento</TableCell>
                <TableCell align="right">Localidade</TableCell>
                <TableCell align="right">UF</TableCell>
                <TableCell align="right">IBGE</TableCell>
                <TableCell align="right">GIA</TableCell>
                <TableCell align="right">DDD</TableCell>
                <TableCell align="right">SIAFI</TableCell>
            </TableRow>
        </TableHead>
    )
}
