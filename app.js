const validateBtn = document.querySelector('#validateBtn');
const helpBtn = document.querySelector('#helpBtn');

validateBtn.addEventListener('click', () => {
    if (verifyFields()) {
        alert('Merci d\'avoir remplie les champs');
    }
    else {
        alert('NOPE! Veuillez remplir tout les champs');
    }
})

helpBtn.addEventListener('click', () => {
    alert('No help needed for that !!');
})

function verifyFields () {
    const firstName = document.querySelector('.firstName').value;
    const lastName = document.querySelector('.lastName').value;
    return firstName.trim().length && lastName.trim().length;
}