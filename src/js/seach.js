
// ฟังก์ชันค้นหาข้อมูล
const searchUser = () => {
    const searchName = document.getElementById("search").value.trim();
    if (!searchName) {
        alert("กรุณากรอกชื่อก่อนค้นหา!");
        return;
    }

    // เปิดหน้า page2.html พร้อมส่ง Query String
    window.location.href = `record.html?name=${encodeURIComponent(searchName)}`;
};

// เพิ่ม Event Listener ให้ฟอร์ม
document.getElementById("search-form").addEventListener("submit", (event) => {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้า
    searchUser();
});