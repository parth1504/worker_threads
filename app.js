const express = require("express");

const app= express();

const {Worker} = require("worker_threads");

const worker1 = new Worker("./worker.js");

worker1.on("message", result => {
  console.log("thread1");
});

worker1.on("error", error => {
  console.log(error);
});

app.get("/",(req,res)=>{
    worker1.postMessage({num: 3000});
    res.send("working")
})

app.get("/n/:na",(req,res)=>{
    name1= req.params.na
    worker1.postMessage({name:name1});
    res.send("working")
})

/*worker1.postMessage({num: 5000});
*/


app.listen(3000,()=>{
    console.log("runnning")
})