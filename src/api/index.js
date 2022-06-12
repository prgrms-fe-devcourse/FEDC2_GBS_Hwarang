import axios from "axios";

const API_END_POINT = "http://kdt.frontend.2nd.programmers.co.kr:5001";

export const userLogin = async (email, password) => {
  const res = await axios.post(`${API_END_POINT}/login`, {
    email,
    password,
  });
  return res;
};

export const userSignUp = async (email, fullName, password) => {
  const res = await axios.post(`${API_END_POINT}/signup`, {
    email,
    fullName,
    password,
  });
  return res;
};

export const userLogout = async () => {
  await axios.post(`${API_END_POINT}/logout`);
};

export const userAuth = (token) => {
  return axios.get(`${API_END_POINT}/auth-user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
