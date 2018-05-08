import React from 'react';

const TaskList = props => <ul className="list-group">
      <li className="list-group-item clearfix">
       <label> <input type="checkbox" /></label>
        <span>This is a hardcoded task</span>
        <div className="pull-right" role="group">
          <button type="button" className="btn btn-xs btn-warning img-circle">&#x270e;</button>
          <button type="button" className="btn btn-xs btn-danger img-circle" >&#xff38;</button>
        </div>
      </li>
     </ul>

export default TaskList;
