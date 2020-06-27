function getNumber(num){
     var result=document.getElementById("result");
    result.value +=num;
    }

    function clearResult(){
        var result=document.getElementById("result");
        result.value="";
    }

    function getResult(){
        var result=document.getElementById("result");
        result.value=eval(result.value);
    }

    function backspace(){
        var input_var = document.getElementById('result');
        var x = input_var.value;
        if(x.length > 0){
            x= x.substring(0, x.length-1); 
            input_var.value = x;
        }
    }

    function getsqRoot(){
        var result=document.getElementById("result");
        result.value = Math.sqrt(result.value);
    }

    
    function getsquare(){
        var result=document.getElementById("result");
        result.value = result.value * result.value;
    }