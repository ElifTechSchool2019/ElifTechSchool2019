import usersDao from '../dataAccess/usersDao.js';

const getUsers = () => usersDao.getUsers();

const getUserById = (id) => usersDao.getUserById(id);

const getUserByEmail = (email) => usersDao.getUserByEmail(email);

const createUser = (user) => usersDao.createUser(user);

const updateUser = (id, user) => usersDao.updateUser(id, user);

const deleteUser = (id) => usersDao.deleteUser(id);

export default {
  getUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};
