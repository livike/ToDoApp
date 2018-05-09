import React, { Component } from 'react';
import './App.css';
import TaskList from './TaskList';

class App extends Component {

  state = {
    taskList : [
      {
        task: "My first task",
        isConfirmed: false,
      },
      {
        task: "My second task",
        isConfirmed: false,
      },
      {
        task: "Go to bed early",
        isConfirmed: false,
      },
    ],
  };

  toggleConfirmationAt = indexToChange =>
    this.setState({
      taskList: this.state.taskList.map((task, index)=>{
        if (index === indexToChange){
          return {
            ...task,
            isConfirmed: !task.isConfirmed
          };
        }
        return task;
      })
    });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">A simple To Do application</h1>
          <h4>built by Livia Dobai</h4>
        </header>
        <section className="container vert-offset-top-2">
		  	     <div id="todoBox" className="todoBox col-xs-6 col-xs-offset-3">
               <div className="well">
                 <h1 className="vert-offset-top-0">My To do's:</h1>
                 <TaskList
                   tasks={this.state.taskList}
                   toggleConfirmationAt={this.toggleConfirmationAt}
                  />
                  <div className="commentForm vert-offset-top-2">
             				<hr />
             				<div className="clearfix">
             					<form className="todoForm form-horizontal">
             						<div className="form-group">
             							<label htmlFor="task" className="col-md-3 control-label">New Task</label>
             							<div className="col-md-9">
             								<input type="text" id="task" ref="task" className="form-control" placeholder="What do you need to do?" />
             							</div>
             						</div>
             						<div className="row">
             							<div className="col-md-10 col-md-offset-2 text-right">
             								<input type="submit" value="Save Task" className="btn btn-primary" />
             							</div>
             						</div>
             					</form>
             				</div>
             			</div>
               </div>
             </div>
		    </section>
      </div>
    );
  }
}

export default App;
