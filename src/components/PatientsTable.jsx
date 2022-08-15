import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useContext, useEffect, useState} from "react";
import {PatientContext} from "../context/PatientContext";
import {Box, Button, Modal, Typography} from "@mui/material";

// function createData(name, height, fat, carbs, protein) {
//     return { name, height, fat, carbs, protein };
// }

export default function BasicTable() {
    const data = useContext(PatientContext)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)
    const [patient, setPatient] = useState(null)


    return (
        <div>
            <TableContainer component={Paper}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Full Name</TableCell>
                            <TableCell align="right">Height</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data && data.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row["height"]}</TableCell>
                                <TableCell align="right">{row["fat"]}</TableCell>
                                <TableCell align="right">{row["carbs"]}</TableCell>
                                <TableCell align="right">{row["protein"]}</TableCell>
                                <TableCell align="right">
                                    <Button variant={"contained"} style={{
                                        marginRight: "0.5rem"
                                    }}
                                    onClick={() => {
                                        setPatient(row.name)
                                        handleOpen()
                                    }}
                                    >
                                        Show Profile
                                    </Button>
                                    <Button variant={"contained"} style={{
                                        marginLeft: "0.5rem"
                                    }} color={"error"} onClick={() => {
                                        // deleteItem(row.id)
                                    }}>
                                        Delete
                                    </Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <PatientModal name={patient} open={open} closeModal={handleClose}/>
        </div>
    );
}

const PatientModal = ({name, open, closeModal}) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        borderRadius: '1rem',
        boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
        p: 4,
    };

    return (
            <Modal
                open={open}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal, name is : {name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
    );
}
