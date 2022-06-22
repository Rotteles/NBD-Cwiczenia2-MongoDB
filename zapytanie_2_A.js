printjson(db.people.aggregate([
    {$unwind : "$credit"},
    {$addFields: {converted_balance: {$convert: { input: "$credit.balance", to: "decimal"}}}},
    {$group: { _id: "$credit.currency" , sum_balance: {$sum: "$converted_balance"}}}]).toArray())