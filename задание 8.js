let flowers = new Map ([
  ["iris", "violet"],
  ["lily", "white"],
  ["rose", "red"]
]); 
for (let flower of flowers.keys()){
    console.log(flower + " - " + flowers.get(flower));
}