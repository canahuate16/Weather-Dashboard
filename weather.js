<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="weather.css">
    <title>Weather Dashboard</title>
    </head>
    <body>
  <div id = 'currentDay'></div>

       <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1 w-100 text-center">Weather Dashboard</span>
        
    </nav>

 <!-- search bar and button //https://getbootstrap.com/docs/4.0/components/input-group/--> 
 <div class="container">
        <div class="row">
            <div class="col-4 bg-light">
                <p class="search-header my-1">Search for a city</p>
                <div class="input-group mb-3">
                    <input id="searchCity" type="text" class="form-control" placeholder="Enter city name" aria-label="Enter city name">
                    <div class="input-group-append">
                        <button class="submitBtn" type="button" id="searchBtn">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                    </div>

             

                 <!-- Retrieved data from Ajax call will be stored here -->
                   <div class="col-8">
                <div class="row mr-0">
                    <div class="col-12 border border-dark m-3 rounded">
                <div class="row">
                  <div class="col-12">
                    <div class="city"></div>
                  </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <div class= 'description'></div>
                </div>
            </div>

                <div class="row">
                  <div class="col-12">
                    <div class="tempF"></div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-12">
                    <div class="humidity"></div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-12">
                      <div class="wind"></div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-12 d-flex">
                      <p id="UV-index"></p>
                  </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <img id='weather-img' src="" alt="Weather img">
                </div>
            </div>
          </div>
      </div>
      

      <div class="row">
        <div class="col-12 d-flex">
          <div id =forecast>
             <img id='forecast-img' src="" alt="Weather img">
        </div>

      </div> 
    
 
  
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script><script type="text/javascript" src="script.js"></script>
  <script src="weather.js"></script>
  



</body>

</html>