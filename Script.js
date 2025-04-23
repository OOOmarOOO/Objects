let A = prompt("Enter Your User Name (Omar)");

let Objects = {
    Name: "Omar"
};

if (A === Objects.Name) {
    document.write(`<br><br><br><br><br><center><h1>You Are On The Right Way</h1><center>`);
    console.log("You Are On The Right Way");
} else {
    document.write(`<br><br><br><br><br><center><h1>Please Enter Your User Name (Omar)</h1><center>`);
    console.log("Please Enter Your User Name (Omar)");
}
