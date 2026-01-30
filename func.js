window.addEventListener('load', () => {
  chrome.tabs.query({ active: true, currentWindow: true, url: 'https://github.com/*/pull/*/changes' }, (tabs) => {
    if (tabs.length) {
      document.getElementById('tooltip').setAttribute('hidden', 'true')
      document.getElementById('container').removeAttribute('hidden')
    }
  })

  document.getElementById('view-all').addEventListener('click', async () => {
    chrome.tabs.query({ active: true, currentWindow: true, url: 'https://github.com/*/pull/*/changes' }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, 'viewAll')
    })
  })

  document.getElementById('unview-all').addEventListener('click', async () => {
    chrome.tabs.query({ active: true, currentWindow: true, url: 'https://github.com/*/pull/*/changes' }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, 'unViewAll')
    })
  })

  document.getElementById('switch-all').addEventListener('click', async () => {
    chrome.tabs.query({ active: true, currentWindow: true, url: 'https://github.com/*/pull/*/changes' }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, 'switchAll')
    })
  })
})
