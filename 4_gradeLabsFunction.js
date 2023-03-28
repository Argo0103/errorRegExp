let studentLabs = [
    {
    student: "Blake", 
    myCode: function (num) {
    return Math.pow(num, num);
    },
    },
    {
    student: "Jessica",
    runLab: function (num) {
    return Math.pow(num, num);
    },
    },
    {
    student: "Mya",
    runLab: function (num) {
    return num * num;
    },
    },
    ];

const gradeStudents = {
    "Blake" : 5 ,
    "Jessica" : 3 ,
    "Mya" : 5
}

    function gradeLabs(lab = [] , grade , passGrade){
        const students = []
        for(let idx = 0 ; idx < lab.length ; idx++){
            let currStudent = lab[idx]
       
            try{
                
                if(!("runLab" in currStudent)){
                    const keys = Object.keys(currStudent)
                    students.push({[currStudent["student"]] :  "Error thrown"})
                    throw new TypeError(`${keys[1]} is not a function.`)
                    
                } else {
                    const studentGrade = currStudent.runLab(grade[currStudent.student])
                    students.push({[currStudent["student"]] : studentGrade >= passGrade ? "Done" : "Fail" })
                }
                
            }
            catch(error){
                console.log(error)
            } 
            
        } 
        return students
    }
    console.log(gradeLabs(studentLabs,gradeStudents,27))