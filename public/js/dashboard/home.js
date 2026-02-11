document.addEventListener("DOMContentLoaded", () => {
    // 1. Ambil Data User dari LocalStorage
    // Data ini disimpan saat login sukses (lihat kode login.js sebelumnya)
    const rawUser = localStorage.getItem("user");

    if (!rawUser) {
        // Jika tidak ada data user, lempar balik ke login
        window.location.href = "/";
        return;
    }

    const user = JSON.parse(rawUser);

    // 2. Set Nama User & Greeting (Selamat Pagi/Siang)
    const greetingEl = document.getElementById("greetingText");
    const hour = new Date().getHours();
    let timeText = "Selamat Pagi";

    if (hour >= 11 && hour < 15) timeText = "Selamat Siang";
    else if (hour >= 15 && hour < 19) timeText = "Selamat Sore";
    else if (hour >= 19 || hour < 4) timeText = "Selamat Malam";

    // Update HTML: "Selamat Siang, Budi 👋"
    if (greetingEl) {
        // user.name diambil dari database
        greetingEl.innerHTML = `${timeText}, ${user.name} 👋`;
    }

    // 3. Set Role User
    const roleEl = document.getElementById("userRoleDisplay");
    if (roleEl) {
        // Format Role: huruf pertama besar (misal: "owner" -> "Owner")
        const roleName = user.role
            ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
            : "Staff";
        roleEl.innerText = roleName;
    }

    // 4. (Opsional) Update juga Nama di Navbar/Header jika ada ID-nya
    // Di header.blade.php Anda, classnya .profile-name
    const headerProfileName = document.querySelector(".profile-name");
    const headerProfileRole = document.querySelector(".profile-role");

    if (headerProfileName) headerProfileName.innerText = user.name;
    if (headerProfileRole) headerProfileRole.innerText = user.role || "Admin";
});
