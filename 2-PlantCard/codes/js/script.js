function clickMenu(){
    const menuShare = document.querySelector(".menu-share")

    if (menuShare.style.display == 'flex'){
        menuShare.style.display = 'none'
    }
    else{
        menuShare.style.display = 'flex'
    }
}