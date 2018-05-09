import React from 'react';
import PropTypes from 'prop-types';

const Task = props =>

      <li className="list-group-item clearfix">
       <label> <input type="checkbox" checked={props.isConfirmed}/></label>
        <span>{props.task}</span>
        <div className="pull-right" role="group">
          <button type="button" className="btn btn-xs btn-warning img-circle">&#x270e;</button>
          <button type="button" className="btn btn-xs btn-danger img-circle" >&#xff38;</button>
        </div>
      </li>

    Task.PropTypes = {
      task: PropTypes.string.isRequired,
      isConfirmed: PropTypes.bool.isRequired,
    }

export default Task;