//1. display text 'srinath b' in myfirstname div
//2. display text  'lastname' in mylastname div
//3. add error message like 'you are not authorized to view this page' in red color
//function init() {
    document.getElementById('myfirstname').innerHTML = 'Srinath Sss';

document.getElementsByName('mylastname')[0].innerHTML = 'Sirisetti';

var ele = document.getElementsByClassName('cusomerrormessage');
ele[0].innerHTML = 'you are not authorized to view this page';
//ele.classList.add('myerror');

//validate the form on save button click
function validateFrom() {
    if (document.myForm.textUserName.value == "") {
        alert("Please enter username");
        document.myForm.textUserName.focus();
        return false;
    }
    if (document.myForm.textEmail.value == "") {
        alert("Please enter Email address");
        document.myForm.textUserName.focus();
        return false;
    }

    return (true);
}

document.cookie = 'username=srinath';  // set the value

var loggedinusername = document.cookie['username']

//}

//init();



document.writeln('hello');
document.writeln(parseFloat('55.3') * 2);
document.writeln(parseInt('55.3'));
document.writeln(Number('55.3'));

document.writeln(String(1.25));
document.writeln(Boolean(1.25));

var option = 220;
switch (option) {
    case 1:
        alert('option 1 selected');
        break;
    case 20:
        alert('option 20 selected');
        break;
    default:
        alert('option doesnt match');
}

var max_iterations = 10;
for (var i = 0; i < max_iterations; i++) {
    document.writeln('value :' + i);
}

document.write('55.3' * 2);
var strvl = '55.3';
if (parseFloat(strvl) === 55.3) {
    alert('Values are equal');
}

// get element by id

var element = document.getElementById('error');
element.innerHTML = "Error msg";

var student = {
    Name: 'srinath',
    Address :'US'
};

var studemts = [];
studemts.push(student);
studemts.pop(student);
studemts.concat();

function display() {
    console.log('value from function');

    // types
    var obj = {};
    var num = 1;
    var value = "srinath";
    var var1;
    if (var1 != undefined) {
        // code
    }
    return 'hello from function';
}

function add(Number1, Number2) {
    alert(Number1 + Number2);
}
//global variables
var globalAmount = 500;
function calculate() {
    var localResult;
    console.log(globalAmount);
    console.log(localResult);
}

// arrays

var names = new Array(10);
names[0] = 'hyderabad';
names[2] = 'eluru';
names[5] = 'telangana';

console.log('<br> names[0]' + names[0]);
console.log('<br> names[4]' + names[4]);


// event

function displaymsg() {
    var msgele = document.getElementById('msg');
    msgele.innerHTML = document.getElementById('txtFirstName').value;
    if (document.getElementById('txtLastName').value != '') {
        msgele.innerHTML = document.getElementById('txtLastName').value;
    }
}

// type conversion

var date2 = new Date();

var date = new Date(2015, 06, 28, 9, 9, 23, 99);

console.log(date2);
console.log(date);

date.getUTCDate();

// regular express

re = /[-]/;
target = "254-96-9163";
result = target.split(re);

// Regular Expression Functions

rexp = /at/
if (rexp.test("catalog")) {
    document.write("found!<br>");
} else {
    document.write("not found!<br>");
}

rexp = /at/
document.write("catalog".match(rexp));
document.write("<br>");

rexp = /at/
document.write("catalog".search(rexp));


