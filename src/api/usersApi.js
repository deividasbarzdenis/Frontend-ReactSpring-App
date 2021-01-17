import HTTP from './'

export const fetchUsers = () => HTTP.get('/users');

export const addUser = (user) => HTTP.post('/users', user);

export const deleteUser = (id) => HTTP.delete(`/users/${id}`);