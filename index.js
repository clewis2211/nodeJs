console.log('hellow world');
const fs = require('fs');
const path = require('path');
const requestPromise = require('request-promise');
const platypusTS = require('platypus');



const pathJoin = path.join(__dirname,'blah.json');

// console.log(fs);
// console.log(pathJoin);
console.log(requestPromise);



fs.readFile(pathJoin, 'utf-8', (err, data) => {
    if(err){
        return
    } else{
        console.log(data);
    }

    const parsedData = JSON.parse(data);

    const newBlah = {
        name: 'blah2',
        description: 'i am blah2'
    }

    parsedData.push(newBlah);

    const stringifiedData = JSON.stringify(parsedData);
    
    fs.writeFile(pathJoin, stringifiedData, (err, success) => {
        console.log('its there');
    })
    

})

