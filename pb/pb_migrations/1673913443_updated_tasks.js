migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gvyn8o9t1ahjrwr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xudtflux",
    "name": "notes",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 10000,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gvyn8o9t1ahjrwr")

  // remove
  collection.schema.removeField("xudtflux")

  return dao.saveCollection(collection)
})
