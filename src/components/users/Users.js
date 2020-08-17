import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/userActions';

import UserItem from './UserItem';
import AddUser from './AddUser';

const Users = ({ users, getUsers }) => {
  const [addUserModal, setAddUserModal] = useState(false);
  const toggleAddUserModal = () => setAddUserModal(!addUserModal);

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className="d-flex justify-content-between align-items-center">
        <h1>To do list</h1>
        <button className="btn btn-primary mb-2" onClick={toggleAddUserModal}>
          Add New
        </button>
      </div>

      {users && users.map((user) => <UserItem key={user.id} user={user} />)}

      <AddUser modal={addUserModal} toggle={toggleAddUserModal} />
    </Fragment>
  );
};

Users.propTypes = {
  users: PropTypes.array,
  getUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.user.users,
});

export default connect(mapStateToProps, { getUsers })(Users);
