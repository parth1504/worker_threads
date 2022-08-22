const {parentPort} = require("worker_threads");

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
 
function name(name) {
    return new Promise(resolve => console.log(name));
}

parentPort.on("message", data => {

  if(data.num){
    parentPort.postMessage({num: data.num});
    delay(data.num).then(() => console.log(`runs after ${data.num} seconds`));
  }
  if(data.name){
    parentPort.postMessage({name: data.name});
    name(data.name).then(()=> console.log("working"))
  }

});

