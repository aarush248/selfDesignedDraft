class Form{

    constructor(){

        this.input=createInput("Name/Team")
    
        this.button=createButton("Play")

        this.greeting=createElement("h3")

    }

    hide(){
        this.button.hide()
        this.input.hide();
        this.greeting.hide();
    }

    display(){

        var title = createElement("h2")
        title.html("Hogwarts Quidditch Finals!")
        title.position(100, 0)

        this.input.position(130, 150)

        this.button.position(130, 180)

        
    }

}
