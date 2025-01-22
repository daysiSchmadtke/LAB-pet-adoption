const pets = [
  {
    id: 1,
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    className: "blue",
    imageUrl:
      "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
  },
  {
    id: 2,
    name: "Trouble",
    color: "Brown",
    specialSkill:
      "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    className: "orange",
    imageUrl:
      "https://www.dropbox.com/scl/fi/f12hpve32j3f8cwzag6ez/3.png?rlkey=u527wuf86p95ta0z2y789yxvv&st=wjmxq1gg&raw=1",
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    className: "orange",
    imageUrl:
      "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
  },
  {
    id: 4,
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    className: "green",
    imageUrl:
      "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
  },
  {
    id: 5,
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    className: "blue",
    imageUrl:
      "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
  },
  {
    id: 6,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    className: "green",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
  },
  {
    id: 7,
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    className: "blue",
    imageUrl:
      "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
  },
  {
    id: 8,
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    className: "orange",
    imageUrl:
      "https://www.dropbox.com/scl/fi/d9dk2x16ms27srw84rxqm/6.png?rlkey=68z1lgje49edmkrtayiawbjbg&st=aukaa5ut&raw=1",
  },
  {
    id: 9,
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    className: "blue",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
  },
  {
    id: 10,
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    className: "blue",
    imageUrl:
      "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
  },
  {
    id: 11,
    name: "Cocomelon",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "orange",
    imageUrl:
      "https://www.dropbox.com/scl/fi/i1ulttmbrfykowdms0psl/2.png?rlkey=ro36udk0ij3ech8gpk6u351uq&st=hxafogof&raw=1",
  },
  {
    id: 12,
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    className: "green",
    imageUrl:
      "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
  },
  {
    id: 13,
    name: "Chester",
    color: "Red",
    className: "green",
    specialSkill:
      "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl: "https://m.media-amazon.com/images/I/81gwYMceAqL.jpg",
  },
  {
    id: 14,
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    className: "blue",
    imageUrl:
      "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
  },
  {
    id: 15,
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    className: "blue",
    imageUrl:
      "https://media.istockphoto.com/id/1402684700/photo/bengal-cat-with-cucumbers-in-front-of-his-eyes-in-the-spa.jpg?s=612x612&w=0&k=20&c=w6o8WEhSA2koGVCJaF6q3dJki4H7wwJGqKuDTT7frVU=",
  },
  {
    id: 16,
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    className: "orange",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSKDYiaUXaI07At3fl_xe6eaO79E7skhUAsg&s",
  },
  {
    id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill:
      "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    className: "blue",
    imageUrl:
      "https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o=",
  },
  {
    id: 18,
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    className: "orange",
    type: "dino",
    imageUrl:
      "https://www.dropbox.com/scl/fi/y0tzmkiv0wimw1lng9nko/4.png?rlkey=vwbj5z0dovljdwtt9k1ac4yzb&st=nym28ude&raw=1",
  },
  {
    id: 19,
    name: "Callie",
    color: "Blue",
    className: "green",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl:
      "https://imageio.forbes.com/specials-images/imageserve/6728cb0298bfe7c30204c436/A-funny-looking-dog-running-on-shallow-water-/0x0.jpg?crop=3171,2549,x408,y13,safe&height=571&width=711&fit=bounds",
  },
  {
    id: 20,
    name: "Bellatrix",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    className: "blue",
    imageUrl:
      "https://greatergood.org/hs-fs/hubfs/Murphy-Intake-10-28-2017-CSHS-2.jpg?width=800&height=533&name=Murphy-Intake-10-28-2017-CSHS-2.jpg",
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    className: "orange",
    imageUrl:
      "https://www.dropbox.com/scl/fi/y19dwc5qwjcfh5r4kemly/5.png?rlkey=aeccqyb7t1fvf9fqe2f7nxtco&st=1jt5xx0t&raw=1",
  },
  {
    id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    className: "blue",
    imageUrl:
      "https://static01.nyt.com/images/2021/11/23/business/00cutecats-disinfo-promo/00cutecats-disinfo-promo-mediumSquareAt3X.png",
  },
  {
    id: 23,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    className: "green",
    imageUrl:
      "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
  },
  {
    id: 24,
    name: "George",
    color: "Brown",
    specialSkill:
      "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    className: "green",
    imageUrl:
      "https://img.freepik.com/free-photo/front-view-funny-cute-dog-concept_23-2148786532.jpg",
  },
  {
    id: 25,
    name: "Robbin",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    className: "blue",
    imageUrl:
      "https://img2.chinadaily.com.cn/images/201711/16/5a0d3041a31061a720dc32d9.jpeg",
  },
  {
    id: 26,
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    className: "green",
    imageUrl:
      "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
  },
  {
    id: 27,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    className: "orange",
    imageUrl:
      "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
  },
  {
    id: 28,
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    className: "blue",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
  },
  {
    id: 29,
    name: "Oscar",
    color: "white",
    specialSkill:
      "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    className: "blue",
    imageUrl:
      "https://www.pd.com.au/wp-content/uploads/2022/07/cute-cats-Perisan-au.jpg.webp",
  },
  {
    id: 30,
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    className: "orange",
    imageUrl:
      "https://creator.nightcafe.studio/jobs/se6OdRLRneeol6qQqUB0/se6OdRLRneeol6qQqUB0--1--lovou.jpg",
  },
];

//create
const form = document.querySelector("form");

const createPetCard = (e) => {
  e.preventDefault();
  const newPet = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    type: document.querySelector("#type").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#specialSkill").value,
    imageUrl: document.querySelector("#image").value,
    className: document.querySelector("input[name='className']:checked").value,
  };
  pets.push(newPet);
  createCards(pets);
  form.reset();
};

form.addEventListener("submit", createPetCard);
//Select the main div where the cards will display
const adoptPets = document.querySelector("#adoptPets");

//Select the page buttons and add an Event Listener & arrow function
const allBtn = document.querySelector("#all-btn");
allBtn.addEventListener("click", () => {
  createCards(pets);
});

const catBtn = document.querySelector("#cat-btn");
catBtn.addEventListener("click", () => {
  const cats = filterPet(pets, "cat");
  createCards(cats);
});

const dogBtn = document.querySelector("#dog-btn");
dogBtn.addEventListener("click", () => {
  const dogs = filterPet(pets, "dog");
  createCards(dogs);
});

const dinoBtn = document.querySelector("#dino-btn");
dinoBtn.addEventListener("click", () => {
  const dinos = filterPet(pets, "dino");
  createCards(dinos);
});

// create a function that updates the id passing in the html cards;
const displayCards = (divId, htmlRender) => {
  const selectDiv = document.querySelector(divId);
  selectDiv.innerHTML = htmlRender;
};

//function that creates a card and then calls the function to display each card
const createCards = (array) => {
  let cardInfo = "";
  for (const pet of array) {
    cardInfo += `<div class="card" style="width: 15rem;">
      <h5 class="card-title">${pet.name}</h5>
      <h6>${pet.id}</h6>
      <img src="${pet.imageUrl}" class="card-img-top" alt="...">
      <div class="card-body"> 
        <p class="card-text">${pet.color}</p>
        <p class="card-text">${pet.specialSkill}</p>
      </div>
      <div class="card-footer ${pet.className}">
      <p class="card-text">${pet.type}</p>
      <button class="btn btn-danger delete-btn" data-id="${pet.id}">Delete</button>
      </div>
      </div>`;
  }
  displayCards("#adoptPets", cardInfo);

  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      deletePet(e.target.dataset.id);
    });
  });
};

const deletePet = (id) => {
  const petIndex = pets.findIndex((pet) => pet.id === parseInt(id));
  if (petIndex > -1) {
    pets.splice(petIndex, 1);
    createCards(pets);
  }
};

//Create a function to filter by pet type
const filterPet = (array, type) => {
  const petType = [];
  for (const pet of array) {
    if (pet.type === type) {
      petType.push(pet);
    }
  }
  return petType;
};
