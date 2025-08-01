document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".question");

    questions.forEach((question) => {
        const toggleBtn = question.querySelector("#accordion-btn");
        const plusIcon = question.querySelector("#plus-Icon");
        const minusIcon = question.querySelector("#minus-Icon");
        const answer = question.querySelector("p");

        // Hide all answers by default
        answer.style.display = "none";

        toggleBtn.addEventListener("click", () => {
        const isOpen = answer.style.display === "block";

        // Optional: Close all others first
        questions.forEach((q) => {
            q.querySelector("p").style.display = "none";
            q.querySelector("#plus-Icon").style.display = "inline";
            q.querySelector("#minus-Icon").style.display = "none";
        });

        // Toggle current
        if (!isOpen) {
            answer.style.display = "block";
            plusIcon.style.display = "none";
            minusIcon.style.display = "inline";
        } else {
            answer.style.display = "none";
            plusIcon.style.display = "inline";
            minusIcon.style.display = "none";
        }
        });
    });
});
