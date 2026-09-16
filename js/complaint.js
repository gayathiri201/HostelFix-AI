function submitComplaint() {
    let name = document.getElementById("name").value;
    let complaint = document.getElementById("complaint").value;

    if (name === "" || complaint === "") {
        alert("Please enter your name and complaint.");
    } else {
        alert("Complaint submitted successfully!");
    }
}
