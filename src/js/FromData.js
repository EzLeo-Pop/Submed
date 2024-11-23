const saveUserData = () => {
  const userData = JSON.parse(sessionStorage.getItem("userData")) || [];

  const newPatient = {
    Username: document.getElementById("Username").value.trim(),
    Surname: document.getElementById("Surname").value.trim(),
    birthdate: document.getElementById("birthdate").value.trim(),
    weight: document.getElementById("weight").value.trim(),
    height: document.getElementById("height").value.trim(),
    date: document.getElementById("date").value.trim(),
    hospital: document.getElementById("hospital").value.trim(),
    department: document.getElementById("department").value.trim(),
    doctor: document.getElementById("doctor").value.trim(),
    idDoctor: document.getElementById("id-doctor").value.trim(),
    vitalSigns: document.getElementById("vital-signs").value.trim(),
    docResults: document.getElementById("doc-results").value.trim(),
    cure: document.getElementById("cure").value.trim(),
  };

  // เพิ่มข้อมูลใหม่
  userData.push(newPatient);

  // บันทึกข้อมูลใน sessionStorage
  sessionStorage.setItem("userData", JSON.stringify(userData));

  // แสดงข้อความยืนยันและรีเซ็ตฟอร์ม
  alert("บันทึกข้อมูลเรียบร้อยแล้ว!");
  document.getElementById("user-form").reset();
};

// เพิ่ม Event Listener ให้ฟอร์ม
document.getElementById("user-form").addEventListener("submit", (event) => {
  event.preventDefault(); // ป้องกันการรีเฟรชหน้า
  saveUserData();
});
