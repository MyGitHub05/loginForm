const submit_btn = document.querySelector(".create_acc_btn");

submit_btn.addEventListener('click', getValueInTheForm);


function getValueInTheForm(){
    let form = document.querySelector("#form");

    let fname = form.elements.first_name.value;
    let lname = form.elements.last_name.value;
    let email = form.elements.email.value;
    let phone_number = form.elements.phone_number.value;
    let password = form.elements.password.value;
    let con_password = form.elements.con_password.value;

    console.log(form);

    if(password === con_password){
        console.log(fname);
        console.log(lname);
        console.log(email);
        console.log(phone_number);
        console.log(password);

    }

    
}