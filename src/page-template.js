// generate page 
    function generatePage (teamData) {
        // create var for each card
        let myTeam = '';
        teamData.forEach(employee => {
          let role = '';
           
        
        myTeam += 
                `<div class="card border-primary mb-3" style="max-width: 18rem;">
                 <div class="card-header">
                 <h4>${employee.name}</h4>
                 <h4>${role}</h4>
                 </div>
                  <div class="card-body text-primary">
                  <h5 class="card-title">Primary card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   </div>
                   `
      })
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>My Team Generator</title>
          <!-- Bootstrap CSS -->
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
          <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        </head>
        
            <body>
            <div id=card class="row">
            ${myTeam}
            </div>
          </body>
        </html>
        `;
        }
  module.exports = generatePage;