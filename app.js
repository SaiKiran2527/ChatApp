$(document).ready(function () {
    
    $("#chatdata").keyup(function (event) {
        if (event.keyCode === 13) {
            let x = document.getElementById("chatdata").value;
            if(x.trim()!==""){
            var d = new Date();
  var n = d.getHours()+":"+(d.getMinutes()<10?'0':'') + d.getMinutes();
            document.getElementById("reff").innerHTML+=`<div class="container darker" id="sen">
            <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Avatar" class="right" style="width:100%;">
            <p>`+x+`</p>
            <span class="time-left">`+n+`</span>
        </div>`
        document.getElementById("chatdata").value=""
        window.scrollTo(0,document.body.scrollHeight);
            }
            
            
            
        }
    });
    $("#chatdata1").keyup(function (event) {
        if (event.keyCode === 13) {
            let x = document.getElementById("chatdata1").value;
            if(x.trim()!==""){
            var d = new Date();
  var n = d.getHours()+":"+(d.getMinutes()<10?'0':'') + d.getMinutes();
            document.getElementById("reff").innerHTML+=`<div class="container" id="rec">
    <img src="https://www.w3schools.com/w3images/avatar_g2.jpg" style="width:100%;">
    <p>`+x+`</p>
    <span class="time-right">`+n+`</span>
</div>`
        document.getElementById("chatdata1").value=""
        window.scrollTo(0,document.body.scrollHeight);
            }
            
            
            
        }
    });
});




