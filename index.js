function kirim(){
    document.getElementById('nik_output').value = document.getElementById('nik_input').value;
    document.getElementById('nama_output').value = document.getElementById('nama_input').value;
    document.getElementById('gender_output').value = document.getElementById('gender_input').value;
    document.getElementById('agama_output').value = document.getElementById('agama_input').value;
    document.getElementById('jurusan_output').value = document.getElementById('jurusan_input').value;
    document.getElementById('komentar_output').value = document.getElementById('komentar_input').value;
    status();
}

function status(){
    var radioInputKawin = document.getElementById('radio_input_kawin');
    var radioInputBelumKawin = document.getElementById('radio_input_belum_kawin');
    var radioOutput = document.getElementById('radio_output');

    if(radioInputKawin.checked == true){
        radioOutput.value = radioInputKawin.value;
    }
    if(radioInputBelumKawin.checked == true){
        radioOutput.value = radioInputBelumKawin.value;
    }
    if(radioInputKawin.checked == false && radioInputBelumKawin.checked == false){
        radioOutput.value = "Tidak Memiliki Status";
    }
}