// const unifatecieBtn = document.getElementById('unifatecie-btn')

const uninassauBtn = document.getElementById('uninassau-btn')

// const formUnifatecie = document.getElementById('form-unifatecie')

const formUninassau = document.getElementById('form-uninassau')

formUninassau.addEventListener('submit', (e)=>{
    e.preventDefault()
})

uninassauBtn.addEventListener('click', ()=>{
    const formUninassau = document.getElementById('form-uninassau')
    formUninassau.style.marginLeft = 0

    const fecharUninassau = document.getElementById('fechar-uninassau')

    fecharUninassau.addEventListener('click', ()=>{
        formUninassau.style.marginLeft = '-200%'
    })
})

// formUnifatecie.addEventListener('submit', (e)=>{
//     e.preventDefault()
// })

// unifatecieBtn.addEventListener('click', (e) =>{
//     e.preventDefault()
//     const formUnifatecie = document.getElementById('form-unifatecie')
//     formUnifatecie.style.marginLeft = 0

//     const fecharUnifatecie = document.getElementById('fechar-unifatecie')

//     fecharUnifatecie.addEventListener('click', ()=>{
//         formUnifatecie.style.marginLeft = '-200%'
//     })
// })

// const sendInfosUnifatecie = document.getElementById('enviar-unifatecie')
    
//     sendInfosUnifatecie.addEventListener('click', () => {
//     const nome = document.getElementById('nome-usuario').value
//     const email = document.getElementById('email-usuario').value
//     const telefone = document.getElementById('tel-usuario').value
//     const curso = document.getElementById('graduacao').value

//     if (nome !== '' && email !== '' && telefone !== '' && curso !== ''){
//         let url = (`https://api.whatsapp.com/send?phone=5521980269968&text= Olá vim através do consultor *Cauã Santos*, me chamo *${nome}* e gostária de saber mais informações sobre o curso de *${curso}*. Segue meus meios de contato: TELEFONE: *${telefone}* ou EMAIL: *${email}*. Desde já agradeço pela atenção! Fico no aguardo`);
   
//         window.open(url);
//     } else {
//         alert('Por favor, preencha os campos corretamente e selecione as opções nas listas.')
//     }
// })

const sendInfosUninassau = document.getElementById('enviar-uninassau')
    
    sendInfosUninassau.addEventListener('click', () => {
    const nome = document.getElementById('nome-usuario-uninassau').value
    const email = document.getElementById('email-usuario-uninassau').value
    const telefone = document.getElementById('tel-usuario-uninassau').value
    const curso = document.getElementById('graduacao-uninassau').value

    if (nome !== '' && email !== '' && telefone !== '' && curso !== ''){
        let url = (`https://api.whatsapp.com/send?phone=5587991829470&text= Olá vim através da ação da UNINASSAU na ETE DE Buique, me chamo *${nome}* e gostária de saber mais informações sobre o curso de *${curso}*. Segue meus meios de contato: TELEFONE: *${telefone}* ou EMAIL: *${email}*. Desde já agradeço pela atenção! Fico no aguardo`);
   
        window.open(url);
    } else {
        alert('Por favor, preencha os campos corretamente e selecione as opções nas listas.')
    }
})