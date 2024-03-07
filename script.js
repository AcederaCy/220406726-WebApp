document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.navlink');

    tabLinks.forEach(tab => {
        tab.addEventListener('click', (event ) => {
            event.preventDefault();

            tabLinks.forEach(tab => tab.classList.remove ('active'));
            event.target.classList.add('.active');

            const targetSectionId = event.target.getAttribute('data-target').substring(1);
            const sections = document.querySelectorAll('.tab-pane');
            sections.forEach(section => section.classList.remove('show', 'active'));

            const targetSection = document.getElementById(targetSectionId);
            const tabContent = new bootstrap.Tab(targetSection);
            tabContent.show();

        });
    });

});

$(document).ready(function() {
    $(',navbar-toggler').on ('click', function() {
        $('#navbarNav').collapse('toggle');

    });

    
});

function submitForm(event) {
    event.preventDefault();

    var email = 
    document.getElementById("email").value;
    var password = 
    document.getElementById("pwd").value;
    var confirmPassword =
    document.getElementById("pwd2").value;
    var phone = 
    document.getElementById("phone").value;
    
}