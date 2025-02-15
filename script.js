document.addEventListener("DOMContentLoaded", function() {
    const hobbyButton = document.getElementById("hobbyBtn");

    if (hobbyButton) {
        hobbyButton.addEventListener("click", function() {
            alert("My Hobbies:\n- Reading\n- Playing Video Games\n- Streaming\n- Coding");
        });
    } else {
        console.error("Button with ID 'hobbyBtn' not found!");
    }
});
