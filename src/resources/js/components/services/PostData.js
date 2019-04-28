export function PostData(type, userData){
    let BaseUrl = 'http://127.0.0.1:8000/asshai';

    return new Promise((resolve, reject)=>{
        fetch(BaseUrl+type,{
            method:'POST',
            body: JSON.stringify(userData)
        })
        .then((response)=>response.json())
        .then((responseJson)=> {
            resolve(responseJson);
        })
        .catch((error)=>{
            reject(error);
        });
        
    });
}