import NoTableMessage from '../NoTableMessage';
import {useContext} from 'react';
import AddressContext from '../../context/AddressContext';
import { TableCell, TableRow, TableBody } from '@mui/material';
import { TAddress } from '../../interfaces/IAddress';

export default function AddressesRowsTable() {
let { address } = useContext(AddressContext);

    return (
        <TableBody>
          {
            address 
            ? 
            address
            .map((address: TAddress, index) =>
                (
                    <TableRow key={index} >
                        <TableCell>{address.cep}</TableCell>
                        <TableCell>{address.logradouro}</TableCell>
                        <TableCell>{address.bairro}</TableCell>
                        <TableCell>{address.complemento}</TableCell>
                        <TableCell>{address.uf}</TableCell>
                        <TableCell>{address.ibge}</TableCell>
                        <TableCell>{address.gia}</TableCell>
                        <TableCell>{address.ddd}</TableCell>
                        <TableCell>{address.siafi}</TableCell>
                    </TableRow>
                )
            ) 
            :  
            <NoTableMessage />
          } 
        </TableBody> 
    )
}