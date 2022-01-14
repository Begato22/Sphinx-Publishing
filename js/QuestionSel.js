const select = document.getElementsByTagName("select");
const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  for (let i = 0; i < select.length; i++) {
    select[i].options.selectedIndex = 0;
  }
});

const selectOne = document.getElementById("Ques1");
const handleSelect = () => {
  console.log(selectOne.options.selectedIndex);

  for (let i = 0; i < select.length; i++) {
    console.log(select[i].options.selectedIndex);
  }
};
