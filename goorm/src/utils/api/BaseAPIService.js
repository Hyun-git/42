import axios from 'axios';

const NASA_BASE_API_URL = 'https://images-api.nasa.gov';

class BaseAPIService {
	baseHTTP;
	
	constructor() {
		this.baseHTTP = axios.create({
			baseURL: `${NASA_BASE_API_URL}/`,
			timeout: 100000,
			headers: {
				'Content-type': 'application/json',
			},
			withCrendentials: true,
		})
	}
	
	handleAPIBaseResponse(response) {
		return response.data;
	}
	
	handleAPIBaseError(error) {
		console.log(error);
		if (axios.isAxiosError(error)) {
			// Access to config, request, response
			throw new Error(error);
		} else {
			// Stock error
			throw new Error(error);
		}
	}
}

export default BaseAPIService;