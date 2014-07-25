// json-file-storage.js

// load modules
var fileSystem = require('fs');
var path = require('path');

// initialize variables
var args = process.argv.splice(2);
var operation = args.shift();
var itemToStore = args.join(' ');
var node = process.argv[0] + ' ';
var programName = path.basename(process.argv[1]);
var datafile = path.join(process.cwd(), '/items.json');

// show data on console
console.log('operation = ' + operation);
console.log('item to store = ' + itemToStore);
console.log('datafile = ' + datafile);
console.log('Usage: ' + node + programName + ' list | add  [item] [...]');
console.log('----------------------------------------------------------');

// process operation - expect 1st word after program name
switch (operation) {
    case 'list':
        console.log('Listing...');
        listItems(datafile);
        break;
    case 'add':
        console.log('Saving...');
        addItem(datafile, itemToStore);
        break;
    default:
        console.warn('Didn\'t understand what to do.');
}

function loadOrInitializeTaskArray(filePath, callback) {
    // does file exist?
    fileSystem.exists(filePath, function(exists) {
        var itemsInFile = []; // empty array to store data in file
        if (exists) {
            fileSystem.readFile(filePath, 'utf8', function(err, fileData) {
                if (err) throw err;
                // send back JSON data or nothing if it can't be parsed
                var itemsFromFileInJSON = JSON.parse(fileData.toString() || '[]');
                callback(itemsFromFileInJSON);
            });
        } else {
            // send back empty array
            callback([]);
            console.log('No items in file so far...');
        }

    });
}

function listItems(filePath) {
    loadOrInitializeTaskArray(filePath, function(itemsFromFileInJSON) {
        for (var i in itemsFromFileInJSON) {
            console.log(itemsFromFileInJSON[i]);
        }
    });
}

function storeItems(filePath, itemsFromFileInJSON) {
    fileSystem.writeFile(filePath, JSON.stringify(itemsFromFileInJSON), 'utf8', function(err) {
        if (err) throw err;
        console.log('File saved.');
    });
}

function addItem(filePath, itemToAdd) {
    loadOrInitializeTaskArray(filePath, function(itemsFromFileInJSON) {
        itemsFromFileInJSON.push(itemToAdd);
        storeItems(filePath, itemsFromFileInJSON);
    });
}
