const clearData = () => {
    document.getElementById('first-name').innerHTML = "";
    document.getElementById('last-name').innerHTML = "";
    document.getElementById('adress-error').innerHTML = "";
    document.getElementById('mail-error').innerHTML = "";
    document.getElementById('first-pass').innerHTML = "";
    document.getElementById('last-pass').innerHTML = "";
    document.getElementById('phn-error').innerHTML = "";
}




const validation = () => {
    const firstName = document.getElementById('user-first').value;
    const lastName = document.getElementById('user-last').value;
    const adressName = document.getElementById('adress-id').value;
    const mailName = document.getElementById('mail-id').value;
    const passName = document.getElementById('pass-id').value;
    const passwName = document.getElementById('passw-id').value;
    const phoneName = document.getElementById('phone-id').value;
    if (firstName === "") {
        document.getElementById('first-name').innerHTML = '**please fill the firsst name';
        return false;

    }
    if (!isNaN(firstName)) {
        document.getElementById('first-name').innerHTML = '**Only charecter are allaowed'
        return false;
    }
    else {
        clearData();
    }
    if (lastName === "") {
        document.getElementById('last-name').innerHTML = '**please fill the last name';
        return false;

    }
    if (!isNaN(lastName)) {
        document.getElementById('last-name').innerHTML = '**Only charecter are allaowed'
        return false;
    }
    else {
        clearData();
    }
    if (adressName === "") {
        document.getElementById('adress-error').innerHTML = '**please fill the adress';
        return false;

    }
    else {
        clearData();
    }
    if (mailName === "") {
        document.getElementById('mail-error').innerHTML = '**please fill the mail adress';
        return false;

    }
    else {
        clearData();
    }
    if (passName === "") {
        document.getElementById('first-pass').innerHTML = '**please type your password';
        return false;

    }
    if (passName.length > 5) {
        document.getElementById('first-pass').innerHTML = '**password can only 5 caprecters';
        return false;
    }
    else {
        clearData();
    }
    if (passwName === "") {
        document.getElementById('last-pass').innerHTML = '**please confirm your password';
        return false;

    }
    if (passName !== passwName) {
        document.getElementById('last-pass').innerHTML = '**not match';
        return false;
    }
    else {
        clearData();
    }
    if (phoneName === "") {
        document.getElementById('phn-error').innerHTML = '**please type your phone number';
        return false;

    }
    if (isNaN(phoneName)) {
        document.getElementById('phn-error').innerHTML = '**please type only number';
        return false;
    }
    if (phoneName.length !== 14) {
        document.getElementById('phn-error').innerHTML = '**please type correct number';
        return false;
    }
    else {
        clearData();
    }



}