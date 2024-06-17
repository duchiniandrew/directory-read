const fs = require('fs')
const dirTree = {}

fs.readdir(__dirname, (err, files) => {
    files.forEach(file => {
        readDirRecursive(__dirname + "/" + file, __dirname)
    });
});

function readDirRecursive(folderName, folder) {
    fs.readdir(folderName, (err, files) => {
        if (files) {
            files.forEach(file => {
                dirTree.folder =
                folder = folder + "/" + file;
                return readDirRecursive(folderName + "/" + file, folder)
            });
        } else {
            const result = {
                path: folder,
                size: fs.statSync(folderName).size,
                fileName: folderName.split("/").pop(),
            }
            console.log(result)
            return result
        }
    });
}