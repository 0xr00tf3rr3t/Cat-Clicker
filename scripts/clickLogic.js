$(document).ready(function () {
  

    var cats=[
        {
        name: 'Pedro',
        url:"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
    },
    {
        name: 'Juan',
        url:"https://www.pexels.com/photo/animal-cat-face-close-up-feline-416160/"
    },
    {
        name: 'Jose',
        url:"https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?cs=srgb&dl=adorable-animal-blur-617278.jpg&fm=jpg"
    },
    {
        name: 'Pedro Jr',
        url:"https://images.pexels.com/photos/17767/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },


];
    var  katItemTemplate = Handlebars.compile($('#katMenuItem').html()),// Used to call the template into a variable
     katDisplayTemplate = Handlebars.compile($('#katContent').html()),
     katList = $('.katList'),
     katDisplay= $('.kat-container');// Used as an object to append to
cats.forEach(
    function(cat){
        katList.append(katItemTemplate(cat));
    }

)
katList.on('click','li',function(){ 
var item =$(this),indexNumber=0;
console.log(item);
console.log(cats.findIndex(ind=> ind.name==item[0].children[0].innerText));
indexNumber=cats.findIndex(ind=> ind.name==item[0].children[0].innerText);//Gets the clicked element's name 
katDisplay.empty();//Clears Display area
katDisplay.append(katDisplayTemplate(cats[indexNumber]));//Changes the info
});
  
})


class Cat {
        constructor(name,url) {
        this.name = name;
        this.picture = url;
        this.cout = 0;
        this.id;
    }
    countUp()
    {
        this.count++;
    }



}
