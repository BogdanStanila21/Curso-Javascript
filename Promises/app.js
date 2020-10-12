const ejemploPromises = new Promise ( (resolve, reject)=>{

    const promesa = true;

    if(promesa) {
        resolve('Promesa resuelta')
    } else{
        reject('La promesa no se resolvió')
    }
})


ejemploPromises
    .then( resultado =>{
        console.log(resultado)
    })
    .catch (error =>{
        console.log(error)
    })