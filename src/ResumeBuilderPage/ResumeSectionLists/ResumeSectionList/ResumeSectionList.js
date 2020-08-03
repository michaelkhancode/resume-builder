import React from 'react';
import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
import Item from "./ResumeListItems/Item"
import { StyleSheet, css } from 'aphrodite';


function ResumeSectionList(props) {

    const [listItemArray, setlistItemArray] = React.useState([]);

    const styles = StyleSheet.create({
        resumeSectionList: {
            height:"70%",
            backgroundColor: "rgba(220,220,220,0.4)"
        },
        wrapper:{
            height:"100%",
        }
    });

    const dragOverHandler = (event) => {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
    }

    const listTemplate = (data) => {
        return <Item type={data} editClickHandler={props.editClickHandler}/>
    }

    const dropHandler = (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text/plain");
        let array = [listTemplate(data), ...listItemArray]
        setlistItemArray(array);
    }

    return (
        <div className= {css(styles.wrapper)}>
            <h1>Resume 1</h1>
            <List 
            className= {css(styles.resumeSectionList)}
            onDragOver={dragOverHandler} 
            onDrop={dropHandler} 
            // style={{backgroundColor:"red", height:'100%'}}
            component="nav" 
            aria-label="secondary mailbox folders"
        >
            {listItemArray}
        </List>
        </div>
  );
}

export default ResumeSectionList;