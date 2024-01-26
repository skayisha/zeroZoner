const express = require('express');
const bodyParser = require('body-parser');
const {MongoClient, ObjectId} = require('mongodb'); 

const app = express();
app.use(bodyParser.json());

let _userCollectionName = "user";
const uri = 'mongodb://localhost:27017/zeroZoner';
//connect
const client = new MongoClient(uri);
client.connect().then(()=>{
    console.log("connection established");
});
let _db = client.db();
//create collection from user
 let _userCollection = _db.collection(_userCollectionName);
//insert many user
_userCollection.insertMany([
    {
        name:'ayisha',
        email:"ayisha@gmail.com",
        phone:'9345678553',
        role:'investor'
    },
    {
        name:'gayatri',
        email:"gayatri@gmail.com",
        phone:'9345573453',
        role:'entrepreneur'
    },
    {
        name:'mahima',
        email:"mahima@gmail.com",
        phone:'9345648732',
        role:'Freelancer'
    },
    {
        name:'kavya',
        email:"kavya@gmail.com",
        phone:'9345667537',
        role:'company'
    }]).then(()=>{
    console.log(" user Inserted");
});
//delete one user
let user= new ObjectId("65b3685385b0270cc95ebb46");
_userCollection.deleteOne({_id:user}).then(()=>{
    console.log(" user deleted");
}).catch(error=>{
    console.log(error);
   });

let _projectsCollectionName = "projects";
//create collection from projects 
let _projectsCollection = _db.collection(_projectsCollectionName);
//inserting many projects
_projectsCollection.insertMany([
    {
        name:'zerozoner',
        description:'starts with zero',
        conceptFile:'concept1'
    },
    {
        name:'Dryfruits',
        description:'Dryfruits help for body',
        conceptFile:'concept2'
    },
    {
        name:'gullystore',
        description:'common people store',
        conceptFile:'concept3'
    }
]).then(()=>{
    console.log(" project Inserted");
});
//delete one project 
let  projects= new ObjectId("65b232a97a10a7910e5f00fb");
_userCollection.deleteOne({_id:projects}).then(()=>{
   console.log(" project deleted");
}).then(()=>{
    console.log(" user Inserted");
});

let _userWalletsName = "user_wallets";
//creating  collection from usersWallet
let _usersWallet = _db.collection(_userWalletsName);
//inserting many userWallet
_usersWallet.insertMany([
    {
        accountNo:975435653327,
        IFSCcode:8946576634651,
        bankName:'SBI',
        balance:20000
    },
    {
        accountNo:657989321669,
        IFSCcode:5967568427845,
        bankName:'CANARA',
        balance:15000
    },
    {
        accountNo:746375924546,
        IFSCcode:9164396595657,
        bankName:'ANDHRA',
        balance:15000
    }
]).then(()=>{
    console.log(" user wallets Inserted");
});
// //delete  one userwallet
let  userwallet= new ObjectId("65b232a97a10a7910e5f00fb");
_userCollection.deleteOne({_id:userwallet}).then(()=>{
    console.log("user wallets deleted");
}).then(()=>{
    console.log(" user Inserted");
});

let _userTransactionName = "user_transactions";
//creating  collection from usertransaction
let _userTransactions = _db.collection(_userTransactionName);
//inserting  many usertransaction
_userTransactions.insertMany([
    {
        transaction_Id:569456716595,
        paymentMode:'phonepay',
        amount:10000,
        debitOrCreditNo:596240576741
    },
    {
        transaction_Id:756959465956,
        paymentMode:'googlepay',
        amount:15000,
        debitOrCreditNo:569345549659
    },
    {
        transaction_Id:967564569645,
        paymentMode:'cash',
        amount:20000,
        debitOrCreditNo:579476595646
    }
]).then(()=>{
    console.log(" user transaction Inserted");
});
// delete  one usertransaction
let  usertransaction= new ObjectId("65b232a97a10a7910e5f00fb");
_userCollection.deleteOne({_id:usertransaction}).then(()=>{
    console.log("user transaction deleted");
}).then(()=>{
    console.log(" user Inserted");
});


app.listen(3001,()=>{
    console.log("server running on 3001");
});