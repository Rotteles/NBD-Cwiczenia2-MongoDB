var map = function() {emit(this.job, this.job)};
var reduce = function(key, values) {return key};

printjson(db.people.mapReduce(map, reduce,{out: {inline: 1}}))
