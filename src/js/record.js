
let getQueryParameter = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
};

// ฟังก์ชันแสดงข้อมูลผลการค้นหา
let ShowData = () => {
    const userData = JSON.parse(sessionStorage.getItem("userData")) || []; // ดึงข้อมูลทั้งหมด
    const searchName = getQueryParameter("name"); // ชื่อที่ค้นหาจาก Query String
    const resultContainer = document.getElementById("result-container"); // ช่องสำหรับแสดงข้อมูล

    // ค้นหาข้อมูลที่ตรงกับชื่อที่ป้อนมา
    const filteredData = userData.filter(data =>
        data.Username.toLowerCase() === searchName.toLowerCase()
    );

    // หากไม่พบข้อมูล
    if (filteredData.length === 0) {
        resultContainer.innerHTML = `<p class="no-result">ไม่พบข้อมูลสำหรับชื่อ "${searchName}"</p>`;
        return;
    }

    // หากพบข้อมูล แสดงข้อมูลผู้ป่วยในรูปแบบ HTML
    filteredData.forEach(data => {
        const patientCard = document.createElement("div");
        patientCard.classList.add("patient-card");
        patientCard.innerHTML = `
        <div class="container">
        <div id="result-container">
            <div class="record">
                <div class="info-detail">
                  <p>${data.Username} ${data.Surname}</p>
                  <p>เข้าตรวจวันที่: ${data.date}</p>
                  <p>แผนก: ${data.department}</p>
                </div>
                <div class="btn-other-detail-content">
                  <button id="btn-other-detail">แสดงข้อมูลเพิ่มเติม</button>
                  <button id="btn-tabeladd-detail">เพิ่มตารางนัดหมาย</button>
                </div>
              </div>
              <form class="form-detail-other" id="form-detail-other">
                <h2>ข้อมูลทั้งหมด</h2>
                <div class="row-detail">
                  <div class="field-detail">
                    <label>ชื่อผู้ป่วย</label>
                    <div class="blockbg">
                      <label class="fixtextlabel">ชื่อ:${data.Username}</label>
                    </div>
                  </div>
                  <div class="field-detail" style="margin-top: 17px;">
                    <div class="blockbg">
                      <label class="fixtextlabel">นามสกุล: ${data.Surname}</label>
                    </div>
                  </div>
                </div>
                <div class="row-detail">
                  <div class="field-detail">
                    <label>วัน /เดือน/ปี ที่เกิด</label>
                    <div class="blockbg">
                      <label class="fixtextlabel">${data.birthdate}</label>
                    </div>
                  </div>
                  <div class="field-detail">
                    <label>น้ำหนัก</label>
                    <div class="blockbg">
                      <label class="fixtextlabel">${data.weight}</label>
                    </div>
                  </div>
                  <div class="field-detail">
                    <label>ส่วนสูง</label>
                    <div class="blockbg">
                      <label class="fixtextlabel">${data.height}</label>
                    </div>
                  </div>
                </div>
          
                <div class="row-detail">
                  <div class="field-detail">
                    <label>วันที่เข้ารับการรักษาครั้งล่าสุด</label>
                    <div class="blockbg">
                      <label class="fixtextlabel">${data.date}</label>
                    </div>
                  </div>
                  <div class="field-detail">
                    <label>โรงพยาบาล</label>
                    <div class="blockbg">
                      <label class="fixtextlabel">${data.hospital}</label>
                    </div>
                  </div>
                </div>
          
                <div class="row-detail">
                  <div class="field-detail">
                    <label>แผนก</label>
                    <div class="blockbg">
                      <label class="fixtextlabel">${data.department}</label>
                    </div>
                  </div>
                  <div class="field-detail">
                    <label>แพทย์ผู้ดูแล</label>
                    <div class="blockbg">
                      <label class="fixtextlabel">${data.doctor}</label>
                    </div>
                  </div>
                </div>
          
                <div class="row-detail">
                  <div class="field-detail">
                    <label>หมายเลขบัตรของแพทย์</label>
                    <div class="blockbg">
                      <label class="fixtextlabel">${data.idDoctor}</label>
                    </div>
                  </div>
                  <div class="field-detail">
                    <label>สัญญาณชีพ</label>
                    <div class="blockbg">
                      <label class="fixtextlabel">${data.vitalSigns}</label>
                    </div>
                  </div>
                </div>
          
                <div class="row-detail">
                  <div class="field-detail">
                    <label>ผลการวินิจฉัย</label>
                    <div class="blockbg">
                      <label class="fixtextlabel">${data.docResults}</label>
                    </div>
                  </div>
                </div>
          
                <div class="row-detail">
                  <div class="field-detail">
                    <label>การรักษา</label>
                    <div class="blockbg">
                      <label class="fixtextlabel">${data.cure}</label>
                    </div>
                  </div>
              </form>
            </div>
            </div>
        </div>
        `;
        resultContainer.appendChild(patientCard);
    });
    let btn_other = document.getElementById('btn-other-detail')

  btn_other.onclick =() => {
  document.getElementById('form-detail-other').style.display = "block"
}

document.getElementById('btn-tabeladd-detail').onclick = () => {
  window.location.href = "tabledoc.html"
}

};

// เรียกใช้งาน ShowData เมื่อโหลดหน้า
window.onload = ShowData;

