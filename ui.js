class UI{
    constructor(firstElement,secondElement){
        this.firstElement = firstElement;
        this.secondElement = secondElement;
        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
        this.outputResult = document.getElementById("outputResult");
    }

    changeFirst(){
        this.outputFirst.textContent = this.firstElement.options[this.firstElement.selectedIndex].textContent;
        
    }

    changeSecond(){
        this.outputSecond.textContent = this.secondElement.options[this.secondElement.selectedIndex].textContent;
    }
    displayResult(result){
        this.outputResult.value = result;
    }
}