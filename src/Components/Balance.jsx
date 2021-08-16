import {Typography , Box, makeStyles} from '@material-ui/core'

const useStyle = makeStyles({
    balance:{
        fontSize: 25,
        marginBottom: 20
    }
})

const Balance =  ({transactions})=>{

    const amount = transactions.map(transaction =>transaction.amount)
    const total = amount.reduce((amount, item)=> (amount += item), 0).toFixed(2);
    const classes = useStyle();

    return (
        <Box>
            <Typography className={classes.balance}> Balance {total} Rs </Typography>
        </Box>
    )
}

export default Balance

