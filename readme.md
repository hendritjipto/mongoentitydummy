# Create dummy data in MongoDB

This is a node js sample script to generate running number with sample dummy data

---

#### Create config.js

Create a config.js at the same folder as the script

```javascript
export const mongodburl =
  "mongodb+srv://<username>:<password>@projectname.6x0w0pv.mongodb.net/?retryWrites=true&w=majority";
```

#### Configure on how many data you want to insert

This script will populate 100 data using batch method. Modify this according to your needs

```javascript
// This script will populate 100 data using batch method
// Modify this according to your needs

for (let y = 0; y < 10; y++) {
  for (let x = 0; x < 10; x++) {
    let result = await runningNumber.findOneAndUpdate(
      {},
      { $inc: { num: 1 } },
      { returnDocument: "after" }
    );
    arrayData.push(loadData(result.value.num));
  }

  // batch insert
  await profile.insertMany(arrayData);

  arrayData = [];
}
```

#### To execute

Please find this command on your terminal

```shell
npm install
node insertdata.js
```

#### Sample data

Below are the sample data

```json
{
  "_id": "64997323b4a11a5c56c28473",
  "cid": "00000001",
  "intra": true,
  "entity_name": "MongoDB Inc",
  "account_number": "00000001",
  "alias": "Karl Schumm 00000001",
  "date_created": "2023-04-04T18:12:23.214Z",
  "date_updated": "2023-04-04T18:17:23.214Z"
}
```
