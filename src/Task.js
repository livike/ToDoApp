import React from 'react';
import PropTypes from 'prop-types';

import TaskName from './TaskName';

const Task = props =>{

  return (
    <li className={props.isConfirmed ? "list-group-item clearfix list-group-item-success" : "list-group-item clearfix"} >
     <label> <input
              type="checkbox"
              checked={props.isConfirmed}
              onChange= {props.handleConfirmation} />
    </label>
      <TaskName
        isEditing={props.isEditing}
        handleTaskEdits={e => props.setTask(e.target.value)}>
        {props.task}
      </TaskName>
      <div className="pull-right" role="group">
        <button
          type="button"
          className="btn btn-xs btn-warning img-circle"
          onClick={props.isConfirmed ? false : props.handleEditing}>
          {props.isEditing ? "save" : "\u270E"}
        </button>
        <button
          type="button"
          onClick={props.handleDelete}
          className="btn btn-xs btn-danger img-circle" >
          &#xff38;
        </button>
      </div>
    </li>
  )
  }
  Task.propTypes = {
    task: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    handleConfirmation: PropTypes.func.isRequired,
    handleEditing: PropTypes.func.isRequired,
    setTask: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
  }

export default Task;
