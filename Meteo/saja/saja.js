var meteoKey = "aa4cfc964679de59d8fe0e2a8b5e7d90";
            var apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
            let current = new Object();
            let position = document.getElementById('cityname').val;
            var url = `${apiUrl}?q=${position}&appid=${meteoKey}&lang=fr&units=metric`;
                console.log('url:', url);
            
            const geoLocaAuth = async (position) => {
                var url = `${apiUrl}?q=${position}&appid=${meteoKey}&lang=fr&units=metric`;
                console.log('url:', url);
                var response = await fetch(url);
                var data = await response.json();
                return data;
            }
            
            $(document).ready(function() {
                $('#btn').on('click', function () {
                    var position = $('#cityname').val();
                    geoLocaAuth(position)
                    .then(data => {
                        current = data;
                        error = false;
                        updateUI()
                    })
                });
            });

            function updateUI() {
                console.log(current);
                if (error === true){
                $('#weather').css('display', 'none');
                return
                } else {
                    $('#city').text(current.name);
                    $('#description').text(current.weather[0].description);
                    $('#temp').text(current.main.temp);
                }
            }