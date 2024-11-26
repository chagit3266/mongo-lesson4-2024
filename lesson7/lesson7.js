use catalog

db.getCollection("books").find({})
//ex1
db.books.updateMany({pageCount: 1234,},
{$set:{title: "1,2,3,4 to java programming", status: "PUBLISH"}},
{ multi:true,upsert: true })

//ex2
db.book.updateMany({title:/^b/i},{$unset:{publishedDate:true}})

//ex3
db.books.update({status:"PUBLISH",publishedDate:{$exists:false}},
{$currentDate:{publishedDate:true}})


//ex5
db.books.updateMany({categories:"java"},
{$mul:{price:1.1}})

//ex6
db.book.updateMany({title:/Java/i},{$inc:{pageCount:-20}})

//ex7
db.book.updateMany({},
{$max:{pageCount:0},$currentDate:{lastModifiedPages:true}})

//ex8
db.book.updateMany({},
{$rename:{lastModifiedPages:"lastModified"}})

//ex9
db.books.updateMany({},{$min:{pageCount:1000}})

//ex10
db.books.updateMany({$or:[{authors:{$size:0}},{authors:null}]},
{$unset:{authors:true}});
db.books.updateMany({$or:[{categories:{$size:0}},{categories:null}]},
{$unset:{categories:true}});