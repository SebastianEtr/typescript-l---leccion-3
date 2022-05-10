






























/*
//actividad 3

//Ejercicio 1 falta

const myPromise = new Promise((resolve) => {
    resolve (1)  
})
myPromise.then((value) => {
  console.log(value) // log: 1
})






//ejercicio 2 listo

const myPromise = new Promise((resolve) => {
    resolve(1)  
   
  })
  
  myPromise.then((value:any) => {
   console.log(value + 1)  // log: 2
  })

*/


/*

  //ejercicio 3 listo

  const myPromise = new Promise((resolve, reject) => {
    resolve(1)  
  })
  
  myPromise
    .then((value:any) => {
      return value + 2
    })
    .then((value) => {
     console.log(value + 1) // log: 4
    })



    //ejercicio 4

    const myPromise = new Promise((resolve, reject) => {
        reject('Error: Operation Failed')  
      })
      
      myPromise
        .catch((err) => {
         console.log(err) // log: 'Error: Operation Failed'
        })


        
        //ejercicio 5

        const callback1 = (value:any) => console.log('Esto es un texto:', value)
        const callback2 = (value:any) => console.log('Esto es un numero:', value)

        const myPromise = new Promise((resolve) => {
          setTimeout(() => {
            resolve(2)
             }, 1000) 
              })



              myPromise.then(callback2) // log: Esto es un numero: 2
              
              
/*
              
           
            */
















//actividad 4 parte 1

//ejercicio 1
/*
const mypromise = new Promise ((res, rej) => {
setTimeout(() => {
   res ('Success') 
}, 850)
})

async function getResult(){
    const result = await mypromise
    console.log('result:', result);
    
}
getResult()


//ejercicio 2
const mypromise = new Promise((Success, reject) => {
    setTimeout(() => {
        Success(1)
    }, 1000);
})
async function getResult() {
    const result: any = await mypromise
    const result2 = result + 2 
    console.log('Result:', result2);

}
getResult()



//ejercicio 3

const mypromise = new Promise((Success, reject) => {
    setTimeout(() => {
        Success(1)
    }, 1000);
})

async function getResult() {
    const result:any = await mypromise
    const result2 = result + 2
    return result2
    
}
getResult().then((result) => {
    console.log('Result:', result);

  
})


//ejercicio 4

const mypromise = new Promise((Success, reject) => {
    setTimeout(() => {
        reject ('error!')
    }, 1000);    
    
})

async function getResult() { 
    
try {
    const result = await mypromise
    console.log(result); 
} catch (err){
    console.error(err);
    
}
    
}
getResult()





//parte2

//ejercicio 1
const mypromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve ('success')
    }, 500)
})


async function getResult() {
    const result:any = await mypromise
    const result2 = result 
    console.log('this is a', result2);
    
}

getResult()



//ejercicio 2

const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() >= 0.5) {
            resolve (1)
        }else {
            reject ('An error has occurred')
        }
    }, 500)
})


async function getResult() { 
    
    try {
        const result:any = await mypromise
        const result2:any = result + 1 
        
        console.log(result2);
        
    } catch (err){
        console.log(err);
        
    } finally{

    }
        
    }
    getResult()
    */ 