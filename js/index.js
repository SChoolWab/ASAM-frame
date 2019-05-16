// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
    function showFile() {
        var demoImage = document.querySelector('img');
        var file = document.querySelector('input[type=file]').files[0];
        document.querySelector('input[type=text]').style.display = 'block';
        console.log(file);
        var reader = new FileReader();
        reader.onload = function (event) {
            demoImage.src = reader.result;
        }
        reader.readAsDataURL(file);
        console.log(file)
    }
} else {
    alert("Your browser is too old to support HTML5 File API");
}
// for write name
function writeName() {
    var text = document.querySelector('input[type=text]').value;
    document.getElementById('name').innerHTML = text;
    document.querySelector('input[type=button]').style.display = 'block';
    document.getElementById('screen').style.display = 'block';
}

// for screen shot
function generateScreenshot() {
    // document.getElementById("the-link").focus();
    setTimeout(() => {
        html2canvas(document.getElementById('screen'), {
            logging: true,
            profile: true,
            useCORS: true
        }).then(function (canvas) {
            var data = canvas.toDataURL('image/jpeg', 0.9);
            var src = encodeURI(data);
            document.getElementById('screenshot').src = src;
            // document.getElementById('size').innerHTML = src.length + ' bytes';
            // document.getElementsByClassName('input').style.display = 'none';
            document.getElementById('screen').style.display = 'none';
            document.getElementById('test-result').style.display = 'block';
        });
    }, 0);
}