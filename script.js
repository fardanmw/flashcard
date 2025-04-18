$(document).ready(function() {
    let currentCard = 1;
    const totalCards = 2; // Sesuaikan jumlah card

    // Flip card saat diklik
    $(".flashcard").click(function() {
        $(this).toggleClass("flipped");
    });

    // Navigasi next card
    $("#nextBtn").click(function() {
        if (currentCard < totalCards) {
            $(`#card${currentCard}`).hide();
            currentCard++;
            $(`#card${currentCard}`).show();
        }
    });

    // Navigasi prev card
    $("#prevBtn").click(function() {
        if (currentCard > 1) {
            $(`#card${currentCard}`).hide();
            currentCard--;
            $(`#card${currentCard}`).show();
        }
    });
});