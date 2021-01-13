$('document').ready(function(){



let products = [
{
    id: 1,
    name: 'Clearomiseur GS Turbo Eleaf',
    price: 8.50,
    desc: "Le clearomiseur GS Turbo s'adresse aux amateurs de vape en inhalation indirecte et tirage serré.",
    img: 'assets\\img\\clearomiseur-gs-turbo-eleaf',
    category: 
    {
        ecig: 0,
        liquid: 0,
        clearo: 1,
        bat: 0,
        res: 0
    },
},
{
    id: 2,
    name: 'Le Rouge',
    price: 4.90,
    desc: 'Découvrez notre cocktail fruité, frais et complexe à base de fruits rouges avec une légère pointe anisée.',
    category: 
    {
        ecig: 0,
        liquid: 1,
        clearo: 0,
        bat: 0,
        res: 0
    },
},
{
    id: 3,
    name: 'La pêche',   
    price: 4.90,
    desc: "Découvrez une pêche ultra gourmande, c'est le moment de goûter à une saveur de type brugnon juteux et sucré !",
    category: 
    {
        ecig: 0,
        liquid: 1,
        clearo: 0,
        bat: 0,
        res: 0
    },
},
{
    id: 4,
    name: 'Menthe polaire',
    price: 4.90,
    desc: "Retrouvez les sensations polaires du grand nord et les saveurs d’une menthe du jardin dans ce liquide glacial et herbacé.",
    category: 
    {
        ecig: 0,
        liquid: 1,
        clearo: 0,
        bat: 0,
        res: 0
    },
},
{
    id: 5,
    name: 'Classic Blend',
    price: 4.90,
    desc: "Mélange de Classic blond américain avec des notes de Burley. Idéal pour débuter, le Classic Blend est un vrai goût de Classic léger, peu sucré.",
    category: 
    {
        ecig: 0,
        liquid: 1,
        clearo: 0,
        bat: 0,
        res: 0
    },
},
{
    id: 6,
    name: 'Clearomiseur TFV9 Smok',
    price: 24.90,
    desc: "Le clearomiseur TFV9 de chez Smok est l'un des plus imposant tank sub-ohm du moment.",
    category: 
    {
        ecig: 0,
        liquid: 0,
        clearo: 1,
        bat: 0,
        res: 0
    },
},
{
    id: 7,
    name: 'Clearomiseur Forz Tank Vaporesso',
    price: 20.90,
    desc: "Vaporesso vous propose son clearomiseur Forz Tank, qui accompagne également le kit Forz TX80.",
    category: 
    {
        ecig: 0,
        liquid: 0,
        clearo: 1,
        bat: 0,
        res: 0
    },
},
{
    id: 8,
    name: 'Clearomiseur Nautilus GT Tank Aspire',
    price: 28.90,
    desc: "Le clearomiseur Nautilus GT Aspire est le fruit d'une collaboration étonnante entre deux géants de la vape : Aspire et Taifun.",
    category: 
    {
        ecig: 0,
        liquid: 0,
        clearo: 1,
        bat: 0,
        res: 0
    },
},
{
    id: 9,
    name: 'Kit Luxe 2 LPV edition',
    price: 64.90,
    desc: "Voici le tout nouveau kit Luxe 2 LPV Edition du fabricant Vaporesso dans une édition spéciale imaginée et désignée spécialement pour Le Petit Vapoteur.",
    category: 
    {
        ecig: 1,
        liquid: 0,
        clearo: 0,
        bat: 0,
        res: 0
    },
},
{
    id: 10,
    name: 'Kit Coolfire z50 Vintage edition Innokin',
    price: 56.90,
    desc: "Innokin vous présente une version originale et splendide avec le kit CoolFire Z50 Vintage Edition.",
    category: 
    {
        ecig: 1,
        liquid: 0,
        clearo: 0,
        bat: 0,
        res: 0
    },
},
{
    id: 11,
    name: 'Kit iStick s80 Eleaf',
    price: 61.90,
    desc: "Le kit iStick S80 est un petit bijou entièrement consacré à la vape en inhalation indirecte.",
    category: 
    {
        ecig: 1,
        liquid: 0,
        clearo: 0,
        bat: 0,
        res: 0
    },
},
{
    id: 12,
    name: 'Kit Launcher Grus',
    price: 59.90,
    desc: "Le Petit Vapoteur vous propose un kit dévoué à la vape DL en inhalation directe avec la box Grus 100W compatible accu 21700, de Lost Vape.",
    category: 
    {
        ecig: 1,
        liquid: 0,
        clearo: 0,
        bat: 0,
        res: 0
    },
},
{
    id: 13,
    name: 'Resistances Fog HumVee',
    price: 12.50,
    desc: "Le Petit Vapoteur vous propose un kit dévoué à la vape DL en inhalation directe avec la box Grus 100W compatible accu 21700, de Lost Vape.",
    category: 
    {
        ecig: 0,
        liquid: 0,
        clearo: 0,
        bat: 0,
        res: 1
    },    
},
{
    id: 14,
    name: 'Resistances GZ Coils Eleaf',
    price: 14.50,
    desc: "Les résistances GZ de Eleaf sont conçues pour une vape en inhalation indirecte (MTL) pleine de saveurs.",
    category: 
    {
        ecig: 0,
        liquid: 0,
        clearo: 0,
        bat: 0,
        res: 1
    }, 
},
{
    id: 15,
    name: 'Resistances EZ Coils Eleaf',
    price: 12.75,
    desc: "Résistance EZ Coil de chez Joyetech. Ces résistances EZ Coil sont composées de Mesh pour des saveurs intenses et une bonne production de vapeur.",
    category: 
    {
        ecig: 0,
        liquid: 0,
        clearo: 0,
        bat: 0,
        res: 1
    }, 
},
{
    id: 16,
    name: 'Resistances TFV9 Smok',
    price: 13.90,
    desc: "Les résistances TFV9 sont conçues pour le clearomiseur TFV9 de chez Smok. Elles sont composées de Mesh et de coton pour un excellent rendu des saveurs et une grande longévité.",
    category: 
    {
        ecig: 0,
        liquid: 0,
        clearo: 0,
        bat: 0,
        res: 1
    }, 
},
{
    id: 17,
    name: 'Box Falcon Testalcigs',
    price: 24.90,
    desc: "La box Falcons de Teslacigs est un mod électronique à batterie intégrée d'une légèreté surprenante. Fabriquée en PC et ABS, elle ne pèse que 70 g.",
    category: 
    {
        ecig: 0,
        liquid: 0,
        clearo: 0,
        bat: 1,
        res: 0
    }, 
},
{
    id: 18,
    name: 'Box Coolfire z50',
    price: 36.90,
    desc: "La box Coolfire Z50 de Innokin est un mod électronique compact et léger. Elle intègre une bonne batterie de 2100 mAh, rechargeable par micro-USB, qui offre une excellente autonomie.",
    category: 
    {
        ecig: 0,
        liquid: 0,
        clearo: 0,
        bat: 1,
        res: 0
    }, 
},
{
    id: 19,
    name: 'Box GTX One Vaporesso',
    price: 27.90,
    desc: "La box Coolfire Z50 de Innokin est un mod électronique compact et léger. Elle intègre une bonne batterie de 2100 mAh, rechargeable par micro-USB, qui offre une excellente autonomie.",
    category: 
    {
        ecig: 0,
        liquid: 0,
        clearo: 0,
        bat: 1,
        res: 0
    }, 
},
{
    id: 20,
    name: 'Box Spinner 3 Vision',
    price: 20.50,
    desc: "La célèbre batterie Spinner de Vision est de retour avec le modèle Spinner 3 VV.",
    category: 
    {
        ecig: 0,
        liquid: 0,
        clearo: 0,
        bat: 1,
        res: 0
    }, 
}, 
];

for(let i=0; i<products.length; i++) {
        $( ".sort-by" ).after(function() {
            return `<div class="item">
            <img class="pic" src="` + products[i].img + `" alt="image produit">
            <p class="item-name">` + products[i].name + `</p>
            <p class="price">` + products[i].price +  `€</p>
            <p class="desc">` + products[i].desc + `
            </p>
            <div class="manage-cart">
                <div class="plus-minus">
                    <a rel="nofollow" class="button del-article" href="#">-</a>
                    <p class="amount">1</p>
                    <a rel="nofollow" class="button add-article" href="#">+</a>
                </div>
                <div class="add-to-cart">
                    <a rel="nofollow" class="cart-add" href="#">Ajouter au panier<img
                            src="assets/img/add-to-basket.svg" alt=""></a>
                </div>
            </div>
        </div>`
          });
}

// showProducts();

// console.log(products[19].category.bat);

});