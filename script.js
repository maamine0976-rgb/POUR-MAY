document.getElementById("enter-btn").addEventListener("click", () => {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("animation-screen").classList.remove("hidden");

    // Affiche le cœur après les lettres
    setTimeout(() => {
        document.getElementById("heart").classList.remove("hidden");
    }, 2500);

    // Affiche le texte final
    setTimeout(() => {
        document.getElementById("final-text").classList.remove("hidden");
    }, 4500);
});
