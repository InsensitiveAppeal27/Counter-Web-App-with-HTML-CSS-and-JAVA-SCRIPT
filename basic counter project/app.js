let number = 0; 
let mantra = "jaya sri-krishna-chaitanya prabhu nityananda sri-adwaita gadadhara shrivasadi-gaura-bhakta-vrinda";
    function add(){
        if(number < 109){
        number++;
        document.getElementById("answer").value = number;};
        if(number === 109){
            reset();
        }
    };
    function minus(){
        if(number > 0){
        number--;
        document.getElementById("answer").value = number;};
    };
    function reset(){
        number = 0;
        document.getElementById('answer').value = number;
    };


    
    