       // Get the button element with the class "multiply-2"
       const multiplyButton = document.querySelector('.multiply-2');

       // Add a click event listener to the button
       multiplyButton.addEventListener('click', () => {
           // Get all the span elements with the class "num"
           const numElements = document.querySelectorAll('.num');

           // Loop through the numElements and multiply their content by 2
           numElements.forEach((element) => {
               const currentNum = parseInt(element.textContent, 10);
               if (!isNaN(currentNum)) {
                   element.textContent = (currentNum * 2).toString();
               }
           });
       });