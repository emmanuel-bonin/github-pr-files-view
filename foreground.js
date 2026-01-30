chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  const elems = document.querySelectorAll('[class*="MarkAsViewedButton"]')

  if (req === 'viewAll') {
    for (let i = 0; i < elems.length; i++) {
      if (elems[i].ariaPressed == 'false') {
        elems[i].click()
      }
    }
  } else if (req === 'unViewAll') {
    for (let i = 0; i < elems.length; i++) {
      if (elems[i].ariaPressed == 'true') {
        elems[i].click()
      }
    }
  } else if (req === 'switchAll') {
    for (let i = 0; i < elems.length; i++) {
      elems[i].click()
    }
  }
  sendResponse('OK')
})
