function scrollToSection(sectionId){
    const section = document.getElementsById(sectionId);
    if (section){
        section.scrollToView({behavior:"smooth"});
    }
}

function handleFormSubmission(event){
    event.prevent.Default();

    const form = document.getElementById('myForm');
    const formData = new FormData(form);

    if (form.checkValidity()){
        document.getElementById('confirmationMessage').style.display = 'block';
    } else {
        alert('Please fill out all the required fields')    
    }
}