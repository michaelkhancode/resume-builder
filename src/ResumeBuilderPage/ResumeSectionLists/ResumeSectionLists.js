import React from 'react';
import ResumeSectionList from "./ResumeSectionList/ResumeSectionList"

function ResumeSectionLists(props) {
  return (
    <div className="ResumeSectionLists">
      <ResumeSectionList editClickHandler={props.editClickHandler}/>
    </div>
  );
}

export default ResumeSectionLists;