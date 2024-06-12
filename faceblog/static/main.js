
var mYstatus = document.getElementById('status')
var homeuser = document.getElementById('homeuser')
var schooluser = document.getElementById('schooluser')
var workuser = document.getElementById('workuser')
var etcuser = document.getElementById('etcuser')

homeuser.onclick = function() {
    mYstatus.innerHTML = "Home User";
}

schooluser.onclick = function() {
    mYstatus.innerHTML = "School User";
}

workuser.onclick = function() {
    mYstatus.innerHTML = "Work User";
}

etcuser.onclick = function() {
    mYstatus.innerHTML = "etc. User";
}
