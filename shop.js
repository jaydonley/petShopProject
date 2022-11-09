var shop = [
    {
      id: "iguana",
      title: 'Green Iguana',
      image: 'https://media.istockphoto.com/id/146059113/photo/iguana.jpg?s=612x612&w=0&k=20&c=ddyOBJUQbN3B6gWgI04jHzFdnycwUkF7TzwRqFKHqPE=',
      price: '189.99',
      description:"Iguanas are lizards identified by their stocky stature, the saggy skin on their throats and the spines that protrude from their heads, necks, backs and tails. Iguanas are popular pets and can live 15 to 20 years if cared for properly. Lorem ipsum dolor sit amet consectetur adipisicing elit. A aspernatur necessitatibus ratione, nostrum sit vero aliquid sequi est iste tempora velit? Illum quia vero nam veniam ex et cumque accusamus. ad iure, quisquam praes. ",
      
    },

    
    {
      id: "cornSnake",
      title: 'Corn Snake',
      image: 'https://media.istockphoto.com/photos/corn-snake-picture-id501511443?k=20&m=501511443&s=612x612&w=0&h=mbdlK7fgV8rvTuFX4Wsx5P0E_bx6RnAkzYOxEZSsy00=',
      price: '139.99',
      description: "Corn snakes are a type of rat snake and are named for the pattern of their belly scales that resembles maize, an ancestor of modern-day corn. They are known to be good climbers and escape artists and are popular pets due to their variety of colors and patterns and their generally even temperament. With regular handling, they can be docile, gentle pets."
    },

    {
      id: "ballPython",
      title: 'Ball Python',
      image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/ball-python-coiled-on-branch-david-kenny.jpg',
      price: '89.99',
      description: "Ball Pythons are named for their habit of curling themselves up into a tight ball. Ball pythons come in a variety of patterns and colors and can reach up to 5 feet in length. Ball Pythons are typically very docile and very friendly and comfortable with proper handling. Lorem ipsum dolor sit amet consectetur adipisicing elit. A aspernatur necessitatibus ratione, nostrum sit vero aliquid sequi est iste tempora velit? Illum quia vero nam veniam ex et. "
    },

    {
      id: "bettaFish",
      title: 'Assorted Betta Fish',
      image: 'https://images3.alphacoders.com/772/772007.jpg',
      price: '9.99',
      description: "Bettas are known for their jewel-bright colors and flowing fins that come in a wide variety of morphs. Uniquely, bettas can breathe from their labyrinth organ which enables the fish to breathe from the surface. These beautiful fish are easy to care for and may live for several years."
    },

    {
      id: "kittens",
      title: 'Short Hair Kittens',
      image: 'https://static.meowbox.com/assets/HLJDGiIrTfhbABIekWePhhWsTJqlHQbl.jpg',
      price: '17,500,000',
      description: "Don't ask. You can't afford them. <br/> I mean... look at them. <br/><br/>I am not selling these adorable creatures. "
    },

    {
      id: "seahorse",
      title: 'Seahorse',
      image: 'https://c0.wallpaperflare.com/preview/389/876/850/nature-sea-seahorse-underwater.jpg',
      price: '17.99',
      description: "Seahorses are a prehistoric tropical species and can be found in the waters of Indo-Pacific and Caribbean oceans. A seahorses color variation ranges from black, brown, reddish-maroon, cream, yellow and gold. Using their tail, the poor swimming seahorse grasp hold of branches and other décor to secure themselves. <br/><br/>"
    },

      {
        id: "brachiosaurus",
        title: 'Brachiosaurus',
        image: 'https://i.etsystatic.com/33315444/r/il/d4b5ed/3746090677/il_fullxfull.3746090677_hnqc.jpg',
        price: 'Please See Buddy',
        description: "Please See Buddy"
      },


    {
      id: "petRock",
      title: 'Pet Rock',
      image: 'https://www.sru.edu/images/news/2021/May/051021a/051021a_0006.JPG',
      price: '49.99',
      description: "Yes. It's a rock. That's your new pet. But it's more than that. With the purchase price of your new pet, Buddys Buddies will make a donation in that exact amount to an education or conservation effort. We wish to thank our local County Board of Developmental Disabilities for always helping to fill our pet rock donation box! <br/><br/>"
    },

    {
      id: "petBoulder",
      title: 'Pet Boulder',
      image: 'https://blog.tryfi.com/content/images/2020/06/super-dog.jpg',
      price: '499.99',
      description: "Same as the Pet Rock, only you get to brag and have your picture and name listed on our Wall of Heros!!!  We'll get you the boulder if you want really want it, but you have to move it!"
    }
    
    ]

   
    
    var postHTML = " "
  
 
  
//-----------------------------------------
    for (var i=0; i < shop.length; i++){
      
        var heading = '<div class="product " class="container" class="row" class="col" ' + '"> <span  class="container" ><h4>' + shop[i].title + '</h4>'

        var image = '<img class="imgShopBorder" src="' + shop[i].image + '"/ id="shop-card-img">'

        var price = '<p> $' + shop[i].price + '</p></span>'

        var description = '<div class=""><p class="descriptionText mb-5">'+ shop[i].description + '</p> </div> <div style="display: flex; align-items: flex-end; justify-content: center;" ><button class="learnMoreButton btn" type="button" style="height: 50px;">Learn More</button><button class="cartButton btn" type="button" style="height: 50px;">Add to cart</button></p></div></div>'

        var twoButtons = '<p class="text-center"> <button class="learnMoreButton btn" type="button" class="" >Learn More</button><button class="cartButton btn" type="button" class="" >Add to cart</button></p></div>'

        
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('shop').innerHTML = postHTML