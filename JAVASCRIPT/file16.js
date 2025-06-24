// //promise
// const f1 = () =>{
//     setTimeout(()=>{
//         return 5;
//     },1000);
    // return 5;
    
// }

// const f2 = (x) =>{
//     console.log(x+6);
// }

// const n = f1(); 5
// f2(n);


const f1 = (a) =>{
    return new Promise((resolve,reject)=>{
       if(a < 0) reject("Invalid Input");
       else resolve(a);
    });
};

const f2 = (x)=>{
    console.log(x+6);
}

f1(1)
.then((n)=>f2(n))
.catch((err)=>console.log(err));


// https://jsonplaceholder.typicode.com/users

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())
// .then((data)=>{
//     // console.log(data[0].name);
//     data.forEach(val => {
//         console.log(val.name," ",val.address.geo.street);
//     });
// })
// .catch((err)=>console.log(err));

const fetchData = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    data.forEach(val => {
        console.log(val.name);
    });
}

fetchData();
