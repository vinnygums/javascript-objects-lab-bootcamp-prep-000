var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object, { [key]: value} )
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj.key
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}
