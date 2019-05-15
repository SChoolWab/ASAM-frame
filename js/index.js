// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
    function showFile() {
        var demoImage = document.querySelector('img');
        var file = document.querySelector('input[type=file]').files[0];
        var text = document.querySelector('input[type=text]').value;
        console.log(file);
        console.log(text);
        var reader = new FileReader();
        reader.onload = function (event) {
            demoImage.src = reader.result;
            document.getElementById('name').innerHTML = text;
        }
        reader.readAsDataURL(file);
        console.log(file)
    }
} else {
    alert("Your browser is too old to support HTML5 File API");
}


// for screen shot
function generateScreenshot() {
    document.getElementById("the-link").focus();
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
            document.getElementById('screen').style.display = 'none';

        });
    }, 1000);
}