migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gvyn8o9t1ahjrwr")

  collection.name = "tasks"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gvyn8o9t1ahjrwr")

  collection.name = "task"

  return dao.saveCollection(collection)
})
