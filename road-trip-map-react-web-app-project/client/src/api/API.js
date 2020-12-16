const API_URL = "https://road-trip-map-mern.herokuapp.com";
// const API_URL = window.location.hostname === "localhost" ? "http://localhost:4000" : "https://road-trip-map-mern.herokuapp.com" ;


export async function listLogEntries(){
const response = await fetch(`${API_URL}/api/logs`);
// const json = await response.json();
return response.json();
}


export async function createLogEntries(entry){
    const api_key = entry.api_key;
    delete entry.api_key;
    const response = await fetch(`${API_URL}/api/logs`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-API-KEY': api_key, 
      },
      body: JSON.stringify(entry),
    });
    // const json = await response.json();
    // return response.json();
    let json;
  if (response.headers.get('content-type').includes('text/html')) {
    const message = await response.text();
    json = {
      message,
    };
  } else {
    json = await response.json();
  }
  if (response.ok) {
    return json;
  }
  const error = new Error(json.message);
  error.response = json;
  throw error;
    }