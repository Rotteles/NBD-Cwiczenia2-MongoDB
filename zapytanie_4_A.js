printjson(db.people.aggregate([
    {$addFields: {bmi: {$divide: ["$weight", {$pow: [{$divide: ["$height", 100]}, 2]}]},}},
    {$group: {_id: "$nationality", avg_bmi: {$avg: "$bmi"}, min_bmi: {$min: "$bmi"}, max_bmi: {$max: "$bmi"}}}]).toArray())