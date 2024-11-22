let userData = []

let addDataToArray = ()=> {
    const username = document.getElementById('Username').value
    const surname = document.getElementById('Surname').value
    const weight = document.getElementById('weight').value
    const heigh = document.getElementById('heigh').value
    const date = document.getElementById('date').value
    const hospital = document.getElementById('hospital').value
    const department = document.getElementById('department').value
    const doctor = document.getElementById('doctor').value
    const idDoctor = document.getElementById('id-doctor').value
    const vital = document.getElementById('vital-signs').value
    const doc_results = document.getElementById('doc-results').value
    const cure = document.getElementById('cure').value

    const newdata = {
        Username : username ,
        surname : surname ,
        weight : weight , 
        heigh : heigh , 
        date : date , 
        hospital : hospital ,
        department : department , 
        doctor : doctor ,
        id_Doctor : idDoctor ,
        vital : vital , 
        doc_results : doc_results ,
        cure : cure
    } 

    userData.push(newdata)

    sessionStorage.setItem("userData" , JSON.stringify(userData))

    let alertCon = document.getElementById('alert-con')
    let alertContent = document.getElementById('alert-content')

    alertCon.classList.add("active-content")
    alertContent.style.display = "block"
}

let btncancle = document.getElementById('icon-cancle-alert')

btncancle.onclick = () => {
    let alertCon = document.getElementById('alert-con')
    let alertContent = document.getElementById('alert-content')

    alertCon.classList.remove('active-content')
    alertContent.style.display = "none"
}
