const selectBtns = document.querySelectorAll('.selects__btn');
let intervalId;
selectBtns.forEach((item) => {
  item.addEventListener('click', (el) => {
    const list = el.currentTarget.dataset.path;
    document.querySelectorAll('.list').forEach((e) => {
      if (!document.querySelector(`[data-target=${list}]`).classList.contains('open')) {
        e.classList.remove('active');
        e.classList.remove('open');
        document.querySelector(`[data-target=${list}]`).classList.add('active');
        intervalId = setTimeout(() => {
          document.querySelector(`[data-target=${list}]`).classList.add('open');
        }, 0);
      }
      if (document.querySelector(`[data-target=${list}]`).classList.contains('open')) {
        clearTimeout(intervalId);
        document.querySelector(`[data-target=${list}]`).classList.remove('active');
        intervalId = setTimeout(() => {
          document.querySelector(`[data-target=${list}]`).classList.remove('open');
        }, 0);
      }
      // window.onclick = (e) => {
      //   if (
      //     e.target == document.querySelector(`[data-target=${list}]`) ||
      //     e.target == document.querySelector(`[data-path=${list}]`)
      //   ) {
      //     return;
      //   } else {
      //     document.querySelector(`[data-target=${list}]`).classList.remove('active');
      //     document.querySelector(`[data-target=${list}]`).classList.remove('open');
      //   }
      // };
    });
  });
});
// const item = document.querySelectorAll('.list__item')

// item.forEach(e => {
//   e.addEventListener('click', () => {
//     let checked = item.querySelectorAll('.checkbox__label').innerHTML;
//     const btnText = document.querySelector('.selects__text')
//     if(checked && checked.length > 0){
//       btnText.innerHTML = `${checked.length} выбрано`
//     }
    
//   })
// })