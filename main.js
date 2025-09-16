// عناصر البحث
const openSearch = document.getElementById("openSearch");
const closeSearch = document.getElementById("closeSearch");
const searchPopup = document.getElementById("searchPopup");

// عناصر المستخدم
const userBtn = document.getElementById("userBtn");
const closeUser = document.getElementById("closeUser");
const userPopup = document.getElementById("userPopup");

// عناصر البرجر
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

// تبديل بين تسجيل الدخول/إنشاء الحساب
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const formTitle = document.getElementById("formTitle");
const toggleForm = document.getElementById("toggleForm");

// إظهار بوب أب البحث
openSearch.addEventListener("click", () => {
  searchPopup.style.display = "flex";
});
closeSearch.addEventListener("click", () => {
  searchPopup.style.display = "none";
});

// إظهار بوب أب المستخدم
userBtn.addEventListener("click", () => {
  userPopup.style.display = "flex";
});
closeUser.addEventListener("click", () => {
  userPopup.style.display = "none";
});

// إغلاق عند الضغط خارج المحتوى
window.addEventListener("click", (e) => {
  if (e.target === searchPopup) searchPopup.style.display = "none";
  if (e.target === userPopup) userPopup.style.display = "none";
});

// تبديل بين تسجيل الدخول وإنشاء حساب
toggleForm.addEventListener("click", (e) => {
  e.preventDefault();
  if (loginForm.style.display !== "none") {
    loginForm.style.display = "none";
    signupForm.style.display = "flex";
    formTitle.textContent = "إنشاء حساب";
    toggleForm.innerHTML = "لديك حساب بالفعل؟ <a href='#'>دخول</a>";
  } else {
    loginForm.style.display = "flex";
    signupForm.style.display = "none";
    formTitle.textContent = "تسجيل الدخول";
    toggleForm.innerHTML = "ليس لديك حساب؟ <a href='#'>تسجيل</a>";
  }
});

// قائمة البرجر
burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});