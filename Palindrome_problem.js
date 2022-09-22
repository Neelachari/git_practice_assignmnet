let Name = "Neelesh";
let row = "";
for (let i = Name.length; i >= 0; i--) {
  row = row + Name[i]
}
if (Name != row) {
  console.log("Yes")
}
else {
  console.log("No")
}
