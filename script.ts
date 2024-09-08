document.addEventListener("DOMContentLoaded", () => {
  
  const skillsSection = document.getElementById(
    "skillsSection"
  ) as HTMLElement | null;
  const toggleButton = document.getElementById(
    "toggleSkills"
  ) as HTMLButtonElement | null;

  
  if (skillsSection && toggleButton) {
    
    let isSkillsVisible: boolean = true;

    
    toggleButton.addEventListener("click", () => {
    
      if (isSkillsVisible) {
        skillsSection.style.display = "none";
        toggleButton.textContent = "Show Skills Section";
      } else {
        skillsSection.style.display = "block";
        toggleButton.textContent = "Hide Skills Section";
      }
      
      isSkillsVisible = !isSkillsVisible;
    });
  } else {
    console.error("Skills section or toggle button not found.");
  }
});
