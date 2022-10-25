const BASE_API_URL = "https://api-ecommerce-roan.vercel.app";

export async function fetcherGet(id:string){
    const res = await fetch(BASE_API_URL + id);
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
