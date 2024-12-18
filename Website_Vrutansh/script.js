let mybutton = document.getElementById("Scrollbtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 120 || document.documentElement.scrollTop > 120){
        mybutton.style.display = "block";
    }
    else{
        mybutton.style.display = "none"
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function AddRowFunction() {
    var table = document.getElementById("table");

    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = "Sample Project";
    cell2.innerHTML = "This project is just a sample.";
    cell3.innerHTML = "18-12-2024";
    cell4.innerHTML = `<ul>
                        <li>SAMPLE</li>
                        <li>SAMPLE</li>
                        <li>SAMPLE</li>
                    </ul>`;
}
/* Using JavaScript
function validateForm() {
    let x = document.getElementById("name").value;
    let y = document.getElementById("email").value;
    if(x == ""){
        alert("Name must be entered!!!!");
        return false;
    }
    if(y == ""){
        alert("Email must be entered!!!!");
        return false;
    }

    return true;
}
*/

//Using JQuery
$(document).ready(function () {

    $('#contactform').on('submit', function(e){
        e.preventDefault();

        const name = $('#name').val();
        const email = $('#email').val();

        if(name === '' || email === ''){
            alert('Please Fill out all required fields!!!!!');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address!!!!');
            return;
        }

            alert('Form submitted successfullt!!!');
            
            $('#contactform')[0].reset();
    });
});

//Animation using JQuery

$(document).ready(function (){

    $('main').fadeIn(2000);

});


//Toggle button

$(document).ready(function (){

    $('#ToggleViewbtn').on('click',function (){
        $('#Resources').slideToggle('slow');
    });
});