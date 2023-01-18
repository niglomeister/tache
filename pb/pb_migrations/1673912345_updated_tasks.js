migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gvyn8o9t1ahjrwr")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gvyn8o9t1ahjrwr")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
