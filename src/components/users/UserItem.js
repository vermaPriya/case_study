import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import EditUser from './EditUser';
import { connect } from 'react-redux';
import { deleteUser } from '../../actions/userActions';

const UserItem = ({ user, deleteUser }) => {
  const [editUserModal, setEditUserModal] = useState(false);
  const toggleEditUserModal = () => setEditUserModal(!editUserModal);

  const onDelete = () => {
    deleteUser(user.id);
  };

  return (
    <Fragment>
      <div className="card my-2">
        <div className="card-body d-flex justify-content-between">
          <div className="mt-1">
            {user.firstName} {user.lastName}
          </div>
          <div>
            <button className="btn btn-danger btn-sm ml-2" onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>

      <EditUser modal={editUserModal} toggle={toggleEditUserModal} />
    </Fragment>
  );
};

UserItem.propTypes = {
  deleteUser: PropTypes.func.isRequired,
};

export default connect(null, { deleteUser })(UserItem);
