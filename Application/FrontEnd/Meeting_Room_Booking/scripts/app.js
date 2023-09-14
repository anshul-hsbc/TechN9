function validation() {
    event.preventDefault();
    // collecting the value inside the text box using getElementById DOM method

    var n = document.getElementById("inputEmail3").value;
    var a = document.getElementById("inputPassword3").value;
    var capa = [];
    document.querySelectorAll('.form-check-input').forEach(function (elem) {
        if (elem.checked) {
             capa.push(elem.value) 
            }
    });

    //console.log(capa);
    //var c = document.querySelector('input[id="gridCheck1"]:checked');

    if (n == '') {
        alert('Please provide Room name');
        return false;
    }
    if (a == '') {
        alert('Please provide capacity');
        return false;
    }
    if (capa.length < 2) {

        alert('Please select At least two amenties');
        return false;
    }

    //var co = document.querySelector('input[id="gridCheck1"]:checked').value;
    //var cs = document.querySelector('input[id="flexCheckDefault"]').checked;

    //creating object for the input element
    const formData = {
        name: n,
        capacity: a,
        ammenties: [capa]


    };
    //using the GET request of ajx for fetching the data
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.cypress.io/posts', true);

    //console.log(formData);
    //console.log(c.value);
    console.log(formData);
    xhr.send(JSON.stringify(formData));

    

    return false;

}

