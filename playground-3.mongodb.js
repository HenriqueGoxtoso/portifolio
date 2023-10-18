use("db_sorveteria");
db.createCollection("sorvete");
db.sorvete.insertMany([
  {
    sabor:"Morango",
    preco_kg: 25
  },
  {
    sabor:"Chocolate",
    preco_kg: 25
  },
{
  sabor:"Creme",
  preco_kg: 25
},
{
  sabor:"Napolitano",
  preco_kg: 5
},
  {
    sabor:"Banana",
    preco_kg: 10
  }
])

//1
use ("db_sorveteria")
db.sorvete.find({});
//2
use ("db_sorveteria")
db.sorvete.find({preco_kg: {$lte:40}});
//3
use ("db_sorveteria")
db.sorvete.find({sabor: "Banana"}, {_id:1, sabor:1, preco_kg:1})
//4
use("db_sorveteria")
db.sorvete.find({preco_kg: {$gte: 20}});

//5
use ("db_sorveteria")
db.sorvete.find({preco_kg: {$gte:20, $lt: 40}}, {_id:1, sabor:1});
//6
use ("db_sorveteria")
db.sorvete.find({preco_kg: {$gt: 10, $lte: 44}})

//7
use("db_sorveteria")
db.sorvete.find({$or: [{preco_kg: {$lte: 10}},{preco_kg: {$gt:40}}]})
//8
use("db_sorveteria")
db.sorvete.aggregate([{
  $group: {
    _id: 0,
    media: {$avg: "$preco_kg"}
  }
}])
//9
use ("db_sorveteria")
db.sorvete.aggregate([
  {$sort: {preco_kg: 1}}, {$limit: 1}, {$project: {_id: 0}}
])
//10
use ("db_sorveteria")
db.sorvete.insertOne({sabor:"Frutas Vermelhas", preco_kg:15})

