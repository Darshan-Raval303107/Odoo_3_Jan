import api from '../services/api';

// --- existing functions (keep them as they are) ---
export const getProfile = async (userId) => {
  const res = await api.get(`/profile/${userId}`);
  return res.data;
};

export const updateProfile = async (userId, data) => {
  const res = await api.put(`/profile/${userId}`, data);
  return res.data;
};

// --- new Gemini API call ---
export const sendChatMessage = async (message) => {
  const res = await api.post("/ai/chat", { message });
  return res.data;
};
