class Form{
    constructor(){
        this.input = createInput("Name")
        this.button = createButton('Play')
        this.gretting = createElement('h3')
    }
    hide(){
        this.gretting.hide()
        this.button.hide()
        this.input.hide()
                                                                                               
    }
    display(){
        var title = createElement('h2')
        title.html("Multiplayer Car Racing Game")
        title.position(displayWidth/2-50,0)
        
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        
        this.button.position(displayWidth/2+30,displayHeight/2)
       
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount = playerCount+1
            player.index = playerCount
            //var name = input.value()
            player.update()
            player.updateCount(playerCount)
            this.gretting.html("Hello "+player.name)
            this.gretting.position(displayWidth/2-70,displayHeight/4)
        })
    }
}