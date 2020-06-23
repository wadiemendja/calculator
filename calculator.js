           var actions = document.getElementById("actions").innerHTML;
           var result = document.getElementById("screen").innerHTML;

           function display(id) {
                actions+=document.getElementById(id).innerHTML ;
            }
            
            function clean () {
                actions = "";
                result = "0";
            }
            
            function calc () {
                result=eval(actions);                
            }
