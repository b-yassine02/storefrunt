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
export const POSTS_API = `${BASE_API}/api/posts`;

export interface Post {
  _id: string;
  user_id: string;
  post_title: string;
  post_description: string;
  post_image: string;
  post_link: string;
  post_price: string;
  post_likes: string[];
  post_created: Date;
}

export const updatePost = async (post: any) => {
  const response = await axios.put(`${POSTS_API}/${post._id}`, post);
  return response.data;
};

export const findAllPosts = async () => {
  const response = await axios.get(`${POSTS_API}`);
  return response.data;
};

export const findPostById = async (post: any) => {
  const response = await axios.get(`${POSTS_API}/${post._id}`);
  return response.data;
};

export const findPostByUserId = async (post: any) => {
  const response = await axios.get(`${POSTS_API}/user/${post.user_id}`);
  return response.data;
};

export const createPost = async (post: any) => {
  const response = await axios.post(`${POSTS_API}`, post);
  return response.data;
};

export const deletePost = async (post: any) => {
  const response = await axios.delete(`${POSTS_API}/${post._id}`);
  return response.data;
};
