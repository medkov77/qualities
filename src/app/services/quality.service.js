import httpService from "./http.service";
const qualityEndPoint = "quality/";
const uodateQuality = async (content) => {
  try {
    const { data } = await httpService.put(qualityEndPoint, content);
    return data;
  } catch (error) {
    console.log("expected error");
  }
};
const getQuality = async (id) => {
  try {
    const { data } = await httpService.get(qualityEndPoint);
    return data;
  } catch (error) {
    console.log("expected error");
  }
};

const qualityService = {
  update: async (id, content) => {
    const { data } = await httpService.put(qualityEndPoint + id, content);
    return data;
  },
  get: async (id) => {
    const { data } = await httpService.get(qualityEndPoint + id);
    return data;
  },
};
