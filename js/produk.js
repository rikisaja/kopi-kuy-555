var data_kopi = {
    "arabica": [
        {
            nama: "Cappucino",
            foto: "../images/produk/product_capuchino.jpg"
        },
        {
            nama: "Espresso",
            foto: "../images/produk/product_espresso.jpg"
        }
    ],
    "robusta": [

    ]
}

function updatePilihan() {
    select_kopi.innerHTML = `<option value="">Semua</option>`
    Object.keys(data_kopi).forEach(key => {
        select_kopi.innerHTML += `<option value="${key}">${key}</option>`
    });

}
updatePilihan()
var kopi_pilihan = []
//kopi_pilihan.push(...data_kopi["arabica"])
//var kopi_pilihan = data_kopi["arabica"]

function updateTampilan() {
    baris_produk.innerHTML = ''
    kopi_pilihan.forEach(kopi => {
        baris_produk.innerHTML += `<div class="col mb-4">
        <div class="card">
            <img src="${kopi.foto}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${kopi.nama}</h5>
                <div class="row my-4">
                    <div class="col">
                        ${kopi.size}
                    </div>
                    <div class="col">
                        ${kopi.harga}
                    </div>
                </div>
                <a href="${kopi.link}" class="btn btn-success w-100"><i class="bi bi-cart4"></i> Beli</a>
            </div>
        </div>
    </div>`
    })
}

updateTampilan()
select_kopi.onchange = function () {
    kopi_pilihan = data_kopi[select_kopi.value]
    updateTampilan()
}



/*
var sumber = "https://rikikurnia.com/prakerja/api/kopi"
var sumber2 = "data.json"

select_kopi.onchange = function () {
    var dipilih = this.value
    console.log(dipilih)
    ambilData(dipilih)
}


function ambilData(dipilih) {
    var template = ""
    $.getJSON(sumber).then(function (data) {
        var data_kopi = data[dipilih]
        console.log(data_kopi)

        data_kopi.forEach(item => {
            template += `<div class="col mb-4">
                        <div class="card">
                            <img src="${item.foto}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${item.nama}</h5>
                                <div class="row my-4">
                                    <div class="col">
                                        ${item.size}
                                    </div>
                                    <div class="col">
                                        ${item.harga}
                                    </div>
                                </div>
                                <a href="${item.link}" class="btn btn-success w-100"><i class="bi bi-cart4"></i> Beli</a>
                            </div>
                        </div>
                    </div>`
        });
        document.querySelector("#baris_produk").innerHTML = template
    })
}
*/