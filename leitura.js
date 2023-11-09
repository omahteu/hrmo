$(window).on("load", function() {
    let tecnico = sessionStorage.getItem('tec')


    $.ajax({
        url: 'http://alucomtec.pythonanywhere.com/producao/',  // Use HTTPS aqui
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(e)
        },
        error: function(error) {
            // Manipule erros
        }
    });










    // $.get("http://alucomtec.pythonanywhere.com/producao/", function(e) {
    //     let meus = e.filter(x => x.tecnico == tecnico)
    //     console.log(meus)
    //     var tabela = document.getElementById("registros")
    //     tabela.innerHTML = ""
    //     meus.forEach(i => {
    //         tabela.innerHTML += `
    //             <tr>
    //                 <td>${i.tecnico}</td>
    //                 <td>${i.patrimonio}</td>
    //                 <td>${i.orgao}</td>
    //                 <td>${i.equipamento}</td>
    //                 <td>${i.defeito}</td>
    //                 <td>${i.servico_realizado}</td>
    //                 <td>${i.verificacao}</td>
    //                 <td>${i.status}</td>
    //                 <td>${i.observacao}</td>
    //             </tr>
    //         `
    //     });
    // })
})
