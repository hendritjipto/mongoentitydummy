/* mySeedScript.js */

// require the necessary libraries

import {
    MongoClient
} from 'mongodb';

import loadData from './loaddata.js';
import { mongodburl } from './config.js'

async function seedDB() {
    // Connection URL
    const uri = mongodburl;

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        // useUnifiedTopology: true,
    });

    try {
        await client.connect();
        console.log("Connected correctly to server");

        const database = await client.db("loadtest");

        try {
            await database.createCollection("profile");
            await database.createCollection("runningNumber");

        } catch (error) {
            console.log("Collection is available");
        }

        const profile = await database.collection("profile");
        const runningNumber = await database.collection("runningNumber");

        // The drop() command destroys all data from a collection.
        // Make sure you run it against proper database and collection.

        await profile.drop();
        await runningNumber.drop();

        await runningNumber.insertOne({ num: 0 })

        const hrstart = process.hrtime();
        let arrayData = [];

        for (let y = 0; y < 1; y++) {

            for (let x = 0; x < 10; x++) {
                let result = await runningNumber.findOneAndUpdate(
                    {},
                    { "$inc": { "num": 1 } },
                    { returnDocument: "after" });
                arrayData.push(loadData(result.value.num));
            }

            // batch insert 
            await profile.insertMany(arrayData);

            arrayData = [];
        }

        const hrend = process.hrtime(hrstart);
        console.log(`Execution time (hr): ${hrend[0]}s ${hrend[1] / 1000000}ms`);

        console.log("Database seeded! :)");
        client.close();
    } catch (err) {
        console.log(err.stack);
    }

}

seedDB();
