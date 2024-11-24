function btn(event) {
    event.preventDefault();

    const user = document.getElementById("IU").value;
    const password = document.getElementById("IP").value;

    if (user === "docter" && password === "1234") {
        document.getElementById("T").textContent = "เข้าสู่ระบบสำเร็จ";
        document.getElementById("T").style.color = "green";
        window.location.href = "mainDoctor.html"; 
    } else {
        document.getElementById("T").textContent = "Invalid email address or password";
        document.getElementById("T").style.color = "red";
    }
}