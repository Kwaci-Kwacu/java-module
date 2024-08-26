exports.profil = (req, res) => {
    const name = req.params.name
    const age = req.params.age
    let response = {
        nama: name,
        umur: age
    }
    return res.json(response)
}

exports.bujur_sangkar = (req, res) => {
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari 
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body 
    let luas = panjang * lebar 
    let keliling = 2 * (panjang + lebar)  
    let response = { 
        panjang: panjang, 
        lebar: lebar, 
        luas: luas, 
        keliling: keliling 
    }
    return res.json(response)
}


