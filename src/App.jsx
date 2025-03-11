import { Typography, styled, Box } from "@mui/material"
import Balance from "./components/Balance";
import ExpanseCard from "./components/ExpanseCard";
import NewTransation from "./components/NewTransation";
import Transaction from "./components/Transaction";
import { useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Monos", amount: -20 },
    { id: 2, text: "Salary", amount: 5200 },
    { id: 3, text: "Travel", amount: -120 },
    { id: 4, text: "Book", amount: -100 },

  ]);
  return (
    <>
      <Header>Expanse Tracker</Header>
      <Component>
        <Box>
          <Balance transactions={transactions} />
          <ExpanseCard transactions={transactions} />
          <NewTransation setTransactions={setTransactions} />
        </Box>
        <Box><Transaction transactions={transactions} setTransactions={setTransactions} /> </Box>
      </Component>

    </>
  )
}

export default App

const Header = styled(Typography)`
  margin: 0;
  padding:0;
  font-size: 36px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  width: 100vw;


`;

const Component = styled(Box)`
  padding:10px;
  display:flex;
  width: 800px;
  border-radius: 12px;
  margin:auto;
  
  background: rgba(226, 226, 226, 0.8);

  & > div{
    height: 70vh;
    width:50%;

  }

 `;