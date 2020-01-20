var adodb = require('node-adodb');
var express = require('express');
var router = express.Router();
const readline = require('readline-sync');

adodb.debug = true;

var conn = adodb.open("Provider=Microsoft.ACE.OLEDB.12.0 ; Data Source=F:\\NodeJS\\Programs\\Mini Project 2018-19\\Colosseum2O18.accdb ; Persist Security Info=False");
console.log("Description: Welcome to \"VolunDB\". This is an all purpose Database Managment System of all your event volunteers.");
console.log("Select your operation:\n1. Department wise sorting\n2. Category wise Sorting\n3. Get Immediate contact info\n4. Exit\n(Enter Choice via Serial Number...\): ");
var ch = readline.question("");

    switch (ch) {
        case "1": {
            var dept = readline.question("Enter the Department short name(Eg: CSE, ISE, Mech etc..): ");
            var catg = readline.question("Which Category of Volunteers?\n1. Events\n2. Stage\n3. Finance\n4. Sports\n5. Hospitality\n(Input the case name only) ");
            write3(catg, "Dept", dept);
            module.exports = router;

        } break;
        case "2": {
            var catg = readline.question("Which Category of Volunteers?\n1. Events\n2. Stage\n3. Finance\n4. Sports\n5. Hospitality\n(Input the case name only) ");
            write1(catg);
            module.exports = router;

        } break;
        case "3": {
            var catg = readline.question("Which Category of Volunteers?\n1. Events\n2. Stage\n3. Finance\n4. Sports\n5. Hospitality\n(Input the case name only) ");
            if (catg == "Events") {
                var ename = readline.question("Enter the event name: ");
                write3("Events", "Type", ename);
                module.exports = router;

            }
            else {
                var name = readline.question("Enter Name of the volunteer: ");
                write3(catg, "Name", name);
                module.exports = router;

            }
        } break;
        case "4": process.exit(0);
    }


function write3(tabl, type, cond ) {
    router.get('/', function (req, res, next) {
        conn
            .query("SELECT * FROM " + tabl + " where " + type + "= '" + cond + "' ;")
            .then(data => {
                console.log("Displaying your result...");
                res.render('index', { title: 'VolunDB', dat: data, catg: type, filt: cond });
            })
            .catch(error => {
                console.log(error);
            })
    });
}

function write1(tabl) {
    router.get('/', function (req, res, next) {
        conn
            .query("SELECT * FROM " + tabl + " ;")
            .then(data => {
                res.render('index', { title: 'VolunDB', dat: data, catg: tabl, filt: 'NIL' });
            })
            .catch(error => {
                console.log(error);
            })
    });
}