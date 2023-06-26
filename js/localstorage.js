// Chargement du localstorage
function loadLocalStorage() {
    dict_storage = JSON.parse(localStorage.getItem('EGGaming_dict'));

    // Création si pas encore existant
    if (!dict_storage) {
        dict_storage = {}
    };
};

// Fonction d'enregistrement dans le localstorage
function saveLocalStorage() {
    let dict = JSON.stringify(dict_storage)
    localStorage.setItem('EGGaming_dict', dict);
};
