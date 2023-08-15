const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://riya26_11:Gotohell%4026@cluster0.xmtpsvu.mongodb.net/Sample_Project").then(() => {
    console.log(`Connection succesful`);
}).catch((e) => {
    console.log(`no connection`);
})
