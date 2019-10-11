$(function(){
    let user = new User("John", "Doe", "11/10/1990", "Software Engineering", "2.75");
    let courses = [
        new Course("Agile software development", "1", "82"),
        new Course("System modeling", "1", "85"),
        new Course("Object-oriented programming", "2", "99"),
        new Course("Estonian language Level A2", "2", "65"),           
    ];
    init();
    
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
    
    // <tr>
    //                         <td>1</td>
    //                         <td>Agile software development</td>
    //                         <td>1</td>
    //                         <td>82</td>
    
    function init(){
        let tBody= $("#courses tbody");
        for (let i=0; i<courses.length; i++){
            let tdRowNumber= $("<td></td>").text(i+1);
            let tdTitle=$("<td></td>").text(courses[i].title);
            let tdSemester =$("<td></td>").text(courses[i].semester);
            let tdGrade =$("<td></td>").text(courses[i].grade);
            let tableRow = $("<tr></tr>");
            tableRow.append(tdRowNumber);
            tableRow.append(tdTitle);
            tableRow.append(tdSemester);
            tableRow.append(tdGrade);
            tBody.append(tableRow);
            
        }
    }
    
    
});