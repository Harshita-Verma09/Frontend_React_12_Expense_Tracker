import React, { useState } from 'react';
import { Typography, styled, Box, TextField, Button } from "@mui/material"

const NewTransation = ({setTransactions}) => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const handleTransactions = ()=>{
        const transaction={
            id:Math.floor(Math.random() * 1000000),
            text: text,
            amount: +amount
        }
        setTransactions(prevState =>[ transaction, ...prevState]);
    }
    return (
        <Container>
            <Typography variant='h5'> New Transaction  </Typography>
            <TextField label="Enter expanse"  onChange={(e) => setText(e.target.value)}/>
            <TextField label="Enter amount" onChange={(e) => setAmount(e.target.value)} />
            <Button variant='contained' onClick={handleTransactions}>Add Transaction</Button>
        </Container>
    )
}

export default NewTransation;

const Container = styled(Box)`
   display:flex;
   flex-direction:column;
   & > h5, & > div, & > Button{
   margin-top: 30px;
   }
`;