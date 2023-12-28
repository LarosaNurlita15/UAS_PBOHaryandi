function showCalculator(bangunDatar) {
    hideAll();
    document.getElementById(bangunDatar).style.display = "block";
}

function hitungLuasKeliling(bangunDatar) {
    switch(bangunDatar) {
        case 'persegiPanjang':
            const panjang = parseFloat(document.getElementById("panjang").value);
            const lebar = parseFloat(document.getElementById("lebar").value);

            const luasPP = panjang * lebar;
            const kelilingPP = 2 * (panjang + lebar);
            
            // nilai input hasil luas dan keliling
            document.getElementById("luasPersegiPanjang").innerHTML = "Luas: <span>" + luasPP + "</span>";
            document.getElementById("kelilingPersegiPanjang").innerHTML = "Keliling: <span>" + kelilingPP + "</span>";
            break;

        case 'bujurSangkar':
            const sisiBujurSangkar = parseFloat(document.getElementById("sisiBujurSangkar").value);

            const luasBujurSangkar = sisiBujurSangkar * sisiBujurSangkar;
            const kelilingBujurSangkar = 4 * sisiBujurSangkar;

            // nilai input hasil luas dan keliling
            document.getElementById("luasBujurSangkar").innerHTML = "Luas: <span>" + luasBujurSangkar + "</span>";
            document.getElementById("kelilingBujurSangkar").innerHTML = "Keliling: <span>" + kelilingBujurSangkar + "</span>";
            break;

        case 'lingkaran':
            const jariJari = parseFloat(document.getElementById("jariJari").value);

            const luasLingkaran = Math.PI * Math.pow(jariJari, 2);
            const kelilingLingkaran = 2 * Math.PI * jariJari;

            // nilai input hasil luas dan keliling
            document.getElementById("luasLingkaran").innerHTML = "Luas: <span>" + luasLingkaran + "</span>";
            document.getElementById("kelilingLingkaran").innerHTML = "Keliling: <span>" + kelilingLingkaran + "</span>";
            break;
    }
}

function hideAll(bangunDatar) {
    document.getElementById("persegiPanjang").style.display = "none";
    document.getElementById("bujurSangkar").style.display = "none";
    document.getElementById("lingkaran").style.display = "none";
}
