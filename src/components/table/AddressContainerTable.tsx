import { Table, TableContainer, Paper } from '@mui/material/';
import { ReactNode } from 'react';
export default function AddressContainerTable({children}: {children: ReactNode}) {
    return (
        <section>
            <TableContainer component={ Paper } sx={{width: "max-content", padding: 3.5}}>
                <Table sx={{ tableLayout: "auto" }} aria-label="simple table">
                    { children }
                </Table>
            </TableContainer>
        </section>
    )
}
