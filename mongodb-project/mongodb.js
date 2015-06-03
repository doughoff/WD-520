// mongodb.js 
var mongoose = require('mongoose');
var Person;

function startMongoose() {
    console.log('Starting startMongoose...');
    mongoose.connect('mongodb://localhost/WD-520');
    var db = mongoose.connection;
    db.on('error', function(err) {
        console.log('connection error', err);
    });
    db.once('open', function() {
        console.log('Yay! connected.');
    });
}

function createPersonModel() {
    console.log('Starting createPersonModel...');
    // create schema
    var personSchema = new mongoose.Schema({
        givenName: String,
        familyName: String,
        jobTitle: String,
        email: String,
        telephone: String,
        created: {
            type: Date,
            default: new Date()
        },
        updated: {
            type: Date
        }
    });

    // add some methods
    personSchema.methods.getFullName = function() {
        var fullName =
            (this.givenName || '(no first name)') + " " +
            (this.familyName || '(no last name)');
        return fullName;
    };

    personSchema.methods.showPerson = function() {
        var result =
            this.id + "\n\t" +
            this.getFullName() + "\n\t" +
            'Job: ' + (this.jobTitle || '(no job title)') + '\n\t' +
            'Email: ' + (this.email || '(no email)') + '\n\t' +
            'Telephone: ' + (this.telephone || '(no telephone)') + '\n\t' +
            'created: ' + this.created +
            (this.updated ? '\n\t' + 'updated: ' + this.updated : '') + '\n\n';
        console.log(result);
    };

    // lastly, turn the Schema + methods into a Model
    Person = mongoose.model('Person', personSchema);
}

function handleMyErrors(err) {
    if (err) return handleError(err);
}

function addTestData() {
    console.log('Starting addTestData...');
    // add some documents
    var doug = new Person({
        givenName: 'Doug',
        familyName: 'Hoff'
    });
    var douglas = new Person({
        givenName: 'Douglas',
        familyName: 'Adams'
    });
    var empress = new Person({
        givenName: 'Empress Dou'
    });
    var fred = new Person({
        givenName: 'Fred'
    });

    // persist the docs to MongoDB
    doug.save(handleMyErrors);
    douglas.save(handleMyErrors);
    empress.save(handleMyErrors);
    fred.save(handleMyErrors);
}

function showAllPeople() {
    console.log('Starting showAllPeople...');
    // no arguments in the 1st arg object of find will find all
    Person.find({}, function(err, docs) {
        if (err) {
            throw err;
        }
        if (docs.length) {
            docs.forEach(function(person, index) {
                console.log(index + ':');
                person.showPerson();
            });
        } else {
            console.log('No people were found to show.');
        }
    });
}

function updateAllDou() {
    console.log('Starting updateAllDou...');
    // using RegEx to do fuzzy search with case insensitivity
    // find specific with 'Dou'

    Person.update({
            givenName: /dou/i
        }, {
            updated: new Date()
        }, {
            multi: true
        },
        function(err, numberUpdated) {
            console.log('Updated %d documents.', numberUpdated);
        });
}

function purgePeople() {
    console.log('Starting purgePeople...');
    Person.find({}, function(err, docs) {
        if (err) {
            throw err;
        }
        if (docs.length) {
            docs.forEach(function(person) {
                person.remove({
                    id: person.id
                }, function(err) {
                    throw err;
                });
            });
            console.log('All people removed.');
        } else {
            console.log('No people were found to purge.');
        }
    });
}

//------------------------------------ controller section
startMongoose();
createPersonModel();
// addTestData();
purgePeople();
// updateAllDou();
setTimeout(function() {
    showAllPeople();
}, 1000);

//------------------------------------ clean up
setTimeout(function() {
    mongoose.connection.close();
}, 5000);
