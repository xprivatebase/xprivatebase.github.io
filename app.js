document.querySelectorAll('[data-plan]').forEach(link => link.addEventListener('click', () => {
 const label = document.querySelector('#selected-plan');
 if (label) label.textContent = `ご検討中のプラン：${link.dataset.plan}会員`;
}));
const today = new Intl.DateTimeFormat('sv-SE', {timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
document.querySelectorAll('input[type="date"]').forEach(input => { input.min = today; });
document.querySelectorAll('input[type="text"][required]').forEach(input => {
 input.addEventListener('input', () => input.setCustomValidity(input.value.trim() ? '' : '空白以外の文字を入力してください。'));
});
