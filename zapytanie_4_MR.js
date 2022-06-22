var map = function() {emit(this.nationality, {weight: this.weight, height: this.height})};
var reduce = function(key, values){
	let sum_bmi= 0; let max_bmi= 0; let min_bmi = Infinity;
	values.forEach(value => { 
		const converted_height = value.height/100;
		const bmi = value.weight/(converted_height*converted_height);
		sum_bmi += bmi;
		if (bmi > max_bmi) {
			max_bmi = bmi;
		}
		if (bmi < min_bmi) {
			min_bmi = bmi;
		}
});
return {minimalBMI: min_bmi, averageBMI: (sum_bmi/values.length),  maximalBMI: max_bmi}};

printjson(db.people.mapReduce(map, reduce, {out: {inline: 1}}))