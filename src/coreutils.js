Date.today = function() {
  let today = new Date();
  return today.getDate() + "." + today.getMonth() + "." + today.getFullYear();
}

Array.prototype.groupBy = function(groupFunction) {
  let groups = {};

  this.forEach(function(item, index, array) {
    let key = groupFunction(item);
    groups[key] = [...groups[key] || [], item]
  });

  return groups;
}
