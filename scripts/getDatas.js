// eslint-disable-next-line no-unused-vars
const pathJsonProject = "./data/photographers.json";
// Fonction pour récupérer les données via le fetch
// eslint-disable-next-line no-unused-vars
async function getDatas(pathJson) {
    try {
        const fetchJson = await fetch(pathJson);
        const backFetch = await fetchJson.json();
        console.log("réponse de backFetch", backFetch);
        return backFetch;
    } catch (erreur) {
        console.log(erreur);
    }
}