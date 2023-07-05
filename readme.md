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
[
  {
    "cid": "00000001",
    "contacts": [
      {
        "intra": true,
        "entity_name": "Microsoft Corporation",
        "account_number": "00000000",
        "alias": "Audreanne",
        "date_created": "2023-04-02T12:21:19.147Z",
        "date_updated": "2023-04-02T12:26:19.147Z"
      },
      {
        "intra": true,
        "entity_name": "The Walt Disney Company",
        "account_number": "00000001",
        "alias": "Tracy",
        "date_created": "2023-04-03T13:50:05.977Z",
        "date_updated": "2023-04-03T13:55:05.977Z"
      },
      {
        "intra": false,
        "entity_name": "Alphabet Inc. (Google)",
        "account_number": "00000002",
        "alias": "Bernice",
        "date_created": "2023-04-15T15:10:43.034Z",
        "date_updated": "2023-04-15T15:15:43.034Z"
      }
    ]
  }
]
```
