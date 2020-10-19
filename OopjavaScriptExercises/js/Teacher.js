    class Teacher extends Student{
        constructor(Salary ,subjects,Id,name,Email,mobile_number){
            super(Id,name,Email,mobile_number);
            this.Salary = Salary;
            this.subjects = subjects;
        }
    }
let teacher1 = new Teacher(800,'[English, Arabic, Math, science]',123443,'Sara','sara@orange.com',0777777777);
console.log(teacher1);