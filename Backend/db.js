var MongoClient = require('mongodb').MongoClient;//To interact with the database
var url = "mongodb://localhost:27017/"; //location of the database
//Connect to the database
MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("visitors");//create the visitors "table"
    //Insert statement
    // var objInsert = [
    //     { fName: "Matt", lName: "Maxwell", studentID: "M17027657", studentPicture: "/images/matt.png"},
    //     { fName: "Hanna", lName: "Lee", studentID: "H16002800", studentPicture: "/images/matt.png"},
    //     { fname: "Brandon", lName: "Shirah", studentID: "B13000419", studentPicture: "/images/matt/png"},
    //     { fName: "DaJuan", lName: "Harris", studentID: "D09006685", studentPicture: "/images/matt.png"},
    //     { fName: "Gulfiya", lName: "Isyangulova", studentID: "G16005076", studentPicture: "/images/matt.png"}
    // ];//Insert into the database
    var objInsert = [
        { fName: "Matt", lName: "Maxwell", type: "Student", building: 13, enter: Date.now(), exit: null, bcNumber: "M17027657", picture: "https://avatars3.githubusercontent.com/u/40220876?s=400&u=59d93378a7ade678a93cef1fbb3622e8b7a374a0&v=4"},
        { fName: "Hanna", lName: "Lee", type: "Student", building: 13, enter: Date.now(), exit: null, bcNumber: "H16002800", picture: "https://raw.githubusercontent.com/hannabeasiam/soflonucleus/master/images/team/HannaLee.png"},
        { fName: "Brandon", lName: "Shirah", type:"Student", building: 22, enter: Date.now(), exit: Date.now() + 4, bcNumber: "B13000419", picture: "https://github.com/dajuancancode/BC-Backend/blob/matt/images/brandon.jpg"},
        { fName: "DaJuan", lName: "Harris", type: "Student", building: 15, enter: Date.now() - 10, exit: Date.now(), bcNumber: "D09006685", picture: "https://github.com/dajuancancode/BC-Backend/blob/matt/images/dajuan.jpg"},
        { fName: "Gulfiya", lName: "Isyangulova", type: "Student", building: 13, enter: Date.now() - 6, exit: Date.now() + 2, bcNumber: "G16005076", picture: "https://github.com/dajuancancode/BC-Backend/blob/matt/images/gulfiya.jpg"},
        { fName: "Annie", lName: "Myers", type: "Faculty", building: 13, enter: Date.now() - 6, exit: Date.now() + 2, bcNumber: null, picture: null},
        { fName: "Michelle", lName: "Levine", type: "Faculty", building: 13, enter: Date.now() - 6, exit: Date.now() + 2, bcNumber: null, picture: null},
        { fName: "John", lName: "Doe", type: "Other", building: 13, enter: Date.now() - 6, exit: Date.now() + 2, bcNumber: null, picture: null},
        { fName: "Tangy", lName: "Frederick", type: "Student", building: 13, enter: Date.now() - 18, exit: null, bcNumber: "T12345678", picture: "https://raw.githubusercontent.com/hannabeasiam/soflonucleus/master/images/team/Tangy.jpg"}
    ];
    dbo.collection("students").insertMany(objInsert, function(err, res){
        if(err) throw err;
        console.log("Record submitted");
        db.close();//Close the connection
    })
})