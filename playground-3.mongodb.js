

//1
use("db-patissier")
//2
db.createCollection("cake")
use("db-patissier")
db.cake.insertMany([
  {_id:ObjectId(1),
    nome:"Selva Negra", 
    peso: 18, 
    preco: 34.00, 
    ingredientes:[
      {nome: "Chocolate", quantidade:"100g"},
      {nome: "Morango", quantidade:"100g"},
      {nome: "Leite Condensado", quantidade:"100g"}
    ]
  },
  
    {_id:ObjectId(2), 
      nome:"Oceania", 
      peso: 18, 
      preco: 34.00, 
  ingredientes:[
    {nome: "Leite Ninho", quantidade:"100g"},
    {nome: "Morango", quantidade:"100g"},
    {nome: "Leite Condensado", quantidade:"100g"}
  ]
},
  {_id:ObjectId(3), 
    nome:"China", 
    peso: 18, 
    preco: 34.00, 
  ingredientes:[
  {nome: "Nesquik", quantidade:"100g"},
  {nome: "Nuttela", quantidade:"100g"},
  {nome: "Castanhas", quantidade:"100g"}
]
},
  {_id:ObjectId(4), 
    nome:"Aniversário", 
    peso: 18, 
    preco: 340.00, 
  ingredientes:[
    {nome: "Glasse", quantidade:"100g"},
    {nome: "Chocolate", quantidade:"100g"},
    {nome: "Muss de Maracujá", quantidade:"100g"}
  ]
}])

//3 
use("db-patissier")
db.cake.deleteOne({"_id": ObjectId("00000001f21ecddc3ae10039")});
//4
use("db-patissier")
db.cake.find({}, {nome: true, preco:true})



//5
db.dono.find({})
//6 
db.cake.findOneAndUpdate()
/*db.produtos.findOneAndUpdate(
   { _id: ObjectId('sua_id_aqui') }, // Encontre o documento pelo ID
   { $set: { nome: 'Novo Nome', preco: 19.99 } }, // Atualize os campos 'nome' e 'preco'
   { returnNewDocument: true } // Retorna o documento atualizado
);*/ 
//Faça uma consulta que exclua a collection dono
db.dono.drop()
//Faça uma consulta que exclua o banco de dados mypet  
db.dropDatabase()
