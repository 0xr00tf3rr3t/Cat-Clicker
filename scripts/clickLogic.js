$(document).ready(function () {

    var cats = [];// Holds the all the cats 
    var indexNumber = 0;//This was made avaaible globaly for easier managment
    cats.push(new Cat('Pedro', 'imgs/0.jpg'));//Initializing 4 cats
    cats.push(new Cat('Juan', 'imgs/1.jpg'));//
    cats.push(new Cat('Jose', 'imgs/2.jpg'));//
    cats.push(new Cat('Junior', 'imgs/3.jpg'));//

    var katItemTemplate = Handlebars.compile($('#katMenuItem').html()), // Used to call the template into a variable
        katDisplayTemplate = Handlebars.compile($('#katContent').html()),
        katList = $('.katList'),//Holds the menu element
        katDisplay = $('.kat-container'); // Used as an object to append the  actual info of cat

    cats.forEach(
        function (cat) {
            katList.append(katItemTemplate(cat));//Loads the cats that are already inside the Array
        }

    )
    katList.on('click', 'li', function () {
        var item = $(this);//Used to identify the elements that are clicked
        indexNumber = cats.findIndex(ind => ind.name == item[0].children[0].innerText); //Gets the clicked element's name 
        katDisplay.empty(); //Clears Display area
        katDisplay.append(katDisplayTemplate(cats[indexNumber])); //Changes the info
        katDisplay.unbind();//unbinds any 'this' value that had been binded into katDisplay
        katDisplay.on('click','img',cats[indexNumber].countUp.bind(cats[indexNumber]));//Binds the this element with the one selected
    });
   
})


class Cat {
     
    constructor(name, url) {
        this.name = name;
        this.url = url;
        this.count = 0;
      

    };
     countUp() {
             
        this.count++;
        $('.clicksNumber')[0].innerText=this.count;
        console.log(this);
        console.log(this.count);

    }
}