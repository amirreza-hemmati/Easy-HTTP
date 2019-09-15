// class
let myform =  (() => {
    const _alertB = alertB = document.getElementsByClassName("alert")[0];
    const _myforms  = document.forms[0];
    const _inputs = _myforms.getElementsByClassName("form-control");
    const _inputNumber = _inputs[0];
    const _inputTitle = _inputs[1];
    const _inputBody = _inputs[2];
    const _submit = _myforms.getElementsByTagName('input')[3];

    return class PMyform{
        static showform(){
            _alertB.style.display = "block";
            _myforms.style.display = "block";
        }

        static hideInput(inputNumber , inputTitle , inputBody){
            if(!inputNumber){
                _inputNumber.style.display = "none";
            }

            if(!inputTitle){
                _inputTitle.style.display = "none";
            }

            if(!inputBody){
                _inputBody.style.display = "none";
            }
        }

        static submits(one,two,three,values){
            if(one && _inputNumber.value == ""){
                alert("Plese enter your number");
            }else if (two && _inputTitle.value == ""){
                alert("please enter your title");
            }else if (three && _inputBody.value == ""){
                alert("please enter your body");
            }else{
                values();
            }
        }

        static finishWork(){
            _alertB.style.display = "none";
            _myforms.style.display = "none";
            for (let index = 0; index < _inputs.length; index++) {
                const element = _inputs[index];
                element.style.display = "block";
                element.value = "";
            }
        }
    }
})();