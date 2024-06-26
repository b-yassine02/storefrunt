import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";
axios.defaults.headers.delete["Content-Type"] = "application/json";
axios.defaults.headers.get["Content-Type"] = "application/json";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.put["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.delete["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.get["Access-Control-Allow-Methods"] =
  "GET,PUT,POST,DELETE,PATCH,OPTIONS";
axios.defaults.headers.get["Access-Control-Allow-Headers"] =
  "Content-Type, Authorization, Content-Length, X-Requested-With";
axios.defaults.headers.get["Access-Control-Allow-Credentials"] = "true";
axios.defaults.headers.get["Access-Control-Max-Age"] = "86400";

export const BASE_API = process.env.REACT_APP_API_BASE;
export const USERS_API = `${BASE_API}/api/users`;

export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  role: string;
}

export const signin = async (credentials: User) => {
  const response = await axios.post(`${USERS_API}/signin`, credentials);
  return response.data;
};

export const profile = async () => {
  const response = await axios.post(`${USERS_API}/profile`);
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axios.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await axios.get(`${USERS_API}`);
  return response.data;
};

export const findUserById = async (user: any) => {
  const response = await axios.get(`${USERS_API}/${user._id}`);
  return response.data;
};

export const findUserByUsername = async (user: any) => {
  const response = await axios.get(`${USERS_API}/username/${user.username}`);
  return response.data;
};

export const findUserByEmail = async (user: any) => {
  const response = await axios.get(`${USERS_API}/email/${user.email}`);
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axios.post(`${USERS_API}`, user);
  return response.data;
};

export const deleteUser = async (user: any) => {
  const response = await axios.delete(`${USERS_API}/${user._id}`);
  return response.data;
};

export const signup = async (user: any) => {
  const response = await axios.post(`${USERS_API}/signup`, user);
  return response.data;
};

export const signout = async () => {
  const response = await axios.post(`${USERS_API}/signout`);
  return response.data;
};
