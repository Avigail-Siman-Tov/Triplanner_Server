const express = require('express');
const router = express.Router();
const KmeansLib = require('kmeans-same-size');

const sameSizeKMeans = async (req, res) => {

    var kmeans = new KmeansLib();
    const k = req.query['numDayTrip']; // Groups Number
    const size = 3 // Group size
    console.log("query", req.query)
    console.log("query", req.query)
    
    kmeans.init({k: k, runs: size, equalSize: true, normalize: false });
    let arrTrip = req.query['t']
    let vectors = []
    for (const i in arrTrip){
        var temp= arrTrip[i].split(",")
        console.log(temp)
        var dict ={}
        dict['x'] = temp[0]
        dict['y'] = temp[1]
        vectors.push(dict)
    }
    
    const sum = kmeans.calc(vectors);
    console.log(vectors);
    result=""
    for(const j in vectors){
        result+="t"+j+"="+vectors[j]['k']+","
    }
    return res.send(result)
}


module.exports ={sameSizeKMeans}


