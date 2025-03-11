import React from 'react';
import { Typography, Box, Divider, List } from "@mui/material"
import EachTransaction from './EachTransaction';


const Transaction = ({ transactions, setTransactions }) => {
    return (
        <Box>
            <Typography variant='h5'> Transaction History</Typography>
            <Divider />
            <List>
                {
                    transactions.map(transaction => (
                        <div key={transaction.id || transaction.text}>
                            <EachTransaction transaction={transaction}
                                setTransactions={setTransactions}
                                transactions={transactions}
                            />
                        </div>
                    ))
                }
            </List>
        </Box>
    )
}

export default Transaction;
