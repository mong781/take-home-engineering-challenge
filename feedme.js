'use strict';

/**
 * Summary: Microsoft Commercial Software Engineering Challenge
 * Description: 
 *      This fuction determines the 5 nearest food trucks based on coordinates provided
 *
 */

/* Helper Libraries */
const dataFile = 'Mobile_Food_Facility_Permit.csv';
const fs = require('fs');
const sortByDistance = require('sort-by-distance');
const csvtojson = require('csvtojson');

/* Local Data Store */
const coordinateLocationMap = [];   // Coordinates used for sorting by origin
const dataMap = {};                 // KV Lookup Map by locationId

var initialized = false; 

/* 
* Description: Initialize data sources for use by application
*/
async function init() {
    // Load CSV Data 
    const jsonArray = await csvtojson().fromFile(dataFile);

    jsonArray.forEach(function(row){
        // Isolate key values
        let latitude = Number.parseFloat(row.Latitude),
            longitude = Number.parseFloat(row.Longitude),
            locId = Number.parseInt(row.locationid);

        // Load Row into geo map for sorting purposes
        coordinateLocationMap.push( {loc: locId, lat: latitude, long: longitude});

        // Load Full Data into DataMap to be retrieved by location Id
        dataMap[locId] = row;
    });

    return true;
}


/* 
 * Description: Find Nearest Coordinates 
 * @param {*} origin {latitude, longitude, maxResults}
*/
async function findNearest(origin){
    if (!initialized)
        initialized = await syncLatestData();

    // Query Datastore for coordinates
    const opts = {
        yName: 'lat',
        xName: 'long'
    }    

    // Sort by Closest
    var sorted = sortByDistance(origin, coordinateLocationMap);
    let returnList = {choices: []};

    // Load top 5 results
    if (!origin.maxResults)
        origin.maxResults = 5;
    
        for (var i=0; i<origin.maxResults; i++){
        // Add Entire Record for location Id
        returnList.choices.push(dataMap[sorted[i].loc])
    }

    //DEBUG
    console.log(JSON.stringify(returnList));

    return returnList;
}

/* 
* Description: Refreshes to obtain the latest Data
*/
async function syncLatestData() {
    // Primitize load stored data only
    initialized = await init();

    // TODO: Download from https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat/data
}


/* Command Line Argument Handling */
for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));

    var origin = {
        longitude: process.argv[2],
        latitude: process.argv[3],
        maxResults: process.argv[4]
    }

    return JSON.stringify(findNearest(origin));
}

// Test Area
// const origin = { longitude: -122.418579889476, latitude: 37.7568774515357, maxResults: 5}
// findNearest(origin);


