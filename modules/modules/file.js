const file = require('fs');

const one = file.readFileSync('./file/file1.txt','utf8');
const two = file.readFileSync('./file/file2.txt','utf8');

file.writeFileSync('./file/reame.md',`hello am from node js
i have both ${one} :: ${two}`);

file.readFile("./file/file3.txt",'utf8',(err,data) => {
    if(err){
        console.log(err)
    }else {
        console.log(data)
    }
})

file.writeFile("./file/file4.md","Helllo",(err) => {
    if(err){
        console.log(err)
    }
});

const path = './file/user';

file.access(path, (error) => {
    if(error) {
        // if file doesnt exist
        // we create it
        file.mkdir(path, (err) => {
            if(err){
                console.log(err)
            }else{
                const newDir = `${path}/file.md`;
                file.writeFile(newDir, "Hello user", (errs) => {
                    if(errs){
                        console.log(errs)
                    }else{
                        console.log("success")
                    }
                })
            }
        })
    }
})