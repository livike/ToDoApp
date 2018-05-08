import React from 'react';
import PropTypes from 'prop-types';

const TaskList = props =>
    <ul className="list-group">
      {props.tasks.map((task,index)=>
      <li key={index} className="list-group-item clearfix">
       <label> <input type="checkbox" checked={task.isMarked}/></label>
        <span>{task.task}</span>
        <div className="pull-right" role="group">
          <button type="button" className="btn btn-xs btn-warning img-circle">&#x270e;</button>
          <button type="button" className="btn btn-xs btn-danger img-circle" >&#xff38;</button>
        </div>
      </li>)}
    </ul>;

    TaskList.PropTypes = {
      tasks: PropTypes.array.isRequired,
    }

export default TaskList;
