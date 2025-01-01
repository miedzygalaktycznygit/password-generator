document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('my_range');
    const passwordLenght = document.getElementById('character_amount');
    const ifUppercase = document.getElementById('uppercase');
    const ifLowercase = document.getElementById('lowercase');
    const ifNumbers = document.getElementById('numbers');
    const ifSymbols = document.getElementById('symbols');
    const generate = document.getElementById('button_generate');
    const your_password = document.getElementById('your_password');
    const strengthOfPassword = document.querySelectorAll('[class^="bar"]');
    const weakOrStrong = document.getElementById('strength');
    const gapValue = document.getElementById('password_strength');
    const copy = document.getElementById('your_password');
    const copyButton = document.getElementById('coppy');


    copyButton.addEventListener('click', () => {
        const textToCopy = copy.textContent;
        navigator.clipboard.writeText(textToCopy);
        //console.log(textToCopy);
    });

    ifUppercase.addEventListener('change', () => {
        strengthPassword(ifUppercase, ifLowercase, ifNumbers, ifSymbols);
    });
    ifLowercase.addEventListener('change', () => {
        strengthPassword(ifUppercase, ifLowercase, ifNumbers, ifSymbols);
    });
    ifNumbers.addEventListener('change', () => {
        strengthPassword(ifUppercase, ifLowercase, ifNumbers, ifSymbols);
    });
    ifSymbols.addEventListener('change', () => {
        strengthPassword(ifUppercase, ifLowercase, ifNumbers, ifSymbols);
    });

    function strengthPassword(ifUppercase, ifLowercase, ifNumbers, ifSymbols){
        strengthOfPassword.forEach(bar => {
            bar.style.backgroundColor = 'hsla(240, 10.70%, 11.00%, 0.00)';
        });
        strengthOfPassword[0].style.backgroundColor = 'rgb(57, 236, 41)';
        let strength = 0;
        if(ifUppercase.checked)
            strength += 1;
        if(ifLowercase.checked)
            strength += 1;
        if(ifNumbers.checked)
            strength += 1;
        if(ifSymbols.checked)
            strength += 1;
        if(strength === 1){
            strengthOfPassword[0].style.backgroundColor = 'rgb(57, 236, 41)';
            weakOrStrong.textContent = 'very Weak';
            gapValue.style.gap = '3.52rem';
        }
        else if(strength === 2){
            strengthOfPassword[0].style.backgroundColor = 'rgb(236, 233, 41)';
            strengthOfPassword[1].style.backgroundColor = 'rgb(236, 233, 41)';
            weakOrStrong.textContent = 'Weak';
            gapValue.style.gap = '7.7rem';
        }
        else if(strength === 3){
            strengthOfPassword[0].style.backgroundColor = 'rgb(238, 132, 33)';
            strengthOfPassword[1].style.backgroundColor = 'rgb(238, 132, 33)';
            strengthOfPassword[2].style.backgroundColor = 'rgb(238, 132, 33)';
            weakOrStrong.textContent = 'medium';
            gapValue.style.gap = '6rem';
        }

        else if(strength === 4){
            strengthOfPassword[0].style.backgroundColor = 'rgb(238, 74, 33)';
            strengthOfPassword[1].style.backgroundColor = 'rgb(238, 74, 33)';
            strengthOfPassword[2].style.backgroundColor = 'rgb(238, 74, 33)';
            strengthOfPassword[3].style.backgroundColor = 'rgb(238, 74, 33)';
            weakOrStrong.textContent = 'Strong';
            gapValue.style.gap = '6rem';
        }

    }

    slider.addEventListener('input', () => {
        const value = slider.value;
        console.log(value);
        const max = slider.max;
        const final = (value * 100) / max;
        if(value < 10)
            passwordLenght.innerHTML = `0${value}`;
        else
            passwordLenght.innerHTML = value;
        slider.style.background = `linear-gradient(90deg, hsl(134, 100%, 80%) ${final-5}%, hsl(240, 10%, 11%) ${final-5}%)`;
    });

    function generatePassword(value, ifUppercase, ifLowercase, ifNumbers, ifSymbols){
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbersChars = '0123456789';
        const symbolsChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

        let allowedChars = '';
        let password = '';

        allowedChars += ifUppercase.checked ? uppercaseChars : '';
        allowedChars += ifLowercase.checked ? lowercaseChars : '';
        allowedChars += ifNumbers.checked ? numbersChars : '';
        allowedChars += ifSymbols.checked ? symbolsChars : '';
        //console.log(allowedChars);
        //console.log(value);

        if(allowedChars === ''){
            alert('Please select at least one character type');
            return;
        }

        for(let i = 0; i < value; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
        //console.log(password+ ' '+password.length);
        your_password.innerHTML = password;
        your_password.style.color = 'rgb(221, 221, 221)';
        //console.log(password+ ' '+password.length);
    }

    generate.addEventListener('click', () => {
        generatePassword(slider.value, ifUppercase, ifLowercase, ifNumbers, ifSymbols);
    });

});
