var $tbody = document.querySelector("#table-body");
var $dateInput = document.querySelector("#date-input");
var $cityInput = document.querySelector("#city-input");
var $stateInput = document.querySelector("#state-input");
var $countryInput = document.querySelector("#country-input");
var $shapeInput = document.querySelector("#shape-input");
var $submitButton = document.querySelector("#submit");


var filteredList = dataSet;

var startingIndex = 0;
var resultsPerPage = 1000;

renderTable();

// This is the function to render the table

function renderTable() {var endingIndex = startingIndex + resultsPerPage;

    // Loops through the data

    for (let i = 0; i < filteredList.length; i++) {let $row = $tbody.insertRow(i);let currentList = filteredList[i];let fields = Object.keys(currentList);

        for(let j = 0; j < fields.length; j++) {let field = fields[j];let $cell = $row.insertCell(j);$cell.innerText = currentList[field];};};};

//Submit button

$submitButton.addEventListener("click", filterInput);

//Date
function filterDate(sighting) {return sighting.datetime == $dateInput.value.trim().toLowerCase();};

//City
function filterCity(sighting) {return sighting.city == $cityInput.value.trim().toLowerCase();};

//State
function filterState(sighting) {return sighting.state == $stateInput.value.trim().toLowerCase();};

//Country
function filterCountry(sighting) {return sighting.country == $countryInput.value.trim().toLowerCase();};

//Shape
function filterShape(sighting) {return sighting.shape == $shapeInput.value.trim().toLowerCase();};

//Input
function filterInput(event) {event.preventDefault();

    // Reseting data set each time button is clicked
    filteredList = dataSet;

    // Filters
    if ($dateInput.value) {filteredList = filteredList.filter(filterDate);};

    if ($cityInput.value) {filteredList = filteredSList.filter(filterCity);};

    if ($stateInput.value) {filteredList = filteredList.filter(filterState);};

    if ($countryInput.value) {filteredList = filteredList.filter(filterCountry);};

    if ($shapeInput.value) {filteredList = filteredList.filter(filterShape);};

    if (!$dateInput && !$cityInput && !$stateInput && !$countryInput && !$shapeInput) {filteredList = dataSet;};

    // Reset inputs
    $dateInput.value = "";
    $cityInput.value = "";
    $stateInput.value = "";
    $countryInput.value = "";
    $tbody.innerHTML = "";
    renderTable();
};