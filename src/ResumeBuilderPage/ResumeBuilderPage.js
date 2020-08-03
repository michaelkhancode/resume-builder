import React from 'react';
import AddBlock from "./AddBlock/AddBlock"
import ResumeSectionLists from "./ResumeSectionLists/ResumeSectionLists"
import EditPage from "./EditPage/EditPage"
import { StyleSheet, css } from 'aphrodite';

const ResumeBuilder = () => {
    const styles = StyleSheet.create({
        flex:{
            display:"flex",
            flexDirection: "row",
            width:"70%",
            height:"70%",
            justifyContent:"space-evenly"
        },
        aligner:{
            display:"flex",
            flexDirection: "row",
            height: "100vh",
            alignItems: "center",
            justifyContent:"center"
        }
    });

    const [editingStatus, setEditingStatus] = React.useState(false);

    const editClickHandler = (event) => {
        setEditingStatus(!editingStatus);
    }

    return(
        <div className={css(styles.aligner)}>
            <div className={css(styles.flex)}>
                <AddBlock/>
                <ResumeSectionLists editClickHandler={editClickHandler}/>
                {editingStatus && <EditPage />}
            </div>
        </div>
    );
}

export default ResumeBuilder;