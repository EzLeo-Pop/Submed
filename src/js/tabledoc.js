let btnAddTimeTable = document.getElementById('btn-add-timetable')

btnAddTimeTable.onclick =()=> {
    document.getElementById('from-table-time').style.display = "block"
}

let btnCancleTimeTable = document.getElementById('cancle-btn-time')

btnCancleTimeTable.onclick =()=> {
    document.getElementById('from-table-time').style.display = "none"
}

// เก็บข้อมูลการนัดหมายใน Array
const appointments = [];

// ดึงองค์ประกอบจาก DOM
const form = document.getElementById('form-table-deatil');
const tableBody = document.querySelector('#appointmentTable tbody');
const addTableButton = document.getElementById('add-detail-from');

// ฟังก์ชันเพิ่มข้อมูลใน Array และอัปเดตตาราง
addTableButton.onclick =()=> {
    // ดึงค่าจากฟอร์ม
    const Username_t = document.getElementById('username-time').value
    const Surname_t = document.getElementById('surname-time').value
    const department_t = document.getElementById('department-time').value
    const doctername_t = document.getElementById('doctername-time').value
    const dateTimeBefore_t = document.getElementById('date-time-before').value
    const dateTimeAfter_t = document.getElementById('date-time-after').value

    // ตรวจสอบว่ากรอกข้อมูลครบหรือยัง
    /*
    if (!patientName || !appointmentDate || !appointmentTime) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        return;
    }
    */
    // เพิ่มข้อมูลลงใน Array
    appointments.push({
        Username_t,
        Surname_t,
        department_t,
        doctername_t,
        dateTimeBefore_t,
        dateTimeAfter_t
    });

    // อัปเดตตาราง
    updateTable();

    // รีเซ็ตฟอร์ม
    resetForm()
}

// ฟังก์ชันอัปเดตข้อมูลในตาราง
function updateTable() {
    // เคลียร์ข้อมูลเก่าจากตาราง
    tableBody.innerHTML = '';

    // ใช้ for...of loop เพื่อแสดงข้อมูลในตาราง
    let index = 0; // ตัวแปรลำดับ
    for (const appointment of appointments) {
        index++; // เพิ่มลำดับ
        const row = document.createElement('tr');
        row.innerHTML = `
                <td>${index}</td>
                <td>${appointment.Username_t} ${appointment.Surname_t}</td>
                <td>${appointment.department_t}</td>
                <td>${appointment.doctername_t}</td>
                <td>${appointment.dateTimeBefore_t}</td>
                <td>${appointment.dateTimeAfter_t}</td>
        `;
        tableBody.appendChild(row);
    }
}

function resetForm() {
    const Username_t = document.getElementById('username-time').value = ""
    const Surname_t = document.getElementById('surname-time').value = ""
    const department_t = document.getElementById('department-time').value = ""
    const doctername_t = document.getElementById('doctername-time').value = ""
    const dateTimeBefore_t = document.getElementById('date-time-before').value = ""
    const dateTimeAfter_t = document.getElementById('date-time-after').value = ""
}