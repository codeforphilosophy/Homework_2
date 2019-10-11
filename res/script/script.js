$(function(){
    let user = new User("John", "Doe", "11/10/1990", "Software Engineering", "2.75");
    let courses = [
        new Course("Agile software development", "1", "82"),
        new Course("System modeling", "1", "85"),
        new Course("Object-oriented programming", "2", "99"),
        new Course("Estonian language Level A2", "2", "65"),           
    ];
    
    $(".controls #profile-button").on("click", function(event){
        if(!$(this).hasClass("active")){
            $(this).addClass("active").siblings().removeClass("active");
            $(".content #profile-container").addClass("active").siblings().removeClass("active");
       };
    });


    $(".controls #courses-button").on("click", function(event){
        if(!$(this).hasClass("active")){
            $(this).addClass("active").siblings().removeClass("active");
            $(".content #courses-container").addClass("active").siblings().removeClass("active");
       };
    });



});