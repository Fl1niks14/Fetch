const SWAPI_ROOT = "https://www.swapi.tech/api/"
const SWAPI_PEOPLE = "people"

 export const getApiResourse = async (url) => {
	try {
		const res  = await fetch(url);
		if (!res.ok) {
			console.error('Not Fetch .' , res.status);
			return false
		}
		return await res.json();
	} catch (error) {
		console.error('Not Fetch .' , error.message);
		return false
	}
} 

(async () => {
	const body = await getApiResourse(SWAPI_ROOT+SWAPI_PEOPLE);
	console.log(body);
})();