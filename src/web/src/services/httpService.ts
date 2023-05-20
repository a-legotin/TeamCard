import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    process.env.TEAMCARD_API === undefined ? `/api` : `${process.env.TEAMCARD_API}/api`,
  withCredentials: true
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    return Promise.reject(error);
  }
);

const httpService = {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete
};

export default httpService;