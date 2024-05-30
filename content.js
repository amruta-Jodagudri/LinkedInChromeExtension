//New Profile picture
const newProfilePicUrl = chrome.runtime.getURL('icon.png');
console.log("New profile pic URL:", newProfilePicUrl);

//replace the current profile picture
function replaceProfilePics() {
  const profilePics = document.querySelectorAll('img.feed-shared-actor__avatar-image, img.ivm-view-attr__img--centered, img.ember-view');
  console.log("Profile pictures found:", profilePics.length);

  profilePics.forEach(pic => {
    if (pic.src.includes('profile')) {
      console.log("Replacing image:", pic.src);
      pic.src = newProfilePicUrl;
    }
  });
}

replaceProfilePics();

const observer = new MutationObserver(() => {
  console.log("Mutation observed, replacing images");
  replaceProfilePics();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
