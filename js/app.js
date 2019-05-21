
//getting data :where pour afficher des données bien spécifiques,:orderBy pour ordonner les données ;:
const x = document.getElementById('cafe-list');

function render(doc) {
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('li-id', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    cross.textContent= 'x';

    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);
    x.appendChild(li);
    cross.addEventListener('click',(e)=>{
        e.stopPropagation();
        let id=e.target.parentElement.getAttribute('li-id');
        db.collection('cafes').doc(id).delete();
    })
}


db.collection('cafes').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        render(doc);
    });


});
//saving data
const form = document.getElementById('add-cafe-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    db.collection('cafes').add({
        name: form.name.value,
        city: form.city.value
    });
    form.name.value="";
    form.city.value="";
});


