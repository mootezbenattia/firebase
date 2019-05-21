
//getting docs
const x=document.getElementById('cafe-list');

function render(doc){
    let li=document.createElement('li');
    let name=document.createElement('span');
    let city=document.createElement('span');


    li.setAttribute('li-id', doc.id);
    name.textContent=doc.data().name;
    city.textContent=doc.data().city;


    li.appendChild(name);
    li.appendChild(city);
    x.appendChild(li);
}


db.collection('cafes').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
    render(doc);
    });


})