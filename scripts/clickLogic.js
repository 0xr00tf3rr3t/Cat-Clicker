$(document).ready(function () {
  

    let cats=[{
        name: 'Pedro',
        url:"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
    }];
    var  katItemTemplate = Handlebars.compile($('#katMenuItem').html());// Used to call the template into a variable
    katList = $('.katList');// Used as an object to append to
katList.append(katItemTemplate(cats[0]))////Makes the conversion 
  
  
})
class Cat {
        constructor(name,url) {
        this.name = name;
        this.picture = url;
        this.cout = 0;
    }
    countUp()
    {
        this.count++;
    }



}
