import { Constants } from "../utils/constants";

const headers = {
    method: Constants.METHOD_GET,
    headers: {
        Accept: 'application/json',
    }
}

export const fetchJson = async (url: string) => {
    const response = await fetch(url,headers);
    return response.json();
}

export const fetchRequest = async (url: string) => {
    const response = await fetch(url, headers).then((data) => data);
    return response.text();
}

export const checkImage = async (url: string) => {
    return fetch(url, headers).then((response) => {
        if (response.ok) {
            return url
        } else if (response.status === 404) {
            return Promise.reject(undefined)
        } else {
            return Promise.reject(undefined)
        }
    }).catch(() => { return undefined });
}