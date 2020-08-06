import React, { Component } from 'react';

import * as Routes from '../../utils/Routes';

class Show extends Component {
  render() {
    const { task } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <h2 className="py-3">
            Task Details
          </h2>
          <div className="row">
            <div className="col-md-10">
              {task.id}{" "}{task.description}
              <a className="ml-2 btn btn-sm btn-warning" href={Routes.edit_task_path(task.id)}>
                Edit
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Show;