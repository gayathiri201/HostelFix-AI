function submitComplaint() {

    let name = document.getElementById("name").value;
    let complaint = document.getElementById("complaint").value;

    if (name === "" || complaint === "") {
        alert("Please enter your name and complaint.");
        return;
    }

    let text = complaint.toLowerCase();

    let priority = "Low";

    if (
        text.includes("fire") ||
        text.includes("electric shock") ||
        text.includes("gas leak") ||
        text.includes("emergency") ||
        text.includes("danger")
    ) {
        priority = "Critical";
    }
    else if (
        text.includes("water") ||
        text.includes("leak") ||
        text.includes("electricity") ||
        text.includes("fan") ||
        text.includes("light") ||
        text.includes("food")
    ) {
        priority = "High";
    }
    else if (
        text.includes("clean") ||
        text.includes("wifi") ||
        text.includes("internet") ||
        text.includes("room")
    ) {
        priority = "Medium";
    }

    alert(
        "Complaint Submitted Successfully!\\n\\n" +
        "Student: " + name + "\\n" +
        "Priority: " + priority
    );
}

let button = document.querySelector("button");

button.addEventListener("click", submitComplaint);
