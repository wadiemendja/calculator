           function display(id) {
                document.getElementById("actions").innerHTML+=document.getElementById(id).innerHTML ;
            }
            
            function clean () {
                document.getElementById("actions").innerHTML="";
                document.getElementById("screen").innerHTML="0";
            }
            
            function calc () {
                document.getElementById("screen").innerHTML=eval(document.getElementById("actions").innerHTML);                
            }
