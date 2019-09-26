           function display(id) {
                
                let save = document.getElementById("actions").innerHTML ;
                document.getElementById("actions").innerHTML=save+document.getElementById(id).innerHTML ;
                save = document.getElementById("actions").innerHTML ;
                
            }
            
            function clean () {
                document.getElementById("actions").innerHTML = "" ;
                document.getElementById("screen").innerHTML = "0" ;
            }
            
            function calc () {
             document.getElementById("screen").innerHTML=eval(document.getElementById("actions").innerHTML);
                
            }
