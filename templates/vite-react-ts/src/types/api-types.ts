export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
}

export interface ApiErrorResponse {
  success: false;
  error: any;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;
