migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gvyn8o9t1ahjrwr")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gvyn8o9t1ahjrwr")

  collection.createRule = null

  return dao.saveCollection(collection)
})
