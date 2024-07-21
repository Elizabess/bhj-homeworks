const dropdownValues = document.querySelectorAll('.dropdown__value');

dropdownValues.forEach(dropdownValue => {
  dropdownValue.addEventListener('click', function() {
    const dropdownList = this.nextElementSibling;
    const isOpen = dropdownList.classList.contains('dropdown__list_active');
    
    closeAllLists();
    
    if (!isOpen) {
      dropdownList.classList.add('dropdown__list_active');
    }
  });
});

function closeAllLists() {
  const allDropdowns = document.querySelectorAll('.dropdown__list');
  allDropdowns.forEach(dropdown => {
    dropdown.classList.remove('dropdown__list_active');
  });
}

const dropdownLinks = document.querySelectorAll('.dropdown__link');

dropdownLinks.forEach(dropdownLink => {
  dropdownLink.addEventListener('click', function(event) {
    event.preventDefault();

    const newValue = this.textContent; 
    const dropdownValue = this.closest('.dropdown').querySelector('.dropdown__value'); 
    dropdownValue.textContent = newValue; 

    closeAllLists();
  });
});

document.addEventListener('click', function(event) {
  if (!event.target.matches('.dropdown__value')) {
    closeAllLists();
  }
});
