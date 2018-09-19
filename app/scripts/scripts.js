var knobAngle = 0;
var w = 0;
var pink = true;

//
//
//
//                  Background color change with knob
$('#bgColor').on('click', function() {
    w = $(document).width();
    if(pink) {
        pink = false;
        $('body').css({ background: 'rgba(117, 216, 102, 0.32)' });
    } else {
        pink = true;
        $('body').css({ background: 'rgba(224, 172, 155, 0.25)' });
    }
});

//
//
//
//
//                          Lizard animation

var frames = document.getElementById('animation');
var frameCount = 7;
var lizId; // variable string to represent accurate image's html id
var i = 1; // increments to frameCount, while lizId goes 'l1' - 'l4'
$('div#animation').on('mousedown', function() {
    while(i < 4) {
        lizId = i;
        lizardDown(lizId);
        // console.log('i: ' + i + ' ~ lizId: ' + lizId);
        i++;
    }
}).on('mouseup', function() {
    while(i <= frameCount) {
        lizId = frameCount - (i - 1);
        lizardUp(lizId);
        // console.log('i: ' + i + ' ~ lizId: ' + lizId);
        i++;
    }
    // Reset iterators
    i = 1;
    lizId = i;
});

function lizardDown(lizId) {
    // console.log('in lizardDown()');
    $('#l' + lizId).css({ display: 'none' });
    $('#l' + (lizId + 1)).css({ display: 'block' });
}

function lizardUp(lizId) {
    // console.log('in lizardUp()');
    $('#l' + lizId).css({ display: 'block' });
    $('#l' + (lizId + 1)).css({ display: 'none' });
}


//
//
//
//
//                  Validating form input data
//
//
//                          Form fields
var form = document.getElementsByTagName('form')[0];
var fname = document.getElementById('name');
var femail = document.getElementById('email');
var fone = document.getElementById('phone');
var fmessage = document.getElementById('message');

//                    Booleans for valid fields
var validName;
var validEmail;
var validPhone;
var validMessage;

//      RegExps
var nameRegExp = /^[a-zA-Z0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{4}/;
var simplePhoneRegExp = /^[0-9]{10}/;
//
//      For validation with .match()
var test;
//
//                          Email validation
//
femail.addEventListener("input", function() {
    test = emailRegExp.test(femail.value);
    if(test) {
        validEmail = true;
        // Show success / hide failure icons
        $('div.email i.success').css({ display: 'block' });
        $('div.email i.failure').css({ display: 'none' });
        // Reset button as active
        $('#submit').click(true);
    }
    if(!test) {
        validEmail = false;
        // $('div.email i.failure').css({ display: 'block' });
        $('div.email i.success').css({ display: 'none' });
    }
});

//
//
//                             Name validation
//
fname.addEventListener("input", function(event) {
    test = nameRegExp.test(fname.value);

    if(test) {
        validName = true;
        // Show success / hide failure icons
        $('div.name i.success').css({ display: 'block' });
        $('div.name i.failure').css({ display: 'none' });
        // Reset button as active
        $('#submit').click(true);
    } else {
        validName = false;
        $('div.name i.success').css({ display: 'none' });
    }
});

//
//
//                          Phone validation
fone.addEventListener("input", function(event) {
    test = phoneRegExp.test(fone.value);
    var test2 = simplePhoneRegExp.test(fone.value);

    if(test || test2) {
        validPhone = true;
        // Show success / hide failure icons
        $('div.phone i.success').css({ display: 'block' });
        $('div.phone i.failure').css({ display: 'none' });
        // Reset button as active
        $('#submit').click(true);
    } else {
        validPhone = false;
        $('div.phone i.success').css({ display: 'none' });
    }
});

//                          Message validation
fmessage.addEventListener("input", function() {
    var len = fmessage.value.length;

    if(len > 6) {
        validMessage = true;
        // Show success / hide failure icons
        $('div.message i.success').css({ display: 'block' });
        $('div.message i.failure').css({ display: 'none' });
        // Reset button as active
        $('#submit').click(true);
    } else {
        validMessage = false;
        $('div.message i.success').css({ display: 'none' });
    }
});

//                          Email message confirmation insert
$('#submit').on('click', function() {
    if(validName && validEmail && validPhone && validMessage) {
        $('div.submit button').css({ display: 'none' });
        $('div.submit h3').css({ display: 'block' });
        $('div.submit p').css({ display: 'block' });
    } else {
        $('div.submit button').css({ display: 'block' });
    }
});
