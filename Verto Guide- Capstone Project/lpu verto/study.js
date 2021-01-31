firebase.database().ref('/StudyMaterial').once('value',function(snapshot)
{
        snapshot.forEach(element => {
            console.log(element.key);
        });
});

var target;
var w;
function select()
{
    function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement; 
    }
    
    var ul = document.getElementById('test');
        ul.onclick = function(event) {
    target = getEventTarget(event);
      //  alert(target.innerText); 
        window.location.href = "study_course.html";
        w = target.innerText;
        localStorage.setItem("branch",w);
        //document.getElementById("branch").innerHTML = w;
    };
    var ul = document.getElementById('test1');
        ul.onclick = function(event) {
    target = getEventTarget(event);
        //alert(target.innerText);
        window.location.href = "study_course.html";
    w=target.innerText;
    localStorage.setItem("branch",w);
    };
    var ul = document.getElementById('test2');
    ul.onclick = function(event) {
   target = getEventTarget(event);
   window.location.href = "study_course.html";
    //alert(target.innerText);
    w=target.innerText;
    localStorage.setItem("branch",w);
    };
    var ul = document.getElementById('test3');
    ul.onclick = function(event) {
    target = getEventTarget(event);
    //alert(target.innerText);
    window.location.href = "study_course.html";
    w=target.innerText;
    localStorage.setItem("branch",w);
    };
    var ul = document.getElementById('test4');
    ul.onclick = function(event) {
     target = getEventTarget(event);
    //alert(target.innerText);
    window.location.href = "study_course.html";
    w=target.innerText;
    localStorage.setItem("branch",w);
    };
    var ul = document.getElementById('test5');
    ul.onclick = function(event) {
    target = getEventTarget(event);
    window.location.href = "study_course.html";
    //alert(target.innerText);
    w=target.innerText;
    localStorage.setItem("branch",w);
    };
    
}