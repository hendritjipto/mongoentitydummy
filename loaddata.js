import { faker } from "@faker-js/faker";

const entityN = { name: "" };
const getCUTime = { createdTime: "", updateTime: "" }

function updateEntityName() {

    const entityArray = [
        "Apple Inc.",
        "Microsoft Corporation",
        "Amazon.com, Inc.",
        "Alphabet Inc. (Google)",
        "Facebook, Inc.",
        "Tesla, Inc.",
        "Netflix, Inc.",
        "Walmart Inc.",
        "Johnson & Johnson",
        "JPMorgan Chase & Co.",
        "Visa Inc.",
        "Mastercard Incorporated",
        "The Coca-Cola Company",
        "Toyota Motor Corporation",
        "Samsung Electronics Co., Ltd.",
        "Procter & Gamble Co.",
        "Nike, Inc.",
        "The Walt Disney Company",
        "IBM",
        "Intel Corporation"
    ];

    entityN.name = faker.helpers.arrayElement(entityArray);;
}

function getTime() {
    // Add 1 minute to the current time

    let oneMinuteLater = faker.date.between('2023-04-01T00:00:00.000Z', '2023-04-16T00:00:00.000Z');
    let fiveMinuteLater = new Date(oneMinuteLater.getTime() + 5 * 60000);

    getCUTime.createdTime = oneMinuteLater;
    getCUTime.updateTime = fiveMinuteLater;
}

export default function loadData(number) {

    let padding = number.toString().padStart(8, '0');

    let contact = {
        cid: padding,
        contacts: []
    }

    for (let i = 0; i < 3; i++) {
        updateEntityName();
        getTime();

        let padding2 = i.toString().padStart(8, '0');

        let contactarray = {
            intra: faker.datatype.boolean(),
            entity_name: entityN.name,
            account_number: padding2,
            alias: faker.name.firstName(),
            date_created: getCUTime.createdTime,
            date_updated: getCUTime.updateTime
        }

        contact.contacts.push(contactarray)

    }

    return contact;
}
