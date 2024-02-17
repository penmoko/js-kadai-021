const h2Text = document.getElementById('text');
const btn = document.getElementById('btn');


// setTimeout(() => {
//     btn.addEventListener('click', () =>
//     {
//     h2Text.textContent = 'ボタンをクリックしました'
// })
// }, 2000);


btn.addEventListener('click', () =>{
    setTimeout(() =>{
        h2Text.textContent = 'ボタンをクリックしました'        
    }, 2000)
})

