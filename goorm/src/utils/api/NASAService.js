import BaseAPIService from './BaseAPIService';

class NASAService extends BaseAPIService {
	fetchDataFromKeyword({ keyword, index }) {
		return this.baseHTTP
					.get(`search?q=${keyword}&media_type=image&page=${index}`)
					.then(BaseAPIService.handleAPIBaseResponse)
					.catch(BaseAPIService.handleAPIBaseError);
	}
}

export default new NASAService();