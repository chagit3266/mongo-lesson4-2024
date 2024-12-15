//use books

//ex 1
db.books.distinct(title,{}).map(x=>x.toUpperCase())

//ex 2
db.books.distinct(categories,{}).map(x=>{
    const count=db.books.countDocument({categories:x});
    return x+":"+count;
})

//ex 4
db.books.aggregate([
{$match:{status:'PUBLISH'}}
,{$set:{published:true}},
{$project:{status:0}}
]);

//ex 3
db.books.aggregate([{$match:{title:/^A/}},
{$sort:{date:-1}},
{$project:{_id:0,title:1,num_page:1}}])
