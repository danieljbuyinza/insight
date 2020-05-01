function calculateMySalary() {
    var mySalary = document.getElementById("my-salary").value;

    // For half of the year ahead
    document.getElementById("half-calculation").innerHTML = mySalary;

    // For the full year ahead
    document.getElementById("full-calculation").innerHTML = mySalary * 2;
}