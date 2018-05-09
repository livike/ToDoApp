import React from 'react';
import PropTypes from 'prop-types';


const TaskName = props =>{
  if (props.isEditing){
    return (
      <input type="text" value={props.children}/>
    )}
    return <span>{props.children}</span>

}

  TaskName.propTypes = {
    isEditing: PropTypes.bool.isRequired,
  }

export default TaskName;
