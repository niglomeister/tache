migrate((db) => {
  const collection = new Collection({
    "id": "gvyn8o9t1ahjrwr",
    "created": "2023-01-15 23:14:34.692Z",
    "updated": "2023-01-15 23:14:34.692Z",
    "name": "task",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "plrgdgue",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "z0ptllx7",
        "name": "urgency",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 100000
        }
      },
      {
        "system": false,
        "id": "b272wgkn",
        "name": "importance",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 1000000
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gvyn8o9t1ahjrwr");

  return dao.deleteCollection(collection);
})
