import React from 'react';
import PropTypes from 'prop-types';

const Task = props =>

      <li className="list-group-item clearfix">
       <label> <input
                type="checkbox"
                checked={props.isConfirmed}
                onChange= {props.handleConfirmation} />
      </label>
        <span>{props.task}</span>
        <div className="pull-right" role="group">
          <button type="button" className="btn btn-xs btn-warning img-circle">&#x270e;</button>
          <button type="button" className="btn btn-xs btn-danger img-circle" >&#xff38;</button>
        </div>
      </li>

    Task.propTypes = {
      task: PropTypes.string.isRequired,
      isConfirmed: PropTypes.bool.isRequired,
      handleConfirmation: PropTypes.func.isRequired,
    }

export default Task;
