let searchByName =()=> {
    const Usernamecheck = document.getElementById("name-check").value

    if (Usernamecheck === "") {
    alert("กรุณากรอกชื่อที่ต้องการค้นหา");
    return;
    }

    window.location.href = `record.html?name=${encodeURIComponent(Usernamecheck)}`;
}