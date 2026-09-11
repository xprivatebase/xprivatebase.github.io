const dialog = document.querySelector('#entry-dialog');
let chosenPlan = '';
document.querySelectorAll('[data-plan]').forEach(link => link.addEventListener('click', () => {
  chosenPlan = link.dataset.plan;
  document.querySelector('#selected-plan').textContent = `ご検討中のプラン：${chosenPlan}会員`;
}));
document.querySelector('#entry-button').addEventListener('click', () => {
  document.querySelector('#dialog-plan').textContent = chosenPlan ? `ご希望プラン：${chosenPlan}会員` : '';
  dialog.showModal();
});
dialog.querySelectorAll('.close, .close-button').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if(event.target === dialog) { const r=dialog.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) dialog.close(); }});
