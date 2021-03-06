import { useState } from "react";
import { Box, Button, makeStyles, TextField, Typography ,   } from "@material-ui/core";

const useStyle = makeStyles({
    container:{
        display:'flex',
        flexDirection: 'column',
        '& > *': {
            marginTop:30
        }
    },
    button:{
        background: '#445A6f',
        color: '#fff'
    }
})
const NewTransaction = ({addTransaction}) =>{

const classes = useStyle();

const [text, setText] = useState('');
const [amount, setAmount] = useState()

const newTransaction = ()=>{
    const transaction = {
        id : Math.floor(Math.random() * 10000),
        text: text,
        amount: +amount  
    }
    addTransaction(transaction);
}
    return(
        <Box className={classes.container}>
            <Typography variant="h5">New Transaction</Typography>
            <TextField label="Enter Expence"  onChange= {(e)=>setText(e.target.value)} />
            <TextField label="Enter Ammount"  onChange= {(e)=>setAmount(e.target.value)}/>    
            <Button className={classes.button} onClick={newTransaction} variant="contained"> Add a New Transaction</Button>
        </Box>
    )
} 

export default NewTransaction;