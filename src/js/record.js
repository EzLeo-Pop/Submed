let getQueryParameter =(param)=> {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


let ShowData = ()=> {
const userData = JSON.parse(sessionStorage.getItem('userData')) || [] ;
const searchName = getQueryParameter("name");

const displayData = document.getElementById('tabel-record')

userData.forEach(data => {
    const newData = document.createElement('tbody')
    newData.innerHTML = `<td>
                        <p>${data.Username}</p>
                        <p>เข้าตรวจวันที่: ${data.date}</p>
                        <p>แผนก: ${data.department}</p>
                    </td>
                    <td class="btn-other">
                        <button>แสดงข้อมูลเพิ่มเติม</button>
                    </td>
                    `
    

    displayData.appendChild(newData)
});
}

let btn_add_data = document.getElementById('btn-add-data')
btn_add_data.onclick =()=> {
    window.location.href = 'fromhistory.html'
}

window.onload = ShowData;

