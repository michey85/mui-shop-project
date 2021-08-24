import { IconButton, ListItem, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const BasketItem = ({removeFromOrder, id, name, price, quantity}) => {
    return (
        <ListItem>
            <Typography
                variant="body1"
            >
                {name} {price}руб x{quantity}
            </Typography>
            <IconButton
                onClick={() => removeFromOrder(id)}
            >
                <Close />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;