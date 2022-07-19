const nameInput = document.getElementById("nameInput");
const button = document.getElementById("enter");
const buttonClick = button.addEventListener("click", nameCat);

class Cats 
{
  constructor(breed, age)
  {
    this.breed = breed;
    this.age = age;
  }
}

class YourCat extends Cats
{
  constructor(breed, age, name)
  {
    super(breed, age);
    this.name = name;
  }
}

let kitty = new yourCat("Calico", 15, "Orange");

function nameCat()
{
  kitty.name = nameInput.value;

  const text1 = document.createElement("p");
  const text2 = document.createElement("p");
  const text3 = document.createElement("p");

  text1.innerText = "The breed of the cat is: " + kitty.breed;
  text2.innerText = "The cat's age is " + kitty.age + " years old";
  text3.innerText = "You name the cat " + kitty.name;

  document.body.appendChild(text1);
  document.body.appendChild(text2);
  document.body.appendChild(text3);
}
