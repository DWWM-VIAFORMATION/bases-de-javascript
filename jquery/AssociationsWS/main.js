let url='https://entreprise.data.gouv.fr/api/rna/v1/full_text/croix rouge';
let param ="";
$.getJSON(url, param,
    function (data, textStatus, jqXHR) {
        $('#resultatBrut').html(JSON.stringify(data));
        console.log(data);
        console.log(textStatus);
        console.log(jqXHR);
    }
);