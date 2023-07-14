// copy of text output
function copyOutputText() {
    var outputText = document.getElementById('output-text');
    var range = document.createRange();
    range.selectNode(outputText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.exeCommand('copy');
    window.getSelection().removeAllRanges();

    var copyButton = document.querySelector('.copy-button');
    copyButton.classList.add('copied');
    setTimeout(function () {
        copyButton.classList.remove('copied');
    }, 1000);
    // modal of the copy on text 
    Swal.fire({
        icon: 'success',
        title: 'Na I-Copy na Beshy!',
        showConfirmButton: false,
        timer: 1500,
    });
}
// emoji and in text 
function addEmojis() {
    var inputText = document.getElementById('input-text').value;
    var words = inputText.split(' ');
    var output = '';

    for (var i = 0; i < words.length; i++) {
        output += words[i] + ' 🤸🏼‍♂️ ';
    }

    document.getElementById('output-text').innerText = output.trim();
}
