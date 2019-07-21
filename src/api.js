import { API_URL } from "@/config";

export function ApiService(action = "", id = null) {

    var ressource


    switch (action) {

        case "getbreweries":
            ressource = ""
            break;

        case "getbrewerybyid":
            ressource = id
            break;
    }

    return fetch(API_URL.concat(ressource), {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}

export default ApiService;
