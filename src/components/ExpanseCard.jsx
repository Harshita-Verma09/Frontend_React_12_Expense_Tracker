import React from 'react';
import { Typography, styled, Box, Card, CardContent } from "@mui/material"

const ExpanseCard = ({transactions}) => {
    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item >0).reduce((acc, item)=>(acc += item),0).toFixed(2);
    const exprense = (amount.filter(item => item < 0).reduce((acc, item)=>(acc += item),0)* -1).toFixed(2);
    return (
        <Container>
            <Card>
                <CardContent>
                    <Typography>Income </Typography>
                    <Typography style={{ color: "green" }}>₹{income}</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography >Expanse </Typography>
                    <Typography style={{ color: "red" }}>₹{exprense}</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default ExpanseCard;

const Container = styled(Box)`
  display: flex;
  & > div {
    flex:1;
    padding:10px;
  }
`;