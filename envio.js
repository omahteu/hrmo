$(document).on("submit", "#manutencao-form", function (event) {
    event.preventDefault();

    var formData = $(this).serializeArray();

    $.post("http://alucomtec.pythonanywhere.com/producao/", formData, () => {
        alert("Sucesso!")
        document.getElementById("manutencao-form").reset()
    })
});
