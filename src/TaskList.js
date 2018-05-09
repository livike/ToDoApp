import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task'

const TaskList = props =>
    <ul className="list-group">
      {props.tasks.map((task,index)=>
      <Task
        key={index}
        task={task.task}
        isConfirmed={task.isConfirmed}
        isEditing={task.isEditing}
        handleConfirmation={() => props.toggleConfirmationAt(index)}
        handleEditing={() => props.toggleEditingAt(index)}
        setTask={ text => props.setTaskAt(text,index)} /> //closure
       )}
    </ul>;

    TaskList.propTypes = {
      tasks: PropTypes.array.isRequired,
      toggleConfirmationAt: PropTypes.func.isRequired,
      toggleEditingAt: PropTypes.func.isRequired,
      setTaskAt: PropTypes.func.isRequired,
    }

export default TaskList;
