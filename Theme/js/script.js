document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("modeToggle");
    const body = document.body;

    // بررسی و اعمال حالت ذخیره‌شده در localStorage
    if (localStorage.getItem("mode") === "light") {
        body.classList.add("light-mode");
    }

    // تغییر حالت شب/روز و ذخیره در localStorage
    modeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");

        // ذخیره وضعیت در localStorage
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("mode", "light");
        } else {
            localStorage.setItem("mode", "dark");
        }
    });
});