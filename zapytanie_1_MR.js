var map = function() { emit(this.sex, {"weight": this.weight, "height": this.height, "count": 1})};
var reduce = function(key, values) { 
        return { 
            "weight": Array.sum(values.map(e => e["weight"])), 
            "height": Array.sum(values.map(e => e["height"])), 
            "count": Array.sum(values.map(e => e["count"])) 
}};
var finalize = function(key, value) {return {"avgWeight": (value.weight/value.count), "avgHeight": (value.height/value.count)}};

printjson(db.people.mapReduce(map, reduce, {finalize, out: {inline: 1}}))		

