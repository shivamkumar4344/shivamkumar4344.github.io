//Aggregate is same as find -> which uses pipeline and it is performance by better.
//db.users.aggregate([
//  { $match:{department:"IT"} } , { $project : {name:1,salary:1} } ]);

//db.users.aggregate( {$match: {skills:["Java"]} } , {$project:{name:1,id:1}} );
//db.users.aggregate([ { $group: {_id:"$department",total: {$sum:"$salary"} } } ]);

//db.users.aggregate([$project:{empName:$name}]);

//db.users.aggregate( [ $project : {_id:0,name:1 ,salary:1,bonus:{$multiply:{"$salary":2000 } } } ] );

//you have to display email and salary of all the IT employees.
//db.users.aggregate( {$match: {department:"IT"} , {$project:{email:salary:1}} });

//you have to display annual salary of all employees.

//you have to display employees whose salary is greater than 3000 and show CTC instead of salary field.
//db.users.aggregate({$match:{$gt:{salary:3000}}}, {$project:{name:1,salary:1} });


// db.students.aggregate({$project:{name:1,age:1,_id:0}});