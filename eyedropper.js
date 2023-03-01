const $button = window.document.querySelector("button");
const eyedropper = new EyeDropper();

$button.addEventListener('click', function (e) {
    console.log("click", e);

    eyedropper.open()
    .then((result) => {
        console.log(result);
    })
    .catch((e) => {
        console.log('nope');
    })
});
