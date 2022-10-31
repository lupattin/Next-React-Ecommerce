const BASE_API_URL = "https://api-ecommerce-roan.vercel.app";

export async function fetcherGet(id:string, token?:string){
    const res = await fetch(BASE_API_URL + id, {
        headers:{
            "Authorization": "Bearer " + token
        }
    });
    const data = await res.json()
    
    
    return data
}
export async function fetcherPost(id:string, body){
    
    const res = await fetch(BASE_API_URL + id, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body:JSON.stringify(body)
    });    
    const data = await res.json()
    
    return data
}
export async function fetcherPostWithoutBody(id:string, token){
    
    const res = await fetch(BASE_API_URL + id, {
        method: "POST",
        headers:{
            "Authorization": "Bearer " + token
        }
    });    
    const data = await res.json()
    
    return data
}
export async function fetcherPatch(id:string, body, token){
    
    const res = await fetch(BASE_API_URL + id, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
            "Authorization": "Bearer " + token
        },
        body:JSON.stringify(body)
    });    
    const data = await res.json()
    
    return data
}
