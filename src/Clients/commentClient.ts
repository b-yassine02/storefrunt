import axios from "axios";

axios.defaults.withCredentials = true;

export const BASE_API = process.env.REACT_APP_API_BASE;
export const COMMENTS_API = `${BASE_API}/api/comments`;

export interface Posts {
  _id: string;
  user_id: string;
  post_id: string;
  comment: string;
}

export const updateComment = async (comment: any) => {
  const response = await axios.put(`${COMMENTS_API}/${comment._id}`, comment);
  return response.data;
};

export const findAllComments = async () => {
  const response = await axios.get(`${COMMENTS_API}`);
  return response.data;
};

export const findCommentById = async (comment: any) => {
  const response = await axios.get(`${COMMENTS_API}/${comment._id}`);
  return response.data;
};

export const findCommentsByUserId = async (userId: any) => {
  const response = await axios.get(`${COMMENTS_API}/user/${userId}`);
  return response.data;
};

export const findCommentsByPostId = async (postId: any) => {
  const response = await axios.get(`${COMMENTS_API}/post/${postId}`);
  return response.data;
};

export const createComment = async (comment: any) => {
  const response = await axios.post(`${COMMENTS_API}`, comment);
  return response.data;
};

export const deleteComment = async (comment: any) => {
  const response = await axios.delete(`${COMMENTS_API}/${comment._id}`);
  return response.data;
};
