    class Student {
        constructor(Id,name,Email,mobile_number) {
            this.Id = Id;
            this.name = name;
            this.Email = Email;
            this.mobile_number = mobile_number;
        }
    } 

    let student1 = new Student(123443,'Sara','sara@orange.com',0777777777);
    console.log(student1);