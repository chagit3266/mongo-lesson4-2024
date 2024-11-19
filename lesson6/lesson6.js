//use catalog;
//6
db.books.find({categories:{$size:0}}).remove
//7
db.books.find({thumbnailUrl:{$exists:false}})
//8
db.books.find({authors:{$all:["Robi Sen"]}},{title:1,longDescription:1})
//9
db.books.find({authors:/a/i},{title:1,longDescription:1})
//10
db.books.find({categories:["XML","lnternet"]})
//11
db.books.find({categories:{$all:["XML","lnternet"]}})
//12
db.books.countDocuments({authors:{$all:[""]}})
//13
db.books.countDocuments({'authors.3.0':""})
//14
db.books.countDocuments({_id:{$not:{$type:7}}})
db.books.countDocuments({_id:{$type:7}})