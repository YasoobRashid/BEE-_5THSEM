const fs = require('fs');

fs.readFile('../userdata.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    // console.log(data);

    const users= JSON.parse(data);
    console.log(users);

    // try{
    //     const users = JSON.parse(data);
    //     console.log(users);
    // }
    // catch(parseError){
    //     console.log(parseError);
    // }
});