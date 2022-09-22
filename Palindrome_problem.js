let Name = "Neelesh";
let row = "";
for (let i = Name.length-1; i >= 0; i--) {
  row += Name[i]
}
if (Name == row) {
  console.log("Yes")
}
else {
  console.log("No")
}
