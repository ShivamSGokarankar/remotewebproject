class Student
{
    constructor(name ,age)
    {
        this.name=name;
        this.age=age;
        this.display();  
    }
    display()
    {
        window.alert(this.name,this.age)
    }
}
new Student("shivam",20);