var map = function() {this.credit.forEach(e => emit(e.currency, parseFloat(e.balance)))}
var reduce = function(key, values) {return Array.sum(values)};

printjson(db.people.mapReduce(map, reduce, {out: {inline: 1}}))