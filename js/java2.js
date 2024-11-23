document.getElementById('butt3').addEventListener('click', function(){
    const usnm=document.getElementById('emajl').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pass=document.getElementById('passw').value.trim();
    if(emailRegex.test(usnm)||pass.value==""){
      Swal.fire({
        heightAuto: false,
        icon: "success",
        title: "Registration successful",
        showConfirmButton: false,
        timer: 5000,
        customClass: {
          popup: 'sweet-alert',
        }
      });
    }
    else{
      Swal.fire({
        heightAuto: false,
        title: "Email or password is invalid",
        text: "Please enter a valid email and a valid password!",
        icon: "error",
        customClass: {
          popup: 'sweet-alert',
        }
      });
    }
});