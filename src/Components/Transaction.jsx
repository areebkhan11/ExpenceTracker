
import { ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';
const useStyle = makeStyles({
    list:{
        marginTop: 10,
        border: '1px solid #D3D3D3'
    }

})
const Transaction = ({transaction, deleteTransaction}) => {
    
    const classes = useStyle();
    const color = transaction.amount >= 0 ? '#90EE90' : '#FF7F7F'
    const sign = " Rs"
    const amount =  transaction.amount + sign;


    return(
        <ListItem className={classes.list} style={{background:`${color}`}} >
            <ListItemIcon>
                <DeleteIcon onClick={()=> deleteTransaction(transaction.id)} />
            </ListItemIcon>
            <ListItemText primary ={transaction.text} />
            <ListItemText primary ={amount} />
        </ListItem>
    )
}

export default Transaction