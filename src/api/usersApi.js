import HTTP from './'

export const fetchUsers = () => HTTP.get('/users');

export const addUser = (user) => HTTP.post('/users', user);

export const updateUser = (id) => HTTP.post(`/users/${id}`);

export const deleteUser = (id) => HTTP.delete(`/users/${id}`);

export const getUserById = (id) => HTTP.get(`/users/${id}`);


