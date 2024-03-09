// FUNCTIONS

// This function leaves the hover on the last hovered on list option
function keepHover(arrName, classToggled) {
  arrName.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.classList.add('' + classToggled);
      arrName.forEach((item) => {
        if (item !== element) {
          item.classList.remove(''+ classToggled);
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

// This toggles my switch
const mySwitches = document.querySelectorAll('.switch');
mySwitches.forEach(mySwitch => {
  mySwitch.addEventListener('click', function() {
    mySwitch.classList.toggle('checked');
  });
})


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
keepHover(assignedNames, 'purple-hover');

// FOR RECENT SEARCHES AND ADD SECTIONS
const recentAndAdd = document.querySelectorAll(".recent_add");
keepHover(recentAndAdd, 'purple-hover');

//For Appearances
const appearances = document.querySelectorAll('.appearance');
keepHover(appearances, 'bg-slate-50')

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

// For the template section
// iF ANY OF THE SECTION IS CLICKED,
// We want it to add a colored border,
// We want the main heading to be colored too
// colored bg to the subheading, 
// change the description text on below md screens and change the image

const templates = document.querySelectorAll('.templates');
const descriptiveTexts = document.querySelectorAll('.descriptive-text');
const imgContainer = document.querySelector('.img-container');

templates.forEach((template, templateIndex) => {
  template.addEventListener('click', function() {
    console.log(templateIndex);
    if(templateIndex === 0) {
      template.classList.add('primer-current');
      templates[1].classList.remove('transmit-current');
      templates[2].classList.remove('syntax-current');
      templates[3].classList.remove('salient-current');
      imgContainer.classList.add('translate-x-[0%]');
      imgContainer.classList.remove('translate-x-[-100%]');
      imgContainer.classList.remove('translate-x-[-200%]');
      imgContainer.classList.remove('translate-x-[-300%]');
      descriptiveTexts.forEach((text, textIndex) => {
        if(textIndex === templateIndex){
          text.classList.remove('hidden');
        } else {
          text.classList.add('hidden');
        }
      });
    }
    else if(templateIndex === 1) {
      template.classList.add('transmit-current');
      templates[0].classList.remove('primer-current');
      templates[2].classList.remove('syntax-current');
      templates[3].classList.remove('salient-current');
      imgContainer.classList.add('translate-x-[-100%]');
      imgContainer.classList.remove('translate-x-[0%]');
      imgContainer.classList.remove('translate-x-[-200%]');
      imgContainer.classList.remove('translate-x-[-300%]');
      descriptiveTexts.forEach((text, textIndex) => {
        if(textIndex === templateIndex){
          text.classList.remove('hidden');
        } else {
          text.classList.add('hidden');
        }
      });
    }
    else if(templateIndex === 2) {
      template.classList.add('syntax-current');
      templates[0].classList.remove('primer-current');
      templates[1].classList.remove('transmit-current');
      templates[3].classList.remove('salient-current');
      imgContainer.classList.add('translate-x-[-200%]');
      imgContainer.classList.remove('translate-x-[0%]');
      imgContainer.classList.remove('translate-x-[-100%]');
      imgContainer.classList.remove('translate-x-[-300%]');
      descriptiveTexts.forEach((text, textIndex) => {
        if(textIndex === templateIndex){
          text.classList.remove('hidden');
        } else {
          text.classList.add('hidden');
        }
      });
    }
    else if(templateIndex === 3) {
      template.classList.add('salient-current');
      templates[0].classList.remove('primer-current');
      templates[1].classList.remove('transmit-current');
      templates[2].classList.remove('syntax-current');

      imgContainer.classList.add('translate-x-[-300%]');
      imgContainer.classList.remove('translate-x-[0%]');
      imgContainer.classList.remove('translate-x-[-100%]');
      imgContainer.classList.remove('translate-x-[-200%]');
      descriptiveTexts.forEach((text, textIndex) => {
        if(textIndex === templateIndex){
          text.classList.remove('hidden');
        } else {
          text.classList.add('hidden');
        }
      });
    }
  });
})