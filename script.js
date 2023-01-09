// class Circle
// {
//     constructor(radius, color)
//     {
//         this.radius=radius;
//         this.color=color;
//     }
//     get radiusCircle(){
//         return this.radius;
//     }
//     get colorCircle(){
//         return this.color;
//     }
//     set radiusCircle(radius){
//         this.radius=radius;
//     }
//     set colorCircle(color){
//         this.color=color;
//     }
//     get toString() {
//         return `"Circle[radius=${this.radius}, color=${this.color}]"`;
//     }
//     get areaCircle() {
//         return Math.PI* this.radius * this.radius;
//     }
//     get circumferenceCircle() {
//         return 2*Math.PI * this.radius;
//     }
// }
// var obj1 = new Circle(1.0, "red");
// console.log(obj1.radiusCircle);

// obj1.radiusCircle = 2.2;
// console.log(obj1.radiusCircle);

//output
//1


// class Movie{
//     constructor(title,studio,rating)
//     {
//         this.title=title;
//         this.studio=studio;
//         if(rating == undefined){
//             this.rating="PG"
//         }
//         else{
//             this.rating=rating;
//         }
//     }
//     getPG(arr){
//         var result=[];
//         for(var i=0; i <arr.length; i++){
//             if(arr[i].rating=="PG"){
//                 result.push(arr[i]);
//             }
//         }
//         return result;
//     }
// }
// var movie1= new Movie("ABC","MARVEL");
// var movie2=new Movie("XYZ","DC","PG15");
// var movie3=new Movie("AVATAR","DISNEY");
// var movie4 = new Movie("WAR","AVM","PG13")
// var arr=[movie1,movie2,movie3,movie4]
// console.log(movie1.getPG(arr))

//output
// Array(2)
// Movie {title: 'ABC', studio: 'MARVEL', rating: 'PG'}
// Movie {title: 'AVATAR', studio: 'DISNEY', rating: 'PG'}


// class Person{
//     constructor(name,age,gender,salary,location){
//         this.name=name;
//         this.age=age;
//         this.gender=gender;
//         this.salary=salary;
//         this.location=location;
//     }
// }
// var result=new Person("Dineshpandi","20","male","25000","chennai")
// console.log(result.name);

//output
//Dineshpandi

class Uber{
    constructor(fixedprice,distance){
        this. fixedprice=fixedprice;
        this.distance=distance;

    }
    get price(){
        var result=this.fixedprice*this.distance;
        return result;
    }
}
var obj = new Uber(4,300);
console.log(obj.price);

//output
//1200