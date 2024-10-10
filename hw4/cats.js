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

function makeListBlue() {
    document.getElementById("myList").style.color = "blue";
}

var myList = document.getElementById("myList");
myList.addEventListener("click", makeListBlue);

var catsList = document.getElementById("cats-list");
for(catObject of cats) {
    catsList.innerHTML += `<li> ${catObject.name} </li>`;
}

function submitForm(event) {
    event.preventDefault();
    var inputText = document.getElementById("inputText").value;
    console.log(inputText);

    var result = document.getElementById("resultMessage");
    if(inputText == "") {
        result.innerHTML = "Please Provide a Value";
        result.style.backgroundColor = "red";
    }
    else {
        result.innerHTML = "Success";
        result.style.backgroundColor = "green";
    }
    return false;
}
