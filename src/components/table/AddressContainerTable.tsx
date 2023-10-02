import { Table, TableContainer, Paper } from '@mui/material/';
import { ReactNode } from 'react';
export default function AddressContainerTable({children}: {children: ReactNode}) {
    return (
        <TableContainer component={ Paper } sx={{width: "max-content", padding: 1}}>
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
               { children }
            </Table>
        </TableContainer>
    )
}
