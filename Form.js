class Form{
    constructor(){
this.nameBox = createInput('name');
this.button=createButton('play');
this.greeting=createElement('h2');
    }
  hide(){
      this.greeting.hide();
      this.nameBox.hide();
      this.button.hide();
  }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(360,100);
       
        this.nameBox.position(370,200);
        this.button.position(430,250);
        this.button.mousePressed(()=>{
            this.nameBox.hide();
            this.button.hide();
            player.name = this.nameBox.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("hello"+player.name);
            this.greeting.position(390,140);

        });
    }  
}
