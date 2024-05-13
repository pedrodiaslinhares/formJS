function validar() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let msg = document.getElementById('msg').value;
    let valid= true;

    if (nome === '') {
        document.getElementById('nome-error').innerText = 'Por favor, preencha este campo.';
        document.getElementById('nome').classList.add('error-border');
        valid = false;
    } else {
        document.getElementById('nome-error').innerText = '';
        document.getElementById('nome').classList.remove('error-border');
    }

    if (email === '') {
        document.getElementById('email-error').innerText = 'Por favor, preencha este campo.';
        document.getElementById('email').classList.add('error-border');
        valid = false;
    } else {
        document.getElementById('email-error').innerText = '';
        document.getElementById('email').classList.remove('error-border');
    }

    if (msg === '') {
        document.getElementById('msg-error').innerText = 'Por favor, preencha este campo.';
        document.getElementById('msg').classList.add('error-border');
        valid = false;
    } else {
        document.getElementById('msg-error').innerText = '';
        document.getElementById('msg').classList.remove('error-border');
    }

    if (valid) {
        alert('Mensagem enviada com sucesso!');
    }
}