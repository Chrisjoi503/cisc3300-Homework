const cats = [
    {
        name: 'Charlie',
        adoptionStatus: 'available'
    },
    {
        name: 'Lily',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Coco',
        adoptionStatus: 'available'
    },
    {
        name: 'Oreo',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Luna',
        adoptionStatus: 'available'
    },
    {
        name: 'Milo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lola',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Leo',
        adoptionStatus: 'available'
    },
    {
        name: 'Willow',
        adoptionStatus: 'available'
    },
    {
        name: 'Bella',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Max',
        adoptionStatus: 'available'
    },
    {
        name: 'Cleo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lucy',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Daisy',
        adoptionStatus: 'available'
    },
];

const cat = {name:"Pinecone", age:13, type:'Munchkin', cuteness: 9001};
// problem 6
const result= [];
for(i=0; i<cats.length;i++){
    if( cats[i].adoptionStatus==='available')
    {
        result.push(cats[i].name);
    }
}
console.log(`The cats with available adoption status are ${result.join(', ')}`);

console.log();

// problem 7
let number= Math.random() * 10
let results= number>=5 ?
"greater than five!":"less than five!"
console.log(results)

console.log();
// problem 8
for(const property in cat) {
    console.log(cat[property])
  }

console.log();
// problem 9 
  if(1 == "1"){
    console.log("true")
}

if(1 ==="1"){
    console.log("true")
}
else
    console.log("false")

console.log();
// problem 10
const cats2 = cats.map(function(cats){
    return cats.name +  ' is cute! '
 })
    console.log(cats2)
    
    for(const property in cats2)
    console.log(cats2[property]);