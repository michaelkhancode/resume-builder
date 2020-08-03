import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet, css } from 'aphrodite';

const AddBlock = () => {
    const styles = StyleSheet.create({
        button: {
            border: "1px black solid",
            position: "relative",
            ":hover":{
                left:"20px"
            }
        },
        menulist: {
            padding:0
        },
        addBlock: {
            width:"auto",
            alignSelf:"center"
        }
    });

    const options = ['Drag A Block', 'Contact', 'Education', "Work Experience", "Projects", "Skills", "Interests", "Languages"];
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    // const handleClick = () => {
    //     console.info(`You clicked ${options[selectedIndex]}`);
    // };

    // const handleMenuItemClick = (event, index) => {
    //     console.info(`You clicked plus`);
    //     setSelectedIndex(index);
    //     setOpen(false);
    // };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const dragStartHandler = (event) => {
        event.dataTransfer.setData("text/plain", event.target.innerText);
        event.dataTransfer.dropEffect = "copy";
        handleClose(event);
    }

    return (
        <Grid className={`AddBlock ${css(styles.addBlock)}`} container direction="column" alignItems="center">
            <Grid item xs={12}>
                <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                <Button 
                    onClick={handleToggle}
                    // onClick={handleClick}
                >
                        {options[0]}
                </Button>
                <Button
                    color="primary"
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
                </ButtonGroup>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                    >
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu" className={css(styles.menulist)}>
                            {options.map((option, index) => {
                                if (index > 0) {
                                    return (
                                        <MenuItem 
                                            draggable="true" 
                                            onDragStart={dragStartHandler}
                                            className={css(styles.button)} 
                                            key={option} 
                                            selected={index === selectedIndex}
                                        >
                                            {option}
                                        </MenuItem>)
                                }
                            })}
                        </MenuList>
                        </ClickAwayListener>
                    </Paper>
                    </Grow>
                )}
                </Popper>
            </Grid>
        </Grid>
  );
}

export default AddBlock;