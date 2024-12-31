function updateTime() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric'}; 
    const formattedTime = now.toLocaleString('en-US', options); 
    document.getElementById('clock').textContent = formattedTime;
  }

  // Update the time every second
  setInterval(updateTime, 1000);

  // Initial call to display time immediately
  updateTime();


function downloadResume(){
    window.open("files/Resume.pdf", "_blank");
}