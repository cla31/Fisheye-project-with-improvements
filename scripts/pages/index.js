function displayPhotographers(id, photographers) {
    try {
        document.getElementById(id).innerHTML = ` ${photographers.map( photograph =>  {return photograph.displayPhotographer()
        }).join('')}`;
    } catch (erreur) {
        console.log(erreur);
    }
}

//Fonction map pour instancier un objet:
// Tableau appelant : elements
// Nouveau tableau : ObjectElements
// Fonction qui appelle : function instance(media) {
// return new Instance(media)}

function Objects(elements, Instance) {
    try {
        objectElements = elements.map(function instance(element) {
            return new Instance(element);
        });
        return objectElements;
    } catch (erreur) {
        console.log(erreur);
    }

}

async function orchestrator(pathJson) {
    try {
        const jsonDatas = await getDatas(pathJson);
        const dataPhotos = jsonDatas.photographers;
        console.log("Les datas des photographes: ", dataPhotos);
        const objectPhotographers = Objects(dataPhotos, Photographer);
        console.log("Les objets photographes: ", objectPhotographers);
        displayPhotographers("photographers", objectPhotographers);

    } catch (erreur) {
        console.log(erreur);
    }
}
orchestrator(pathJsonProject);