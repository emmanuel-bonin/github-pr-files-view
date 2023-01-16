window.addEventListener('load', () => {
  document.getElementById('view-all').addEventListener('click', async () => {
    chrome.tabs.query({}, result => {
      result.map(tab => {
        if (/^https:\/\/github\.com\/*/.test(tab.url)) {
          chrome.tabs.sendMessage(tab.id, 'viewAll', res => {
            console.log('res', res)
          })
        }
      })
    })
  })

  document.getElementById('unview-all').addEventListener('click', async () => {
    chrome.tabs.query({}, result => {
      result.map(tab => {
        if (/^https:\/\/github\.com\/*/.test(tab.url)) {
          chrome.tabs.sendMessage(tab.id, "unViewAll", (response) => {
            console.log(response)
          })
        }
      })
    })
  })

  document.getElementById('switch-all').addEventListener('click', async () => {
    chrome.tabs.query({}, result => {
      result.map(tab => {
        if (/^https:\/\/github\.com\/*/.test(tab.url)) {
          chrome.tabs.sendMessage(tab.id, "switchAll", (response) => {
            console.log(response)
          })
        }
      })
    })
  })
})
