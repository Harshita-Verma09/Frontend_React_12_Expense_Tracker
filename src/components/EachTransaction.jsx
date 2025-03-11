import { ListItemText, styled, ListItem, ListItemIcon } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EachTransaction = ({ transaction, setTransactions, transactions }) => {
    const color = transaction.amount > 0 ? "Green" : "Red";
    const deleteTrans = (id) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id))
    }
    return (
        <Detail style={{ backgroundColor: color, color: "white" }}>
            <ListItemIcon>
                <DeleteIcon onClick={() => deleteTrans(transaction.id)} />
            </ListItemIcon>
            <ListItemText>{transaction.text}</ListItemText>
            <ListItemText>{transaction.amount}</ListItemText>
        </Detail>
    )
}

export default EachTransaction;

const Detail = styled(ListItem)`
    margin: 12px;
`;
