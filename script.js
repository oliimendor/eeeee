alert('Sizda hozir random sonlar chiqishni boshlaydi😊')
let a = Math.round(Math.random() * 100);
let b = (`${a*2}`)
let c = (`${a/2}`)
let d = (`${a%  3}`)
alert(`Random orqali chiqqan son : ${a}`); 
alert('Biz random sonni 2 ga kopaytirmoqchi va bolmoqchimiz!')
alert(`    Random orqali chiqqan son: ${a} edi,
    biz uni 2 ga kopaytirib ${b} sonini chiqardik,
    va shu sonni 2 ga bolib: ${c} sonini chiqardik,
    va shu sonni 3 ga bolgandagi qoldiq: ${d} sonini chiqardik
`)
