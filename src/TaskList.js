import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task'

const TaskList = props =>
    <ul className="list-group">
      {props.tasks.map((task,index)=>
      <Task key={index} task={task.task} isConfirmed={task.isConfirmed} />
       )}
    </ul>;

    TaskList.PropTypes = {
      tasks: PropTypes.array.isRequired,
      toggleConfirmationAt: PropTypes.func.isRequired,
    }

export default TaskList;
