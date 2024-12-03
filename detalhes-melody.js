let mainI = document.getElementById('image')
let i1 = document.getElementById('1')
let i2 = document.getElementById('2')
let i3 = document.getElementById('3')
let i4 = document.getElementById('4')
i1.addEventListener("click", function(e){
    e.preventDefault();
    mainI.setAttribute('src','./assets/img/my-melody/my-melody.png')
})
i2.addEventListener("click", function(e){
    e.preventDefault();
    mainI.setAttribute('src','./assets/img/my-melody/my-melody-hero.jpg')
})
i3.addEventListener("click", function(e){
    e.preventDefault();
    mainI.setAttribute('src','./assets/img/my-melody/mymelody.png')
})
i4.addEventListener("click", function(e){
    e.preventDefault();
    mainI.setAttribute('src','./assets/img/my-melody/my-melody3.png')
})