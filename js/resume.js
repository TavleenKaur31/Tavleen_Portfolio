
  document.getElementById('downloadCvBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'file/Tavleen_Resume.pdf'; // Update with the path to your CV file
    link.download = 'Tavleen_CV.pdf'; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
