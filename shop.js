var shop = [
    {
      title: 'Iguana',
      image: 'https://whisperingpinespc.com/wp-content/uploads/2013/05/4392411714_374e0cb527_o-900-center-800x506.jpg',
      price: '$189.99',
      description:"Iguanas are lizards identified by their stocky stature, the saggy skin on their throats and the spines that protrude from their heads, necks, backs and tails. Iguanas are popular pets and can live 15 to 20 years if cared for properly."
    },

    
    {
      title: 'Corn Snake',
      image: 'https://www.reptiles.swelluk.com/media/catalog/product/cache/bc8777b17f623064fe2857c85a7263c9/c/o/corn_snake_pantherophis_guttatus.jpg',
      price: '$139.99',
      description: "Corn snakes are a type of rat snake and are named for the pattern of their belly scales that resembles maize, an ancestor of modern-day corn. They are known to be good climbers and escape artists and are popular pets due to their variety of colors and patterns and their generally even temperament. With regular handling, they can be docile, gentle pets."
    },

    {
      title: 'Ball Python',
      image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/ball-python-coiled-on-branch-david-kenny.jpg',
      price: '$89.99',
      description: "Ball Pythons are named for their habit of curling themselves up into a tight ball. Ball pythons come in a variety of patterns and colors and can reach up to 5 feet in length. Ball Pythons are typically very docile and very friendly and comfortable with proper handling."
    },

    {
      title: 'Assorted Beta Fish',
      image: 'https://i.pinimg.com/originals/ed/92/23/ed922312605d8c4404a3a944743677ee.jpg',
      price: '$9.99',
      description: "Bettas are known for their jewel-bright colors and flowing fins that come in a wide variety of morphs. Uniquely, bettas can breathe from their labyrinth organ which enables the fish to breathe from the surface. These beautiful fish are easy to care for and may live for several years."
    },

    {
      title: 'Domestic Short Hair Kittens',
      image: 'https://static.meowbox.com/assets/HLJDGiIrTfhbABIekWePhhWsTJqlHQbl.jpg',
      price: '$17,500,000',
      description: "Don't ask. You cant afford them."
    },

    {
      title: 'Seahorse',
      image: 'https://animalfactguide.com/wp-content/uploads/2021/01/sea_horse_is_horsey-e1609821832721.jpg',
      price: '$7.99',
      description: "Seahorses are a prehistoric tropical species and can be found in the waters of Indo-Pacific and Caribbean oceans. A seahorses color variation ranges from black, brown, reddish-maroon, cream, yellow and gold. Using their tail, the poor swimming seahorse grasp hold of branches and other décor to secure themselves."
    },

      {
        title: 'Brachiosaurus',
        image: 'https://i.etsystatic.com/35505201/r/il/00ad40/3966199802/il_1140xN.3966199802_eoc2.jpg',
        price: 'Please See Buddy',
        description: "Please See Buddy"
      },


    {
      title: 'Pet Rock',
      image: './img/shopOwl.jpg',
      price: '$49.99',
      description: "Yes. It's a rock. That's your new pet. But it's more than that. With the purchase price of your new pet, Buddys Buddies will make a donation in that exact amount to an education or conservation effort. We wish to thank our local County Board of Developmental Disabilities for always helping to fill our pet rock donation box!"
    },

    {
      title: 'Pet Boulder',
      image: 'https://mybrownnewfies.com/wp-content/uploads/2016/06/Be-Your-Pets-Hero.jpg.webp',
      price: '$499.99',
      description: "Same as the Pet Rock, only you get to brag and have your picture and name listed on our Wall of Heros!!!  We'll get you the boulder if you want really want it, but you have to move it!"
    }
    
    ]
    
    var postHTML = " "
  
 
  
//-----------------------------------------
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product ' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img src="' + shop[i].image + '"/'
        var price = '<p> $' + shop[i].price + '</p></span>'
        var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML