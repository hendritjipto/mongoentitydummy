/* mySeedScript.js */

// require the necessary libraries

import {
    MongoClient
} from 'mongodb';

import loadData from './loaddata.js';
import { mongodburl } from './config.js'

async function seedDB() {

    try {

        let arrayData = [];

        arrayData.push(loadData(1));
        console.table(JSON.stringify(arrayData, null, 2));

    } catch (err) {
        console.log(err.stack);
    }

}

seedDB();
