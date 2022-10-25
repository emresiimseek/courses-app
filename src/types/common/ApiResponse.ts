import { User } from '../User';

export interface ApiResponse<T = string> {
	result: T;
	successful: boolean;
	errors?: string[];
}
export interface LoginApiResponse extends ApiResponse {
	user: User;
}
