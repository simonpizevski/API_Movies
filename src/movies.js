import fetch from "node-fetch";

const API  = 'https://plankton-app-xhkom.ondigitalocean.app/api';

export async function loadMovies() {
    const res = await fetch(API + '/movies');
    const payload = await res.json();
    const modifiedArray = payload.data.map((obj) => {
        return {
            id: obj.id,
            ...obj.attributes,
        };
    });
    return modifiedArray;
} 

export async function loadMovie(id) {
    const res = await fetch(API + '/movies/' + id);
    const payload = await res.json();
    
    return {
        id: payload.data.id, 
        ...payload.data.attributes,
    };
}
