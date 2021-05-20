


function getdWeb (coursesUrl){
    const dWebUrl = `https://rest-courses-api.herokuapp.com/api/v1/courses/${coursesUrl}`
                    
    return fetch( `${dWebUrl}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => console.log(error))    
   
}

export default{
    getdWeb
}