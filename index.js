
let home = document.getElementById('home');
let education = document.getElementById('education');
let projects = document.getElementById('projects');
let scholarship = document.getElementById('scholarship');
let extracurriculars = document.getElementById('extracurriculars');
let pages = [home, education, projects, scholarship, extracurriculars];

function change(x) {
    pages.forEach(function(page, index) {
        if (x === index) {
            page.style.display = "block";
            var element = document.getElementById(x);
            element.classList.add("active");
        } else {
            page.style.display = "none";
            var element = document.getElementById(index);
            element.classList.remove("active");
        }
    });
    return false;
}

change(0);