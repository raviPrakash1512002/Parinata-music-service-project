function setReminder() {
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const activity = document.getElementById('activity').value;
    const reminder = {
      day,
      time,
      activity
    };

    const { ipcRenderer } = require('electron');
    ipcRenderer.send('reminder', reminder);
    alert('Reminder set!');
  }