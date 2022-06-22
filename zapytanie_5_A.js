printjson(db.people.aggregate([
    {$match: {nationality: "Poland", sex: "Female"}},
    {$unwind: "$credit"},
    {$addFields: {converted_balance: {$convert: {input: "$credit.balance", to: "decimal"}}}},
    {$group: {_id: "$credit.currency", sum_balance: {$sum: "$converted_balance"}, avg_balance: {$avg: "$converted_balance"}}}
]).toArray())