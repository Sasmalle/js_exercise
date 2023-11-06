const arr = [
    {
      url: "https://img.freepik.com/free-photo/medium-shot-woman-posing-romantic-garden_23-2150316905.jpg?w=1380&t=st=1699264655~exp=1699265255~hmac=1d2e85e867cb4975620dcbb833687e8f7460568f4780921461dd55aa9319d0ec",
      titolo: "Card Titolo 1",
      descrizione: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
    },
    {
      url: "https://img.freepik.com/free-photo/beautiful-retro-nature-with-flowers_23-2149681494.jpg?w=1380&t=st=1699264726~exp=1699265326~hmac=55d1e514c33a02e5920c78ca9861801df0934d29f59a5490452041a7ce83287c",
      titolo: "Card Titolo 2",
      descrizione: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
    },
    {
      url: "https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000",
      titolo: "Card Titolo 3",
      descrizione: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
    },
  ];
  
  const container = document.querySelector("#container");
  
  arr.forEach((data) => {
    creaCard(data);
  });
  
  function creaCard(data) {
    const cardElement = document.createElement("div");
    cardElement.className = "w-full md:w-1/2 xl:w-1/3 px-4";
  
    cardElement.innerHTML = `
      <div class="bg-white rounded-lg overflow-hidden mb-10">
        <img src="${data.url}" alt="image" class="w-full" />
        <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
          <h3 class="font-semibold text-dark text-xl">${data.titolo}</h3>
          <p class="text-base text-body-color leading-relaxed mb-7">${data.descrizione}</p>
        </div>
      </div>
    `;
  
    container.appendChild(cardElement);
  }
