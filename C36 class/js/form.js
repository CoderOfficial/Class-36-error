class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html('Car Racing Game');
        title.postition(130,0);
        var input = createInput('name');
        input.position(130,60);
        var button = createButton('play');
        button.position(250,200);
        var element = createElement('h3');
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            var greeting = createElement('h3');
            greeting.html("hello"+name);
            greeting.position(130,160);
        });
    }
}