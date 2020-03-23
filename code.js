$.ajax({
    url: "https://corona.lmao.ninja/countries",
    dataType: "json",
    success: function(data) {
        console.log(data);
        let top5 = data.slice( 0, 5 );           
        $.each(top5, function(index, listItem){
            $( "#list" ).append( `<div>
            <p>${listItem.country}</p>
            <ul>
                <li>${listItem.cases}</li>
                <li>${listItem.todayCases}</li>
                <li>${listItem.deaths}</li>
                <li>${listItem.todayDeaths}</li>
                <li>${listItem.recovered}</li>
                <li>${listItem.active}</li>
                <li>${listItem.critical}</li>
                <li>${listItem.casesPerOneMillion}</li>
            </ul>
        </div>` );
        })
    }
});


$("form").submit(function(){
    event.preventDefault();
    $( "#list" ).empty();
    var value = $("#country").val().toLowerCase();
    
    $.ajax({
        url: "https://corona.lmao.ninja/countries",
        dataType: "json",
        success: function(data) {
            const result = data.filter(item => item.country.toLowerCase().indexOf(value) !== -1);
            console.log(result);
            if (typeof result != "undefined"  
                && result != null  
                && result.length != null  
                && result.length > 0) {
                $( "#list" ).append( `<div>
                    <p>${result[0].country}</p>
                    <ul>
                        <li>${result[0].cases}</li>
                        <li>${result[0].todayCases}</li>
                        <li>${result[0].deaths}</li>
                        <li>${result[0].todayDeaths}</li>
                        <li>${result[0].recovered}</li>
                        <li>${result[0].active}</li>
                        <li>${result[0].critical}</li>
                        <li>${result[0].casesPerOneMillion}</li>
                    </ul>
                </div>`);
            } else {
                $( "#list" ).append( `<div>
                    <p>Something went wrong. Please try again.</p>
                </div>`);
            }
        }
    });
});