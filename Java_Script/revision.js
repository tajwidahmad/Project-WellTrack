// console("enter a number");
// console.log("hello again")
// console.log("hello ahmad")
// console.log("in my system...")
// function addtodb(data){
//     let internet_speed=Math.floor(Math.random()*10)+1;
//     if(internet_speed>4){
//         console.log("Data push successfull..",data)

//     }
//     else{
//         console.log("uhh, data speed is slow")
//     }
// }
function add_to_db(data){
    return new Promise((resolve,reject)=>{
        let internet_speed=Math.floor(Math.random()*10)+1;
        if(internet_speed>4){
            resolve("the data was saved..")
        }
        else{
            reject("sorry the data was not saved...")
        }
    })
}