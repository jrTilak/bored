import { ApiResponse } from "@/types/api-types";
import ApiUtils from "@/utils/api-utils";
import axios from "axios";

class HelloApi {
  /**
   * Retrieves a greeting message from the backend API.
   * @returns A promise that resolves to an ApiResponse containing the greeting message.
   */
  public static async sayHello(): Promise<ApiResponse<JSON>> {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/hello`);
      const respose: ApiResponse<JSON> = {
        success: true,
        data: res.data,
      };
      return respose;
    } catch (err) {
      return ApiUtils.handleApiResponseError(err);
    }
  }
}
export default HelloApi;
