const BASE_API_URL = "https://api-ecommerce-roan.vercel.app";

export async function fetcher(id:string){
    const res = await fetch(BASE_API_URL + id);
    const data = await res.json()
    
    
    return data
}