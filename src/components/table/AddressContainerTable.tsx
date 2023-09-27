import { Table, TableContainer, Paper } from '@mui/material/';
import { ReactNode } from 'react';
export default function AddressContainerTable({children}: {children: ReactNode}) {
    return (
        <TableContainer component={ Paper }>
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
               {children}
            </Table>
        </TableContainer>
        )
    }
