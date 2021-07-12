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
                 </div>
                  <div class="card-body text-primary">
                  <h5 class="card-title">${role}</h5>
                   </div>
                   <ul class="list-group list-group-flush">
                   <li class="list-group-item">Employee ID: ${employee.id}</li>
                   <a href="mailto:${employee.email}?subject=Mail from ${employee.name}" class="card-link">Email address: ${employee.email}</a>
                   <li class="list-group-item">School: ${employee.school}</li>
                   <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
                 </ul>
                 <div class="card-body">
                 <a target="_blank" href="https://www.github.com/${employee.github}"> Github user name: ${employee.github}</a>
                 </div>
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
        <link rel="stylesheet" href="./dist/style.css">
        </head>
        <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <nav class="flex-row">
            <h1> My Team</h1>
          </nav>
        </div>
      </header>
            <body>
            <main class="container my-5">
            <div id=card class="row">
            ${myTeam}
            
            </main>
          </body>
        </html>
        `;
        }
  module.exports = generatePage;