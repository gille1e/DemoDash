// submit button event listener
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', generateMessage);

// Function to generate the message
function generateMessage(event) {
  event.preventDefault();

  // Get the input values from the form fields
  const recipientNameInput = document.getElementById('recipient-name');
  const yourNameInput = document.getElementById('your-name');
  const socialMediaLinkInput = document.getElementById('social-media-link');
  const soundcloudLinkInput = document.getElementById('soundcloud-link');
  const firstTimeCheckbox = document.getElementById('checker');

  const recipientName = recipientNameInput.value;
  const yourName = yourNameInput.value;
  const socialMediaLink = socialMediaLinkInput.value;
  const soundcloudLink = soundcloudLinkInput.value;
  const isChecked = firstTimeCheckbox.checked;

  // Check if required fields are empty
  if (yourName.trim() === '' || socialMediaLink.trim() === '' || soundcloudLink.trim() === '') {
    alert('Please fill in all the required fields.');
    return;
  }

  // Create the message using template literals
  let message;
  if (isChecked) {
    message = `Hi${recipientName},<br><br>
    My name is ${yourName}, I'm a musician who has been a fan of your record label for a long time. I've just finished a new track which I'm hoping you might consider for your label and would be very grateful if you would give it a listen and let me know your thoughts!<br><br>
    Here is the link for my demo:<br><br>
    ${soundcloudLink}<br><br>
    Yours hopefully,<br><br>
    ${yourName}<br>
    ${socialMediaLink}`;
  } else {
    message = `Hi again${recipientName},<br><br>
    ${yourName} here again, I hope you're doing well. I've just finished another new track which I'm hoping you might be interested in, and would be very grateful if you would give it a listen and let me know your thoughts!<br><br>
    Here is the link:<br><br>
    ${soundcloudLink}<br><br>
    Yours hopefully,<br><br>
    ${yourName}<br>
    ${socialMediaLink}`;
  }

  // Display the message in the HTML message container
  const messageContainer = document.querySelector('.message-container');
  messageContainer.innerHTML = message;

  // Restore the input values
  recipientNameInput.value = recipientName;
  yourNameInput.value = yourName;
  socialMediaLinkInput.value = socialMediaLink;
  soundcloudLinkInput.value = soundcloudLink;
}

// Add event listener to the copy button
const copyButton = document.getElementById('copy-button');
copyButton.addEventListener('click', copyMessage);

// Function to copy the message to the clipboard
function copyMessage() {
  const messageContainer = document.querySelector('.message-container');
  const message = messageContainer.innerText;

  // Copy the cleaned-up message to the clipboard
  const textArea = document.createElement('textarea');
  textArea.value = message;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);

  alert('Message copied to clipboard!');
}