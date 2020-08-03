import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function Item(props) {
    const styles = StyleSheet.create({
        listitem: {
            border: "1px solid black"
        }
    });

    // const [type, setType] = React.useState

  return (
    <ListItem 
        className={css(styles.listitem)}
    >
        <ListItemText primary={`${props.type}`} />
        <ButtonGroup disableElevation variant="outlined" color="primary" >
            <Button onClick={props.editClickHandler}>
                <FontAwesomeIcon icon={faEdit} />
            </Button>
        </ButtonGroup>
    </ListItem>
  );
}

export default Item;