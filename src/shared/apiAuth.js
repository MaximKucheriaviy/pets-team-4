import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

export const signup = async signupData => {
  const { data } = await instance.post('api/user/signup', signupData);
  instance.defaults.headers.common.authorization = ` ${data.token}`;
  return data;
};

export const login = async loginData => {
  const { data } = await instance.post('api/user/login', loginData);
  instance.defaults.headers.common.authorization = ` ${data.token}`;
  return data;
};

export const logout = async () => {
  const { data } = await instance.get('api/user/logout');
    instance.defaults.headers.common.authorization = " ";
  return data;
};

export const getCurrentUser = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('api/user/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};
 
export default instance;