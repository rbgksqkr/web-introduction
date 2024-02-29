const $submitButton = document.getElementById('submitButton');
const $resetButton = document.getElementById('resetButton');
const $guestbook = document.querySelector('.guestbook-output-section');
const $guestbookForm = document.querySelector('.guestbook-form');

const handleClickSubmit = () => {
    const matchedMovieCount = [...document.querySelectorAll('input[type="checkbox"]:checked')].length;
    const nickname = document.getElementById('nicknameInput').value;
    if(nickname.length <= 0) return;
    const div = document.createElement('div');
    div.textContent = `${nickname} 왔다감 !`;
    alert(`${nickname}님, 저와 ${matchedMovieCount}개의 취향이 같으시네요!`);
    $guestbook.appendChild(div);
    $guestbookForm.reset();
}

const handleClickReset = () => {
    $guestbook.replaceChildren();
}


$submitButton.addEventListener('click', handleClickSubmit)
$resetButton.addEventListener('click', handleClickReset)