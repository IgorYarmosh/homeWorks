window.onload = function () {
    let FullName = document.getElementById('FullName');
    FullName.onkeydown = (e) => {
        let string = String(e.key);
        if (!isNaN(string)) {
            return false;
        }
    }

    let YourUsername = document.getElementById('YourUsername');
    YourUsername.onkeydown = (e) => {
        let string = String(e.key);
        if (string === '.' || string === ',') {
            return false;
        }
    }

    let checkbox = document.getElementById('checkbox');
    checkbox.onclick = function () {
        if (this.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    }
    let Email = document.getElementById('Email');
    let Popup = document.getElementById('popup');
    let Password = document.getElementById('Password');
    let RepeatPassword = document.getElementById('RepeatPassword');
    let btn = document.getElementById('btn');
    btn.onclick = function () {
        if (!FullName.value) {
            alert('Заполните поле Full Name!');
            return;
        }
        if (!YourUsername.value) {
            alert('Заполните поле Your username!');
            return;
        }
        if (!Email.value) {
            alert('Заполните поле E-mail!');
            return;
        }
        if (!Password.value) {
            alert('Заполните поле Password!');
            return;
        }
        if (!RepeatPassword.value) {
            alert('Заполните поле Repeat Password!');
            return;
        }
        if (Password.value.length < 8) {
            alert('Пароль сильно короткий. Пароль должен состоять не менее из 8-ми символов!');
            return;
        }
        if (Password.value !== RepeatPassword.value) {
            alert('Введенные пароли не совпадают!');
            return;
        }
        if (!checkbox.checked) {
            alert('Для продолжения необходимо нажать на галочку рядом с Agree to our Terms of Service and Privacy Statement');
            return;
        }
        Popup.style.display = 'block';
    }

    let popup_button = document.getElementById('popup-button');
    let link = document.getElementById('main_part_info_a');
    let h1 = document.getElementById('main_part_info_h1');
    let labelFullName = document.getElementById('labelFullName');
    let labelEmail = document.getElementById('labelEmail');
    let labelRepeatPassword = document.getElementById('labelRepeatPassword');
    let labelCheckbox = document.getElementById('labelCheckbox');

    popup_button.onclick = function () {
        Popup.style.display = 'none';
        goToLogin();
    }

    link.onclick = function () {
    goToLogin();
    }

    function goToLogin() {
        FullName.value = '';
        YourUsername.value = '';
        Email.value = '';
        Password.value = '';
        RepeatPassword.value = '';
        checkbox.checked = false;
        h1.innerHTML = 'Log in to the system';
        labelFullName.parentNode.removeChild(labelFullName);
        labelEmail.parentNode.removeChild(labelEmail);
        labelRepeatPassword.parentNode.removeChild(labelRepeatPassword);
        labelCheckbox.parentNode.removeChild(labelCheckbox);
        btn.innerHTML = 'Sign In';
        link.parentNode.removeChild(link);
        btn.onclick = function () {
            if (!YourUsername.value) {
                alert('Заполните поле Your username!');
                return;
            }
            if (!Password.value) {
                alert('Заполните поле Password!');
                return;
            }
            if (Password.value.length < 8) {
                alert('Пароль сильно короткий. Пароль должен состоять не менее из 8-ми символов!');
                return;
            }
            alert('Добро пожаловать ' + YourUsername.value + '!');
            YourUsername.value = '';
            Password.value = '';
        }
    }
}

