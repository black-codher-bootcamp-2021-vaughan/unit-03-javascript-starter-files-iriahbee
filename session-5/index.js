

function getGrade (total) {

    if (total > 90) return 'You got an A+, Congrats!';
    else if (total > 80 & total <= 90) return 'You got an A';
    else if (total > 70 & total <= 80) return 'You got a B';
    else if (total > 60 & total <= 70) return 'You got a C';
    else if (total > 50 & total <= 60) return 'You got a D';
    else if (total > 40 & total <= 50) return 'You got an E';
    else if (total > 30 & total <= 40) return 'You got an F';
    else if (total <30) return 'Sorry You Failed, :) ';

}

console.log (getGrade(29))

//*Second Task */

function getGrade (total) {

    let grade; 

    switch (true) {

    case (total > 90):
    grade='You got an A+, Congrats!';
    break;
    case (total > 80 && total <= 90):
    grade='You got an A';
    break;
    case (total > 70 && total <= 80):
    grade='You got a B';
    break;
    case (total > 60 && total <= 70):
    grade='You got a C';
    break;
    case (total > 50 && total <= 60):
    grade='You got a D';
    break;
    case (total > 40 && total <= 50):
    grade='You got an E';
    break;
    case (total > 30 && total <= 40):
    grade='You got an F';
    break;
    default:
    grade= 'Sorry, You Failed'
    }
    
    return grade;
    }
    console.log (getGrade(88))




    






