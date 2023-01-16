chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  const elems = document.getElementsByClassName('js-reviewed-checkbox');
  if (req === 'viewAll') {
    for (let i = 0; i < elems.length; i++) {
      if (!elems[i].checked) {
        elems[i].click()
      }
    }
  } else if (req === 'unViewAll') {
    for (let i = 0; i < elems.length; i++) {
      if (elems[i].checked) {
        elems[i].click()
      }
    }
  } else if (req === 'switchAll') {
    const elems = document.getElementsByClassName('js-reviewed-checkbox');
    for (let i = 0; i < elems.length; i++) {
      elems[i].click()
    }
  }
  sendResponse('OK')
})
