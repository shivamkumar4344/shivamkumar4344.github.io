//db.employess.insertMany([{name:"Amu",email:"amu@gmail.com",department:"HR",salary:3000,loaction:["NY","LA"],date:Date()},{name:"Anmol",email:"anmol@gmail.com",department:"MBA",salary:13000,loaction:["USA","ALA"],date:Date()}]);

//db.users.countDocuments();

//db.users.updateOne({name:"Kunal"}, { $set: { id:1000 }} );
//db.users.updateMany( {},{$set:{date:Date()}} );

//db.users.updateMany({},{$rename:{points:"score"}}); -> rename the points field to score
//db.users.updateMany({},{$unset:{score:""}});  -> removes the score field.

//db.users.updateMany({},{$push:{skills:"Java"}}); -> make new field in array form.
//db.users.updateMany({},{$pull:{skills:"Java"}}); -> removes the skill JAVA.

//db.users.updateMany({name:"Ramana"},{$pop:{skills:1}});

//db.users.updateMany({name:"Raman"},{$set:{id:1000}} , {upsert:true});

//db.users.deleteOne( {name:"Aakash"} );
// db.users.deleteMany( {id:1000});

