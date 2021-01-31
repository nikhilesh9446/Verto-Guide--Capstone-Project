var w = localStorage.getItem("branch");
window.onload = function what(){
    document.getElementById('branch').innerHTML = w;
};
//document.getElementById("branch").innerHTML = w;


var list = [];
var li;
firebase.database().ref('/StudyMaterial/'+w).once('value',function(snapshot)
{
    var i=0;
        snapshot.forEach(element => {
        //    console.log(element.key);
            list[i] = element.val();
                li = document.createElement("li");
                var text = document.createTextNode(element.key);
                li.style.cssText = 'padding:1%; border:1px solid black; margin:1%;width:300px;float:left;list-style-type:none;cursor:pointer';
                li.appendChild(text);
                li.id=i;
                i++;
                li.addEventListener("click", myListWasClicked);
                document.getElementById("myUl").appendChild(li);

        });
        console.log(list);
        if(list.length==0)
        {
            var p = document.createElement("h1");
            var text = "Sorry we don't have data of these cousre we are uploading data please check it later";
            p.append(text);
            document.getElementById('myUl').append(text);
        }
});


function myListWasClicked(e) {
    //console.log(e.target); //access to this specific button
    //alert(e.target.innerHTML + e.target.id);
    for(let i=0;i<list.length;i++)
    {
        if(e.target.id == i)
        {
            window.open(list[i].url);
        }
    }
}
// $(function() {
//     $(document).on("click",li, function() {
        
//     });
// });