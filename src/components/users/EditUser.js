import React from 'react';
import { Modal } from 'reactstrap';

const EditUser = ({ modal, toggle }) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <div className="modal-body">
        <h2 className="text-center mb-4">Edit User</h2>

        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-danger btn-sm float-right ml-2">
              Cancel
            </button>
            <button className="btn btn-success btn-sm float-right">
              Update
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditUser;
