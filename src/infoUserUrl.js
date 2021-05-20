const infoUserUrl = 'https://rest-courses-api.herokuapp.com/api/v1/users/me'
                       
function getTraerDAtaUser (){
    return fetch( `${infoUserUrl}`)
    .then(res => res.json())
    .then(res => res)
   
}


export default{
    getTraerDAtaUser
}