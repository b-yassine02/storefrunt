import axios from "axios";

axios.defaults.withCredentials = true;

export const BASE_API = process.env.REACT_APP_API_BASE;
export const PROFILE_API = `${BASE_API}/api/profiles`;

export interface ProfileType {
  _id: string;
  user_id: string;
  profile_pic: string;
  description: string;
  followers: [string];
  following: [string];
}

export const createProfile = async (profile: any) => {
  const response = await axios.post(`${PROFILE_API}`, profile);
  return response.data;
};

export const updateProfile = async (profile: any) => {
  const response = await axios.put(`${PROFILE_API}/${profile._id}`, profile);
  return response.data;
};

export const getProfileFollowerCount = async (profile: any) => {
  const response = await axios.put(
    `${PROFILE_API}/follower/${profile._id}`,
    profile
  );
  return response.data;
};

export const getProfileFollowingCount = async (profile: any) => {
  const response = await axios.put(
    `${PROFILE_API}/following/${profile._id}`,
    profile
  );
  return response.data;
};

export const findProfileByUserId = async (profile: any) => {
  const response = await axios.get(`${PROFILE_API}/user/${profile.user_id}`);
  return response.data;
};

export const findProfileById = async (profile: any) => {
  const response = await axios.get(`${PROFILE_API}/${profile._id}`);
  return response.data;
};

export const findAllProfiles = async () => {
  const response = await axios.get(`${PROFILE_API}`);
  return response.data;
};
