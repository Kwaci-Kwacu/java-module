const express = require("express") // memanggil library express js 
const cors = require("cors") // memanggil library cors 
const app = express()
const praktikum = require("./routes/praktikumRoute")

app.use(`/praktikum`, praktikum)

// penggunaan cors agar end point dapat diakses oleh cross platform 
app.use(cors())

const bangunRuangRoute = require(`./routes/soal1`);
app.use(`/bangun-ruang`, bangunRuangRoute);

app.listen(8000, () => { 
    console.log("Server run on port 8000"); 
    })    

//     // endpoint "/test" dengan method GET 
// app.get("/test", (req,res) => { 
//     // req merupakan variabel yang berisi data request 
//     // res merupakan variabel yang berisi data response dari end-point 
// // membuat objek yang berisi data yang akan dijadikan response 
// let response = { 
//     message: "Ini end-point pertama ku", 
//     method: req.method, 
//     code: res.statusCode 
//     } 
//     // memberikan response dengan format JSON yang berisi objek di atas 
//     res.json(response) 
//     }) 
//     // menjalankan server pada port 8000 
