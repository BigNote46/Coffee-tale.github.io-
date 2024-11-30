// script.js
document.getElementById('loginForm').addEventListener('submit', function(e) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // ตัวอย่างการตรวจสอบข้อมูลล็อคอิน
    if(username === "user" && password === "12345") {
        alert("เข้าสู่ระบบสำเร็จ!");
    } else {
        e.preventDefault(); // หยุดการส่งฟอร์ม
        alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
});
