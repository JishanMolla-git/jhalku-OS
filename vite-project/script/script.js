const drawerWrapper = document.getElementById('darwer-wrapper')
const drawer = document.getElementById('app-drawer')

// drawer.classList.add('bottom')

window.addEventListener('keydown', move)

const getArrowKey = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
}

const drawerState = {
    opened: false,
    fromBottom: false,
    fromRight: false,
    fromLeft: false,

}

function removeClass() {
    for (const iterator of drawer.classList) {
        if (iterator !== 'app-drawer')
            drawer.classList.remove(iterator)
    }
}

const upArrow = () => {
    removeClass()
    drawer.classList.add('bottom')
    drawerWrapper.style.transform = 'translateY(-100px)';
}

const leftArrow = () => {
    removeClass()
    drawer.classList.add('right')
    drawerWrapper.style.transform = 'translateX(-120px)';
}

const rightArrow = () => {
    removeClass()
    drawer.classList.add('left')
    drawerWrapper.style.transform = 'translateX(120px)';
}



function move(event) {
    key = getArrowKey[event.keyCode]



    if (drawerState.fromBottom) {
        switch (key) {
            case "up":
                drawerWrapper.style.transform = "translateY(0)";
                drawerState.opened = false;
                break;

            default:
                break;
        }
    } else if (drawerState.fromLeft) {
        switch (key) {
            case 'left':
                drawerWrapper.style.transform = "translateX(0)";
                drawerState.opened = false;
                break;

            default:
                break;
        }
    } else if (drawerState.fromRight) {
        switch (key) {
            case 'right':
                drawerWrapper.style.transform = "translateY(0)";
                drawerState.opened = false;
                break;

            default:
                break;
        }
    }
    switch (key) {
        case "up":
            drawerWrapper.style.opacity = '1'
            upArrow();
            drawerState.fromBottom = true;
            drawerState.fromLeft = false;
            drawerState.fromRight = false;
            drawerState.opened = true;
            break;

        case "left":
            drawerWrapper.style.opacity = '1'
            leftArrow();
            drawerState.fromLeft = true
            drawerState.fromRight = false
            drawerState.fromBottom = false
            drawerState.opened = true;
            break
        case 'right':
            drawerWrapper.style.opacity = '1'
            rightArrow()
            drawerState.fromLeft = false
            drawerState.fromRight = true
            drawerState.fromBottom = false
            drawerState.opened = true;
            break
        default:
            break;
    }
}


