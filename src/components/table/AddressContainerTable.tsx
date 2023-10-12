import { Table, TableContainer, Paper } from '@mui/material/';
import { ReactNode } from 'react';
export default function AddressContainerTable({children}: {children: ReactNode}) {
    return (
        <TableContainer 
        component={ Paper } 
        sx={{ padding: "7.5px" }}
        >
                <Table 
                sx={{ tableLayout: "auto" }} 
                aria-label="simple table"
                >
                    { children }
                </Table>
        </TableContainer>
    )
}
