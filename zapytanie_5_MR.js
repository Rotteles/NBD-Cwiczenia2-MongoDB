var map = function() { 
        if (this.nationality == "Poland" && this.sex == "Female") {
            this.credit.forEach(e => emit(e.currency, {"sum": parseFloat(e.balance), "count": 1})) 
        }};
var reduce = function(key, values) {return {"sum": Array.sum(values.map(c => c["sum"])), "count": values.length }};
var finalize = function(key, value) {return {sum_balance: (value.sum), avg_balance: (value.sum/value.count)}}

printjson(db.people.mapReduce(map, reduce, {finalize, out: {inline: 1}}))