//db.posts.insertOne( {_id:"p1",post:"Post 1" } );
//db.posts.insertOne( {_id:"p2",post:"Post 2" } );
//db.comments.insertOne({_id:"c1",pid:"p1",comment:"This is comment 1 of post 1"});
//db.comments.insertOne({_id:"c2",pid:"p1",comment:"This is comment 2 of post 1"});
//db.comments.insertOne({_id:"c3",pid:"p2",comment:"This is comment 1 of post 2"});
//db.comments.insertOne({_id:"c4",pid:"p2",comment:"This is comment 2 of post 2"});
//db.comments.aggregate({$project:{_id:1,comment:1}});
//db.comments.insertOne({_id:"c5",pid:"p2",comment:"This is comment 3 of post 2"});
//db.posts.aggregate( [ {
// $lookup:{
// from:"comments",
// localField:"_id",
// foreignField:"pid",
// as:"commnt"
// } } ]  );

// db.posts.aggregate([
//   {
// 	$lookup: {
// 	  from: "comments",
// 	  localField: "_id",
// 	  foreignField: "pid",
// 	  as: "commnt"
// 	}
//   },
//   {
// 	$unwind: "$commnt"
//   }
// ]);

// **Important**

//db.marks.aggregate( {$group :{_id:"$name" , total:{$sum:"$score"} }});  -> this will directly group by name and give sum of score as total.
//db.marks.aggregate( {$group :{_id:{subject:"$subject",name:"$name"} , totalBySubject:{$sum:"$score"} }});

//db.employees.aggregate([{$project:{_id:0,name:1,salary:1,Grade:{$cond:[{$gt:["$salary",2000]},"Grade A","Grade B"]}}]);

//if and else condition in mongodb

//db.employees.aggregate([{$project:{_id:0,name:1,salary:1 ,Grade:{$cond:{if:{$gt:["$salary",2000]},then:"Grade A",else:"Grade B" }}}}]);

//add a new field strSalary in employees
//store "2500" for all IT employees
//store "1000" for all other employees

// db.emplyees.update({department:"IT"},{$set:{strSalary:"2500"}});
//db.employess.aggregate([{$project:{_id:0,name:1,department:1,Sal:{$convert:{input:"$strSalary",to:"int"}}}},{$group:{_id:"$department",total:{$num:"$Sal"}}}]);


//creating view
// db.createView("ViewName","collectionName");
