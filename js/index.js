function changeTheme() {
    let theme = document.getElementById("theme").value;
    switch (theme) {
        case 'light':
            document.body.style.background = 'white';
            break;
        case 'blue':
            document.body.style.background = 'rgba(74, 74, 252, 0.877)';
            break;
        case 'red':
            document.body.style.background = 'rgb(255, 153, 153)';
            break;
        case 'pink':
            document.body.style.background = 'pink';
            break;
        case 'yellow':
            document.body.style.background = 'lightyellow';
            break;
    }
}