import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'reactstrap';
import { connect } from 'react-redux';
import { addUser } from '../../actions/userActions';

const AddUser = ({ modal, toggle, addUser }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    addUser(user);
    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <div className="modal-body">
        <h2 className="text-center mb-4">To do list</h2>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-danger btn-sm float-right ml-2">
              Cancel
            </button>
            <button className="btn btn-success btn-sm float-right">Add</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

AddUser.propTypes = {
  addUser: PropTypes.func.isRequired,
};

export default connect(null, { addUser })(AddUser);
