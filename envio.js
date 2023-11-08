$(document).on("submit", "#manutencao-form", function (event) {
    event.preventDefault();

    var formData = $(this).serializeArray();

    $.post("http://alucom.pythonanywhere.com/producao/", formData, () => {
        alert("Sucesso!")
        document.getElementById("manutencao-form").reset()
    })
});
