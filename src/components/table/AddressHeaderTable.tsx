import { TableCell, TableRow, TableHead } from '@mui/material';
import { addressKeys } from '../../helpers/AddressHandler';

export default function AddressHeaderTable() {
    return (
        <TableHead>
            <TableRow>
                {addressKeys.map((key, index) => (
                    <TableCell align="center" key={index}>{key.replace(key[0], key[0].toUpperCase())}</TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}
