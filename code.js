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
                <li>Total cases: ${listItem.cases}</li>
                <li>Today cases: ${listItem.todayCases}</li>
                <li>Deaths: ${listItem.deaths}</li>
                <li>Recovered: ${listItem.recovered}</li>
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
                        <li>Total cases: ${result[0].cases}</li>
                        <li>Today cases: ${result[0].todayCases}</li>
                        <li>Deaths: ${result[0].deaths}</li>
                        <li>Recovered: ${result[0].recovered}</li>
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