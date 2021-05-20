const courseUrl ='https://rest-courses-api.herokuapp.com/api/v1/courses'

function getCourse (){
    return fetch( `${courseUrl}`)
    .then(res => res.json())
    .then(res => res.data)
    .catch(error => console.log(error))
    
   
}


export default{
    getCourse
}