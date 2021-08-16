
import {Card, CardContent, Typography , Box, makeStyles} from '@material-ui/core'
import Transaction from './Transaction';

const useStyle = makeStyles({
    container:{
        display: 'flex',
        '& > *': {
            padding:10,
            flex: 1
        }
    },
    income:{
        color:'green'
    },
    expence:{
        color:'red'
    },
})


const ExpenceCard =  ({transactions})=> {

    const classes = useStyle();
    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expence = (amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);
    return (
        <Box className={classes.container}>
            <Card>
                <CardContent>
                    <Typography> Income </Typography>
                    <Typography className={classes.income}>{income} Rs </Typography>
                </CardContent>
            </Card>
            <Card>
            <CardContent>
                <Typography> Expence </Typography>
                <Typography className={classes.expence}>{expence} Rs </Typography>
            </CardContent>
        </Card>
     </Box>
        

    )
}

export default ExpenceCard;
