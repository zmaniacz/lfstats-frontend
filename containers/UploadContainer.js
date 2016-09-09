import React, {Component, PropTypes} from 'react';
import { Table, Button } from 'react-bootstrap';
import Dropzone from 'dropzone';

class UploadContainer extends Component {
  render() {
    return (
      <Table  striped className="files" id="previews">
        <div id="template" className="file-row">
          <div>
              <span className="preview"><img data-dz-thumbnail /></span>
          </div>
          <div>
              <p className="name" data-dz-name></p>
              <strong className="error text-danger" data-dz-errormessage></strong>
          </div>
          <div>
              <p className="size" data-dz-size></p>
              <div className="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                <div className="progress-bar progress-bar-success" style="width:0%;" data-dz-uploadprogress></div>
              </div>
          </div>
          <div>
            <Button bsStyle="primary">
                <i class="glyphicon glyphicon-upload"></i>
                <span>Start</span>
            </Button>
            <button data-dz-remove class="btn btn-warning cancel">
                <i class="glyphicon glyphicon-ban-circle"></i>
                <span>Cancel</span>
            </button>
            <button data-dz-remove class="btn btn-danger delete">
              <i class="glyphicon glyphicon-trash"></i>
              <span>Delete</span>
            </button>
          </div>
        </div>
      </Table>
    );
  }
}

export default UploadContainer;