        // Get all elements with class "sweet"
        const sweetDivs = document.querySelectorAll('.sweet');
        
        // Get the button with class "sweet"
        const sweetButton = document.querySelector('button.sweetButton');

        // Add a click event listener to the "sweet" button
        sweetButton.addEventListener('click', function() {
            // Hide all divs with class "savory"
            const savoryDivs = document.querySelectorAll('.savory');
            savoryDivs.forEach(function(div) {
                div.style.display = 'none';
            });

            // Show all divs with class "sweet"
            sweetDivs.forEach(function(div) {
                div.style.display = 'inline';
            });
        });

             // Get all elements with class "savory"
             const savoryDivs = document.querySelectorAll('.savory');
        
             // Get the button with class "sweet"
             const savoryButton = document.querySelector('button.savoryButton');
     
             // Add a click event listener to the "sweet" button
             savoryButton.addEventListener('click', function() {
                 // Hide all divs with class "savory"
                 const sweetDivs = document.querySelectorAll('.sweet');
                 sweetDivs.forEach(function(div) {
                     div.style.display = 'none';
                 });
     
                 // Show all divs with class "sweet"
                 savoryDivs.forEach(function(div) {
                     div.style.display = 'inline';
                 });
             });

                     // Get the button with class "allButton"
        const allButton = document.querySelector('button.allButton');

        // Add a click event listener to the "allButton" button
        allButton.addEventListener('click', function() {
            // Show all divs
            const allDivs = document.querySelectorAll('div');
            allDivs.forEach(function(div) {
                div.style.display = 'inline';
            });
        });