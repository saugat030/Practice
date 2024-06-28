console.log('fhello');
function validate(){
    console.log('Hello');
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const cpass = document.getElementById('cpass').value;
    const age = document.getElementById('age').value;
    const emailV= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passV = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    if (!emailV.test(email)){
        alert('Enter a valid Email');
        return false;
    }
    if (!passV.test(pass)){
        alert('Password must contain a special character and a number.');
        return false;
    }
    if (isNaN(age)){
        alert('age must be a number');
        return false;
    }
    if (pass.length<8){
        alert('Password length too short');
        return false;
    }
    if (pass !== cpass){
        alert('Password doesnot match');
        return false;
    }
    
    return true;
}
