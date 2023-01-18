migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gvyn8o9t1ahjrwr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m7bnkxly",
    "name": "completed",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r4pa06ns",
    "name": "needed",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 10,
      "collectionId": "gvyn8o9t1ahjrwr",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gvyn8o9t1ahjrwr")

  // remove
  collection.schema.removeField("m7bnkxly")

  // remove
  collection.schema.removeField("r4pa06ns")

  return dao.saveCollection(collection)
})
