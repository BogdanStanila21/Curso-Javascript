const ejemploPromises = new Promise ( (resolve, reject)=>{

    const promesa = true;

    if(promesa) {
        resolve('Promesa resuelta')
    } else{
        reject('La promesa no se resolvió')
    }
})


// ejemploPromises
//     .then( resultado =>{
//         console.log(resultado)
//     })
//     .catch (error =>{
//         console.log(error)
//     })

//De Callback Hell a promises

const paises = [];

const nuevoPais = pais => new Promise ( (resolve) =>{
    setTimeout(()=>{
        paises.push(pais);
        resolve(`Hemos agregado el pais : ${pais}`)
    }, 2000)
})

nuevoPais('España')
    .then ( resultado =>{
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Alemania')
    })
    .then ( resultado =>{
        console.log(resultado);
        console.log(paises);
        return nuevoPais ('Francia')
    })
    .then ( resultado => {
        console.log(resultado);
        console.log(paises);
    })