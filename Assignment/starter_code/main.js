//var cityNames = ['New York City', 'San Francisco', 'Los Angeles', 'Austin', 'Sydney', 'Seattle'];
var airportNames = ['jfk', 'lga', 'lax', 'atx', 'syd', 'sea', 'sfo'];
//var fancyAirportNames = [
//    {
//        name: 'jfk',
//        className: 'nyc'
//    },
//    {
//        name: 'lga',
//        className: 'nyc'
//    },
//    {
//        name: 'lax',
//        className: 'la'
//    },
//    {
//        name: 'atx',
//        className: 'austin'
//    },
//    {
//        name: 'syd',
//        className: 'sydney'
//    },
//    {
//        name: 'sea',
//        className: 'seattle'
//    },
//    {
//        name: 'sfo',
//        className: 'sf'
//    },
//
//];
////function showAlert(){
//// alert('hello');
////}
//function fancyChangeImage(selectOption) {
//    var errorMessage = $('#city-type').val();
//    var className = '';
//
//    for (var i = 0; i < fancyAirportNames.length; i++) {
//        var airportName = fancyAirportNames[i];
//
//        if (selectOption == airportName.name) {
//            className = airportName.className;
//
//        }
//
//    }
//
//
//
//
//    //set the css class on the body
//    $('body').attr('class', className);
//
//    //Reset the user input field after it is submitted
//    $('form').trigger('reset');
//}

function changeImage(selectOption) {
    var errorMessage = $('#city-type').val();
    var className = '';

    //    use an if statement for the different city names
    if (selectOption == 'jfk' || selectOption == 'lga') {
        //    display the correct background picture with the correct city name

        //storing the name of the css class
        className = 'nyc';
        //            alert('reset');
    } else if (selectOption == 'sfo') {
        className = 'sf';


    } else if (selectOption == 'lax') {
        className = 'la';


    } else if (selectOption == 'atx') {
        className = 'austin';


    } else if (selectOption == 'syd') {
        className = 'sydney';

    } else if (selectOption == 'sea') {
        className = 'seattle';


        //    } else {
        //        //default action
        //
        //        if (selectOption == '') {
        //            alert('The text field is blank. Please type in a city name.');
        //        } else {
        //            alert('The text: ' + errorMessage + ' was invalid, please try again.');
        //        }
    }

    //set the css class on the body
    $('body').attr('class', className);

    //Reset the user input field after it is submitted
    $('form').trigger('reset');
}

$(document).ready(function () {
    //
    //    for (var i = 0; i < fancyAirportNames.length; i++) {
    //        var airportName = fancyAirportNames[i];
    //        console.log(airportName);
    //        $('#city-type').append('<option>' + airportName.name + '</option>');
    //
    //
    //    }
    //
    //
    //
    //    $('#city-type').on('change', function () {
    //
    //        var selectedText = $(this).val();
    //        console.log(selectedText);
    //        fancyChangeImage(selectedText);
    //
    //
    //    });


    //add all the airport names to the drop down menu
    for (var i = 0; i < airportNames.length; i++) {
        var airportName = airportNames[i];
        console.log(airportName);
        $('#city-type').append('<option>' + airportName + '</option>');


    }
    
    //changing the image when the dropdown item changes
    $('#city-type').on('change', function () {

        var selectedText = $(this).val();
        console.log(selectedText);
        changeImage(selectedText);


    });

    //    $('#city-type').change(function () {
    //        alert('option changed');
    //
    //    });

    //    $('#city-type').on('change', showAlert);

});