import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL, DEV_TOKEN } from '@env';

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      let token = await AsyncStorage.getItem('token') || DEV_TOKEN;
      
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('토큰 가져오기 실패:', error);
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      // 401 에러 처리 (인증 실패)
      if (error.response?.status === 401) {
        // 토큰 삭제
        await AsyncStorage.removeItem('token');
        console.log('⚠️ 토큰 만료 또는 인증 실패 - 로그인 필요');
        
        // 로그인 화면으로 이동하거나 에러 처리
        // 필요시 여기서 navigation.navigate('Login') 등을 호출
      }
      
      // 에러 로깅
      if (error.response) {
        console.error('API 에러:', {
          status: error.response.status,
          data: error.response.data,
          url: error.config.url,
        });
      } else if (error.request) {
        console.error('네트워크 에러:', error.message);
      } else {
        console.error('요청 설정 에러:', error.message);
      }
      
      return Promise.reject(error);
    }
  );
  
  export default axiosInstance;