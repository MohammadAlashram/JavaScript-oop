class Teacher extends Student{
        constructor(Salary ,subjects,Id,name,Email,mobile_number){
            super(Id,name,Email,mobile_number);
            this.Salary = Salary;
            this.subjects = subjects;
        }
    }
let teacher1 = new Teacher(800,'[English, Arabic, Math, science]',96432,'Sadi','Sadi@orange.com',0777788888);
console.log(teacher1);