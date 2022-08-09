# Enums
Enums allow us to define a set of named constants. We can give these constants numeric or string values.
The is quite a fex options when it comes to enums

~~~ts 
// Numberic enum
enum Responses {
    no, //1
    yes; //2
    maybe, //3
}

enum Responses {
    no = 2, //2
    yes, //3
    maybe//4
}

enum Responses {
    no = 2, //2
    yes = 10, //10
    maybe == 24 // 24
}

~~~

~~~ts 
// String Enums
enum Reponses {
    no = 'No',
    yes = 'Yes',
    maybe = 'Maybe'
}
~~~

~~~ts 
//Heterogenous Enums
enum Responses {
    no = 0,
    yes = 1,
    maybe = 'Maybe',
}
~~~