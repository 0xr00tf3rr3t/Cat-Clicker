$(document).ready(function () {

    var octopus={
        init : function (){
            model.init();
            viewMenu.init();
              
        },
        
        getCats:function(){
            return model.getCats();
        },
        setIndexNumber:function(index)
        {
            model.setIndexNumber(index);
        },
        getIndexNumber:function()
        {
            return model.indexNumber;
        }
    }


    var model={
        cats : [],// Holds the all the cats 
        indexNumber: 0,//This was made avaaible globaly for easier managment
        init: function()
        {
            
            this.cats.push(new Cat('Pedro', 'imgs/0.jpg'));//Initializing 4 cats
            this.cats.push(new Cat('Juan', 'imgs/1.jpg'));//
            this.cats.push(new Cat('Jose', 'imgs/2.jpg'));//
            this.cats.push(new Cat('Junior', 'imgs/3.jpg'));//
        },
        getCats: function()
        {
        
            return this.cats;
        },
        getIndex:function(){
            return this.indexNumber;
        },
        setIndexNumber:function(index)
        {
            this.indexNumber=index;
        }
    }




 var viewMenu={
      katItemTemplate: Handlebars.compile($('#katMenuItem').html()), // Used to call the template into a variable
       
        katList : $('.katList'),//Holds the menu element
       init:function(){
           this.render(octopus.getCats());
           this.katList.on('click', 'li', function () {
            var item = $(this);//Used to identify the elements that are clicked'
            var cats=octopus.getCats()
            octopus.setIndexNumber (cats.findIndex(ind => ind.name == item[0].children[0].innerText)); //Gets the clicked element's index
            viewDisplay.render(octopus.getIndexNumber());
        });
       },
       /**
        * Renders the Array of the avaiable cats
        */
        render:function(...octopus){
            var array = octopus[0];
            array.forEach(
                function (cat) {
                    viewMenu.katList.append(viewMenu.katItemTemplate(cat));//Loads the cats that are already inside the Array
                }
            )
        }
    }

     viewDisplay={
        katDisplay:$('.kat-container'),
        katDisplayTemplate: Handlebars.compile($('#katContent').html()),
        cats:octopus.getCats(),

        render:function(index){
         
        this.katDisplay.empty(); //Clears Display area
        this.katDisplay.append(viewDisplay.katDisplayTemplate(this.cats[index])); //Changes the info
        this.katDisplay.unbind();//unbinds any 'this' value that had been binded into katDisplay

        this.katDisplay.on('click','img',this.cats[index].countUp.bind(this.cats[index]));//Binds the this element wivieDisplay.e one selected

        }
    }
    octopus.init();
})
class Cat {
     
    constructor(name, url) {
        this.name = name;
        this.url = url;
        this.count = 0;
    };
     countUp() 
     { 
        this.count++;
        $('.clicksNumber')[0].innerText = this.count;
    }
}