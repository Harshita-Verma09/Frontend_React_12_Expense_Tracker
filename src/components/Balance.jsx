import React from 'react'
import { Typography, styled, Box } from "@mui/material"

const Balance = ({transactions}) => {
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((amount, item)=>(amount += item),0).toFixed(2);

    return (
        <Box>
            <BalanceTest>Balance : ₹{total}</BalanceTest>
        </Box>
    )
}

export default Balance;
const BalanceTest = styled(Typography)`
  font-size:20px;
  margin-bottom: 20px

`;