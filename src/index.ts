import {MongoClient} from 'mongodb';

class Main {
    static main() {
        Main.update();
    }


    static async find() {
        const url = 'mongodb://localhost:27017';
        const client = await MongoClient.connect(url); //connect the server
        const db = client.db('cdac'); // cnnecting to dabatase

        const docs = await db.collection('task').find().toArray(); // converts cursor to array

        /*for(let i=0; i<docs.length; i++) {
            let item = docs[i];
            console.log(item);
        }*/

        docs.forEach(item => console.log(item));
        
        client.close();
    }

    static async update() {
        const url = 'mongodb://localhost:27017';
        const client = await MongoClient.connect(url); //connect the server
        const db = client.db('cdac'); // cnnecting to dabatase

        const output = await db.collection('task').update({todo: 'A'}, {$set : {todo: 'AAA'}});
        console.log(output);

        client.close();
    }


    static async delete() {
        const url = 'mongodb://localhost:27017';
        const client = await MongoClient.connect(url); //connect the server
        const db = client.db('cdac'); // cnnecting to dabatase

        const output = await db.collection('task').deleteOne({todo: 'HELLO MONGO'});
        console.log(output);

        client.close();
    }


    // Insert Demo
    static async insert() {
        const url = 'mongodb://localhost:27017';
        const client = await MongoClient.connect(url); //connect the server
        const db = client.db('cdac'); // cnnecting to dabatase

        const output = await db.collection('task').insert({todo: 'HELLO MONGO'});
        console.log(output);

        client.close();
    }



}

Main.main();