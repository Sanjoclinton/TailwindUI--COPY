// FUNCTIONS

// This function leaves the hover on the last hovered on list option
function keepPurpleHover(arrName) {
  arrName.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.classList.add("keep-purple-hover");
      arrName.forEach((item) => {
        if (item !== element) {
          item.classList.remove("keep-purple-hover");
        }
      });
    });
  });
}

// This function toggles the expanded nav bar
function toggleMenu() {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  document.body.classList.toggle("h-screen");
  document.body.classList.toggle("overflow-hidden");
}

// FOR NEWSLETTER SECTION
const newsExisting = document.querySelectorAll(".news-existing");
newsExisting.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.add("show-border-tick");
    newsExisting.forEach((item) => {
      if (item !== element) {
        item.classList.remove("show-border-tick");
      }
    });
  });
});

// FOR THE ASSIGNED NAMES SECTIONS
const assignedNames = document.querySelectorAll(".assigned-names");
keepPurpleHover(assignedNames);

// FOR RECENT SEARCHES AND ADD SECTIONS
const recentAndAdd = document.querySelectorAll(".recent_add");
keepPurpleHover(recentAndAdd);

// For expand menu  section
const menu = document.getElementById("expanded-menu");
const closeMenuBtn = document.getElementById("btn-close");
const openMenuBtn = document.getElementById("hamburger-icon");
const expandedContent = document.querySelector('#expanded-content');
const backDrop = document.querySelector('.backdrop-blur-sm');

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
expandedContent.addEventListener('click', toggleMenu);
backDrop.addEventListener('click', toggleMenu);

// For the component section
// constants
const componentsHeadings = document.querySelectorAll(".components-headings");
const componentsHeadingsText = document.querySelectorAll(
  ".component-headings-text"
);
const componentBody = document.querySelectorAll(".heading-body");

console.log(componentsHeadings);
// Loop through the heading and check for click
componentsHeadings.forEach((element, headingIndex) => {
  // Once I click on any of the headings
  element.addEventListener("click", function () {
    let currentIndex = headingIndex;
    // Add the purple border and text i.e the current component class to the heading
    element.classList.add("current-component");
    // Then remove the purple effect from other headings
    componentsHeadings.forEach((item) => {
      if (item !== element) {
        item.classList.remove("current-component");
      }
      // Loop through the heading texts
      componentsHeadingsText.forEach((text, textIndex) => {
        // If text belongs to current heading, show the text
        // else hide them
        if (textIndex === headingIndex) {
          text.classList.remove("hidden");
        } else {
          text.classList.add("hidden");
        }
      });
      // Also loop through the body
      componentBody.forEach((currentbody, bodyIndex) => {
        // If body belongs to current heading, show as a grid
        // Else hide body for the other headings
        if (bodyIndex === headingIndex) {
          currentbody.classList.add("grid");
          currentbody.classList.remove("hidden");
        } else {
          currentbody.classList.remove("grid");
          currentbody.classList.add("hidden");
        }
      });
    });
  });
});

// This works for the templates
const templateHeadings = document.querySelectorAll(".template-heading");
const templateSmTexts = document.querySelectorAll(".template-sm-text");
const templateImg = document.querySelectorAll(".template-img");

// Loop through headings
templateHeadings.forEach((heading, headingIndex) => {
  heading.addEventListener("click", function () {
    // If Premier clicked
    let currentHeading = heading;
    console.log(headingIndex);
    if (headingIndex === 0) {
      currentHeading.classList.add("premier-current");

      // Remove other color effect from other headings
      templateHeadings[1].classList.remove("transmit-current");
      templateHeadings[2].classList.remove("syntax-current");
      templateHeadings[3].classList.remove("salient-current");
      // Hide all text except current heading text
      templateSmTexts.forEach((smtext, smTextIndex) => {
        if (smTextIndex === headingIndex) {
          smtext.classList.remove("hidden");
        } else {
          smtext.classList.add("hidden");
        }
      });
      // Hide all Images except current heading Img
      templateImg.forEach((img, imgIndex) => {
        if (imgIndex === headingIndex) {
          img.classList.remove("hidden");
        } else {
          img.classList.add("hidden");
        }
      });
    }
    // If transmit is clicked
    else if (headingIndex === 1) {
      currentHeading.classList.add("transmit-current");
      console.log("added transmit");
      // Remove other color effect from other headings
      templateHeadings[0].classList.remove("premier-current");
      templateHeadings[2].classList.remove("syntax-current");
      templateHeadings[3].classList.remove("salient-current");
      // Hide all text except current heading text
      templateSmTexts.forEach((smtext, smTextIndex) => {
        if (smTextIndex === headingIndex) {
          smtext.classList.remove("hidden");
        } else {
          smtext.classList.add("hidden");
        }
      });
      // Hide all Images except current heading Img
      templateImg.forEach((img, imgIndex) => {
        if (imgIndex === headingIndex) {
          img.classList.remove("hidden");
        } else {
          img.classList.add("hidden");
        }
      });
    }
    // If syntax is clicked
    else if (headingIndex === 2) {
      currentHeading.classList.add("syntax-current");
      // Remove other color effect from other headings
      templateHeadings[0].classList.remove("premier-current");
      templateHeadings[1].classList.remove("transmit-current");
      templateHeadings[3].classList.remove("salient-current");
      // Hide all text except current heading text
      templateSmTexts.forEach((smtext, smTextIndex) => {
        if (smTextIndex === headingIndex) {
          smtext.classList.remove("hidden");
        } else {
          smtext.classList.add("hidden");
        }
      });
      // Hide all Images except current heading Img
      templateImg.forEach((img, imgIndex) => {
        if (imgIndex === headingIndex) {
          img.classList.remove("hidden");
        } else {
          img.classList.add("hidden");
        }
      });
    }
    // If salient is clicked
    else if (headingIndex === 3) {
      currentHeading.classList.add("salient-current");
      // Remove other color effect from other headings
      templateHeadings[0].classList.remove("premier-current");
      templateHeadings[1].classList.remove("transmit-current");
      templateHeadings[2].classList.remove("syntax-current");
      // Hide all text except current heading text
      templateSmTexts.forEach((smtext, smTextIndex) => {
        if (smTextIndex === headingIndex) {
          smtext.classList.remove("hidden");
        } else {
          smtext.classList.add("hidden");
        }
      });
      // Hide all Images except current heading Img
      templateImg.forEach((img, imgIndex) => {
        if (imgIndex === headingIndex) {
          img.classList.remove("hidden");
        } else {
          img.classList.add("hidden");
        }
      });
    }
  });
});
