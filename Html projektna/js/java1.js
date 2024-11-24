document.getElementById('butt2').addEventListener('click', function(){
    const usnm=document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(usnm)){
      Swal.fire({
        heightAuto: false,
        icon: "success",
        title: "Login successful",
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
        title: "Email is invalid",
        text: "Please enter a valid email!",
        icon: "error",
        customClass: {
          popup: 'sweet-alert',
        }
      });
    }
});