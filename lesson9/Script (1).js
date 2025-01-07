db.books.find()
//ex3
db.books.aggregate([
{$match:{title:/^A/}},
{$sort:{publishedDate:-1}},
{$project:{_id:0,title:1,pageCount:1}}
])

//ex5
db.books.aggregate([
{$match:{pageCount:{$gt:0}}},
{$skip:10},
{$limit:100},
{$project:{longDescription:0,shortDescription:0}},
{$out:'ex5'}
])

//ex6
db.books.aggregate([
{$group:{
    _id:'$pageCount',
    count:{$sum:1},
}},
{$addFields:{pageCount:'$_id'}},
{$project:{_id:0}},
{$sort:{pageCount:1}}
])
//ex7
db.books.aggregate([
{$group:{_id:'$status',
avg:{$avg:'$pageCount'},
max:{$max:'$pageCount'},
min:{$min:'$pageCount'},
first:{$first:'$pageCount'},
last:{$last:'$pageCount'},
}},
])
//ex8
db.books.aggregate([
{$group:{_id:'$status',
push:{$push:'$title'},
 set:{$addToSet:'$title'}   

}},
])

//ex9
db.books.aggregate([
 {$unwind:'$authors'},
 {$group:{_id:'$authors',
      bookNames: { $push: '$title' },
      count:{$sum:1}, 
      
       }} ,
       {$sort:{count:-1}}  
])
//ex10
db.books.aggregate([
 {$unwind:'$categories'},
 {$group:{_id:'$categories',
      count: { $sum: 1 },}} ,
       {$sort:{count:-1}} 
 ])
//ex11
db.books.aggregate([
{$unwind:'$authors'},
{$match:{authors:{$not:{$eq:""}}}},
{$group:{
   _id:'$authors'}}
  ,{$set:{name:'$_id'}},
  {$sort:{name:1}},
   {$out:'authors'}])
