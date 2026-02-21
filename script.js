document.addEventListener('DOMContentLoaded', function () {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#2c2c2e');
    tg.setBackgroundColor('#1c1c1d');

  // --- CONFIGURATION DES LIENS DE CONTACT (HUNTERCOFFEE) ---
  const contactLinks = [
{ name: 'CANAL TELEGRAM 📢', url: 'https://t.me/+-kF6ekclQm1hMDU0', id: 'canal-tg', className: 'telegram-canal', text: "CANAL TELEGRAM 📢" },   
    { name: 'POTATO 🥔', url: 'https://tutuduanyu.org/huntercoffee9', id: 'potato', className: 'potato', text: "POTATO 🥔" },
    { name: 'INSTAGRAM 📸', url: 'https://www.instagram.com/huntercoffee75', id: 'instagram', className: 'instagram', text: "INSTAGRAM 📸" },
    { name: 'SIGNAL 🔵', url: 'https://signal.me/#eu/puN7l3zYNYtnkz4o41JmFDF02vNe2oyEZqAjGgjhKcjKL2nB5DdHCIXx9zDSahM7', id: 'signal', className: 'signal', text: "SIGNAL 🔵" },
    { name: 'LUFFA 🛡️', url: 'https://callup.luffa.im/c/62jB555fybc', id: 'luffa', className: 'luffa', text: "LUFFA 🛡️" },
    { name: 'SNAPCHAT 🟡', url: 'https://www.snapchat.com/add/huntercoffe?share_id=I_VdPziMCb8&locale=fr-FR', id: 'snapchat', className: 'snapchat', text: "SNAPCHAT 🟡" },
    { name: 'WHATSAPP 🟢', url: 'https://wa.me/33746565751', id: 'whatsapp', className: 'whatsapp', text: "WHATSAPP 🟢" },
    { name: 'LINKTREE 🌳', url: 'https://linktr.ee/Huntercoffee75', id: 'linktree', className: 'linktree', text: "LINKTREE 🌳" },
    { name: 'GEMSPACE 💎', url: 'https://links.gemspace.com/join/120076e874db1be75d763edb7f980a5a', id: 'gemspace', className: 'gemspace', text: "GEMSPACE 💎" }
];

 // --- DONNÉES HUNTERCOFFEE ---
 const appData = [
    {
        id: 'HASH',
        name: '🍫 HASH',
        type: 'Hash',
        quality: '🍫 HASH',
        image: 'CategHash.jpg', 
        farms: [
            {
                id: 'MOUSS',
                name: 'MOUSSEUX 🍯',
                badgeText: 'Classic Sift',
                products: [
                    /* {
                        id: 'mouss-standard',
                        name: 'Jaune Mousseux',
                        flag: '🇲🇦',
                        farm: 'HUNTER SELECTION',
                        promoEligible: true,
                        type: 'Hash',
                        image: 'ProductDry.jpg',
                        description: 'Texture parfaite, facile à effriter.',
                        tarifs: [{ weight: '10g', price: 40.00 }, { weight: '20g', price: 75.00 }]
                    } */
                ]
            },
            {
                id: 'FROZEN',
                name: 'FROZEN 🧊',
                badgeText: 'Fresh Frozen Tech',
                products: [
                    {
                        id: 'frozen-gmo-marocain',
                        name: '🌿 GMO – Marocain',
                        flag: '🇲🇦',
                        farm: '🏹 HUNTER SELECTION',
                        promoEligible: true,
                        type: 'Hash',
                        image: 'ProductGmo.jpg',
                        video: 'VideoGmo.mov',
                        description: 'Un concentré issu de fleurs GMO travaillées en fresh frozen, pour préserver au maximum les terpènes et la puissance aromatique.\nRésultat : un produit riche, expressif et ultra savoureux.\n\n👃 Arômes\nDès l’ouverture, c’est intense et profond :\n🧄 Notes aillées / funky typiques de la GMO\n🌍 Fond terreux et légèrement épicé\n🌲 Pointe résineuse bien marquée\n🍪 Subtile touche sucrée en arrière-plan\n\nProfil terpène puissant, qui reste longtemps en bouche.\n\n👁 Aspect\n• Texture compacte et résineuse\n• Couleur brune à dorée selon la méthode\n• Surface légèrement brillante\n• Odeur forte et caractéristique\n\nOn sent le travail sur la matière première, surtout avec le procédé fresh frozen qui conserve les arômes.\n\n💨 Effets\n⚡ Montée cérébrale marquée\n😌 Relaxation corporelle progressive\n🌙 Idéal en fin de journée\n\nPuissant, enveloppant, avec un vrai caractère.',
                        tarifs: [
                            { weight: '5g', price: 60.00 },
                            { weight: '10g', price: 110.00 },
                            { weight: '20g', price: 200.00 },
                            { weight: '50g', price: 400.00 },
                            { weight: '100g', price: 700.00 }
                        ]
                    },
                    {
                        id: 'grap-gaz-frozen-premium',
                        name: '🍇GRAP GAZ⛽️X BLEU PINT🫐',
                        flag: '🇲🇦',
                        farm: 'INTHEWEST FARM',
                        promoEligible: true,
                        type: 'Hash',
                        image: 'ProductGrap.jpg',
                        video: 'VideoGrap.mov',
                        description: 'Un produit marocain haut de gamme, travaillé avec soin et précision.\nFrozen Premium incarne la nouvelle génération : pureté, puissance et finition premium.\n\n🧊 Profil frais & clean\nNotes glacées, légèrement sucrées, avec une touche résineuse intense.\nUne fumée douce, épaisse et parfaitement maîtrisée.\n\n💎 Qualité Premium – In The West Farm\nAspect givré, texture compacte, travail soigné et sélection rigoureuse.\n\n🔥 Effet profond & chill\nRelaxation intense, vibes posées, idéal pour décrocher et profiter du moment.\n\nFrozen Premium\n👉 Fraîcheur extrême\n👉 Savoir-faire marocain 🇲🇦\n👉 Niveau premium garanti',
                        tarifs: [
                            { weight: '5g', price: 80.00 },
                            { weight: '10g', price: 150.00 },
                            { weight: '20g', price: 290.00 },
                            { weight: '30g', price: 420.00 },
                            { weight: '50g', price: 550.00 }
                        ]
                    }
                ]
            },
            {
                id: 'STATIC',
                name: 'STATIC ⚡️',
                badgeText: 'High Voltage',
                products: [
                    {
                        id: 'white-truffle-calitefarm',
                        name: '🍄 White Truffle 🍄',
                        flag: '🇺🇸',
                        farm: '👨🏻‍🌾 CALITEFARM',
                        promoEligible: true,
                        type: 'Weed',
                        image: 'ProductTruf.png',
                        video: 'VideoTruf.mov',
                        description: 'White Truffle, c’est l’élégance brute. Une strain riche, crémeuse et profondément terreuse, avec un profil aromatique sophistiqué qui marque dès la première ouverture.\n\n👃 Arômes\nÀ l’ouverture, c’est intense et raffiné :\n🍄 Notes terreuses profondes\n🧄 Légère touche aillée / funky\n🌰 Fond crémeux et légèrement sucré\n🌲 Subtil côté boisé\n\nUn mélange complexe, presque gastronomique — ça ne ressemble pas aux variétés classiques.\n\n👁 Aspect\n• Têtes très denses et compactes\n• Couleur vert foncé avec nuances violettes possibles\n• Pistils orangés bien présents\n• Couche épaisse de trichomes blancs → effet “givré”\n\nVisuellement, c’est premium. Résine abondante, texture collante.\n\n💨 Effets\nWhite Truffle, c’est :\n😌 Relaxation corporelle profonde\n🧠 Sensation mentale apaisée mais lucide\n🌙 Parfaite pour fin de journée / soirée chill\n\nPuissante mais équilibrée. Elle enveloppe sans écraser.',
                        tarifs: [
                            { weight: '1g', price: 50.00 },
                            { weight: '5g', price: 160.00 },
                            { weight: '10g', price: 310.00 },
                            { weight: '20g', price: 600.00 },
                            { weight: '30g', price: 850.00 },
                            { weight: '50g', price: 1100.00 }
                        ]
                    },
                    {
                        id: 'sour-cake-calitefarm',
                        name: '🧁 Sour Cake 🧁',
                        flag: '🇺🇸',
                        farm: '👨🏻‍🌾 CALITEFARM',
                        promoEligible: true,
                        type: 'Weed',
                        image: 'ProductSour.png',
                        video: 'VideoSour.mov',
                        description: 'Sour Cake, c’est la rencontre explosive entre une acidité citronnée ultra vive et une douceur pâtissière crémeuse.\nUne variété qui tape direct au nez avant même d’avoir ouvert le pochon.\n\n👃 Arômes\nDès l’ouverture, ça claque :\n🍋 Notes citronnées et diesel légèrement piquantes\n🍰 Fond sucré type gâteau vanillé\n🌲 Petite touche terreuse qui équilibre le tout\n\nUn profil terpène puissant, complexe, qui reste longtemps en bouche.\n\n👁 Aspect\n• Têtes compactes et résineuses\n• Trichomes bien givrés\n• Reflets verts clairs avec parfois des nuances orangées\n• Manucure propre, dense et brillante\n\nVisuellement, c’est lourd. Ça annonce la couleur direct.\n\n💨 Effets\nSour Cake offre un high progressif :\n⚡ Boost mental énergisant au départ\n😌 Puis une détente corporelle maîtrisée\n🎯 Idéal pour chiller, créer ou profiter entre amis\n\nNi trop assommante, ni trop speed — un équilibre bien dosé.',
                        tarifs: [
                            { weight: '1g', price: 50.00 },
                            { weight: '5g', price: 160.00 },
                            { weight: '10g', price: 310.00 },
                            { weight: '20g', price: 600.00 },
                            { weight: '30g', price: 850.00 },
                            { weight: '50g', price: 1100.00 }
                        ]
                    },
                    {
                        id: 'static-shift-us',
                        name: '🍓 Fruty 🍒',
                        flag: '🇺🇸',
                        farm: '👨🏻‍🌾 CALITEFARM',
                        promoEligible: true,
                        type: 'Static',
                        image: 'ProductSt1.png',
                        video: 'VideoSt.mov',
                        description: 'Prépare-toi à un véritable choc fruité venu de Californie.\nUne strain US premium qui frappe fort dès la première odeur.\n\n🍓 Profil ultra fruity\nFruits rouges sucrés, notes bonbon acidulées, fumée douce et gourmande.\n\n💎 Qualité Calitefarm\nTêtes denses, résineuses, manucure clean, finition premium.\n\n🔥 Effet équilibré & puissant\nUplift, détente et vibes positives garanties.',                        tarifs: [
                            { weight: '1g', price: 50.00 },
                            { weight: '5g', price: 160.00 },
                            { weight: '10g', price: 310.00 },
                            { weight: '20g', price: 600.00 },
                            { weight: '30g', price: 850.00 },
                            { weight: '50g', price: 1100.00 }
                        ]
                    }
                ]
            },
            {
                id: 'STATICUsa',
                name: 'STATIC USA 🇺🇸',
                badgeText: 'High Voltage',
                products: [
                   
                ]
            }
        ]
    },
    {
        id: 'WEED',
        name: '🍀 WEED',
        type: 'Weed',
        quality: '🍀 WEED',
        image: 'CategWeed.jpg',
        farms: [
            {
                id: 'CALI_US',
                name: '🇺🇸 CALI U.S',
                badgeText: 'Import USA',
                products: [
                   /*  {
                        id: 'cali-us-1',
                        name: 'Blueberry Zkittlez',
                        flag: '🇺🇸',
                        farm: 'USA IMPORT',
                        promoEligible: true,
                        type: 'Weed',
                        image: 'ProductCali.jpg',
                        description: 'Le vrai goût de Californie.',
                        tarifs: [{ weight: '3.5g', price: 60.00 }, { weight: '7g', price: 110.00 }]
                    } */
                ]
            },
            {
                id: 'CALI_CAN',
                name: '🇨🇦 CALI CANADIENNE',
                badgeText: 'Canada Grade A',
                products: [
                   /*  {
                        id: 'cali-can-1',
                        name: 'Pink Kush',
                        flag: '🇨🇦',
                        farm: 'CANADIAN CRAFT',
                        promoEligible: true,
                        type: 'Weed',
                        image: 'ProductCali.jpg',
                        description: 'Qualité canadienne supérieure.',
                        tarifs: [{ weight: '5g', price: 50.00 }, { weight: '10g', price: 90.00 }]
                    } */
                ]
            }
        ]
    }
];
       /*  // ===================================
        // 3. EXTRACT (Direct Produits)
        // ===================================
        {
            id: 'EXTRACT',
            name: '🍯 EXTRACT',
            type: 'Extract',
            quality: '🍯 EXTRACT',
            image: 'CategExtra.png',
            // Pas de "farms", on met direct "products"
            products: [
                {
                    id: 'live-rosin',
                    name: 'Live Rosin 90u',
                    flag: '🧬',
                    farm: 'LABORATORY',
                    promoEligible: false,
                    type: 'Extract',
                    image: 'ProductRosin.jpg',
                    video: '',
                    description: 'Extraction sans solvant.',
                    tarifs: [
                        { weight: '1g', price: 60.00 },
                        { weight: '2g', price: 110.00 }
                    ]
                }
            ]
        },

        // ===================================
        // 4. EDIBLES (Direct Produits)
        // ===================================
        {
            id: 'EDIBLES',
            name: '🍬 EDIBLES',
            type: 'Edibles',
            quality: '🍬 EDIBLES',
            image: 'CategEdib.png',
            products: [
                {
                    id: 'gummies',
                    name: 'Gummies THC',
                    flag: '🍬',
                    farm: 'KITCHEN',
                    promoEligible: true,
                    type: 'Edibles',
                    image: 'ProductGummies.jpg',
                    video: '',
                    description: 'Paquet de 10x 50mg.',
                    tarifs: [
                        { weight: '1 Pqt', price: 25.00 },
                        { weight: '2 Pqt', price: 45.00 }
                    ]
                }
            ]
        } */
   

    // --- VARIABLES D'ÉTAT ---
    let cart = [];
    let currentFilters = { searchTerm: '', quality: 'all', farm: 'all' };
    
    // NAVIGATION ETAT (Logique Pistachio)
    let currentView = 'categories'; // 'categories', 'farms' (sous-cat), 'simple_products' (direct), 'products' (via farm)
    let currentCategoryId = null;
    let currentFarmId = null;
    let appliedPromo = null;
    let paymentMethod = 'Espèce';

    const validPromoCodes = {
        "ACTUPLUG33": { type: 'fixed', value: 10, appliesTo: 'eligible', cumulative: false }
    };

    // --- SÉLECTEURS ---
    const pages = document.querySelectorAll('.page');
    const productListContainer = document.getElementById('product-list');
    const filterContainer = document.querySelector('.filters');
    const searchFilterWrapper = document.getElementById('search-filter').parentElement;
    const qualityFilterWrapper = document.getElementById('quality-filter').parentElement;
    const farmFilterWrapper = document.getElementById('farm-filter').parentElement;

    function getProductById(productId) {
        for (const category of appData) {
            if (category.products) {
                const product = category.products.find(p => p.id === productId);
                if (product) return product;
            }
            if (category.farms) {
                for (const farm of category.farms) {
                    const product = farm.products.find(p => p.id === productId);
                    if (product) return product;
                }
            }
        }
        return undefined;
    }

    function showPage(pageId) {
        pages.forEach(p => p.classList.remove('active'));
        const page = document.getElementById(pageId);
        if (page) page.classList.add('active');

        const homeNav = document.getElementById('nav-menu');
        const infoNav = document.getElementById('nav-info');
        const contactNav = document.getElementById('nav-contact');

        if(homeNav) homeNav.classList.remove('active');
        if(infoNav) infoNav.classList.remove('active');
        if(contactNav) contactNav.classList.remove('active');

        if (pageId === 'page-contact') contactNav.classList.add('active');
        else if (pageId === 'page-info') infoNav.classList.add('active');
        else homeNav.classList.add('active');
    }

    // --- RENDER HOME (Logique Pistachio adaptée) ---
    function renderHomePage() {
        filterContainer.style.display = 'flex';

        // Nettoyage boutons retour
        const existingBackBtnCat = filterContainer.querySelector('.back-to-categories-btn');
        if (existingBackBtnCat) existingBackBtnCat.remove();
        const existingBackBtnFarm = filterContainer.querySelector('.back-to-farms-btn');
        if (existingBackBtnFarm) existingBackBtnFarm.remove();

        // 1. Vue CATÉGORIES (Racine)
        if (currentView === 'categories') {
            renderCategoryList();
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'flex';
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';

        // 2. Vue SOUS-CATÉGORIES (Liste Farms)
        } else if (currentView === 'farms') {
            renderFarmList(currentCategoryId); // Affiche la liste Frozen/Static...
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'none';
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)'; // Liste verticale

            // Bouton Retour
            const category = appData.find(c => c.id === currentCategoryId);
            createBackButton('back-to-categories-btn', category.name);

        // 3. Vue PRODUITS DIRECTS (ex: Edibles)
        } else if (currentView === 'simple_products') {
            renderProductListSimple(currentCategoryId);
            searchFilterWrapper.style.display = 'flex';
            farmFilterWrapper.style.display = 'flex';
            qualityFilterWrapper.style.display = 'none';
            productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';

            const category = appData.find(c => c.id === currentCategoryId);
            createBackButton('back-to-categories-btn', category.name);

        // 4. Vue PRODUITS VIA SOUS-CAT (ex: Hash -> Frozen -> Produits)
        } else if (currentView === 'products') {
            renderProductList(currentCategoryId, currentFarmId);
            searchFilterWrapper.style.display = 'flex';
            farmFilterWrapper.style.display = 'flex';
            qualityFilterWrapper.style.display = 'none';
            productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';

            const category = appData.find(c => c.id === currentCategoryId);
            const farm = category.farms.find(f => f.id === currentFarmId);
            createBackButton('back-to-farms-btn', farm.name);
        }
    }

    function createBackButton(className, text) {
        const backButton = document.createElement('button');
        backButton.className = className;
        backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${text}`;
        // Style inline pour correspondre à ton design
        backButton.style.cssText = `
            background: linear-gradient(180deg, black, transparent); 
            border-bottom: 2px solid #7dc0ff;
            border-top: none; border-left: none; border-right: none;
            color: white; padding: 10px 15px; 
            border-radius: 10px; font-size: 1.1rem; 
            font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh; font-family: Copperplate;
        `;
        filterContainer.prepend(backButton);
    }

   // --- MODIFIÉ : renderCategoryList (CORRIGÉ POUR LE SELECT) ---
   function renderCategoryList() {
    const filteredCategories = appData.filter(category => {
        // 1. Filtre Recherche (Barre de texte)
        const searchMatch = category.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
        
        // 2. Filtre Dropdown (Le Select "Qualité") - C'est cette ligne qui manquait !
        const qualityMatch = currentFilters.quality === 'all' || category.quality === currentFilters.quality;
        
        // On retourne VRAI seulement si les deux conditions sont remplies
        return searchMatch && qualityMatch;
    });

    productListContainer.innerHTML = '';
    
    if (filteredCategories.length === 0) {
        // Message si on filtre et qu'il n'y a rien
        productListContainer.innerHTML = '<p class="no-results" style="grid-column: 1/-1; text-align: center; padding: 20px; color: #888;">Aucune catégorie ne correspond.</p>';
        return;
    }

    filteredCategories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.dataset.categoryId = category.id;
        // On garde ton affichage image
        card.innerHTML = `<img src="${category.image}" alt="${category.name}">`;
        productListContainer.appendChild(card);
    });
}

    // --- RENDER SOUS-CATÉGORIES (LISTE STYLE PISTACHIO) ---
    function renderFarmList(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category) return;

        const farms = category.farms;
        productListContainer.style.gridTemplateColumns = '1fr'; // Liste verticale
        productListContainer.style.gap = '10px'; 
        productListContainer.innerHTML = '';

        farms.forEach(farm => {
            const btn = document.createElement('div');
            btn.className = 'farm-list-btn'; // Utilise le CSS ajouté
            btn.dataset.farmId = farm.id;

            const productCount = farm.products.length;
            const countText = productCount > 0 ? `${productCount} prod.` : '';

            btn.innerHTML = `
            <div class="farm-btn-left">
                <div class="farm-btn-info">
                    <span class="farm-btn-title">${farm.name}</span>
                    <span class="farm-btn-subtitle">${farm.badgeText || countText}</span>
                </div>
            </div>
            <div class="farm-btn-right">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6e6e73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </div>`;
            productListContainer.appendChild(btn);
        });
    }

    // RENDER PRODUITS DIRECTS (Pour Edibles)
    function renderProductListSimple(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category || !category.products) return;

        const filteredProducts = category.products.filter(product => {
            return product.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
        });

        productListContainer.innerHTML = '';
        renderProductCards(filteredProducts);
    }

    // RENDER PRODUITS VIA SOUS-CAT (Pour Hash/Weed)
    function renderProductList(categoryId, farmId) {
        const category = appData.find(c => c.id === categoryId);
        const farm = category.farms.find(f => f.id === farmId);
        if (!farm) return;

        const filteredProducts = farm.products.filter(product => {
            return product.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
        });

        productListContainer.innerHTML = '';
        renderProductCards(filteredProducts);
    }

    // Helper pour générer les cartes produits
    function renderProductCards(products) {
        if (products.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucun produit trouvé.</p>';
            return;
        }
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card product-item-card';
            card.dataset.productId = product.id;

            let flagHTML = product.flag ? `<span class="product-flag">${product.flag}</span>` : '';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="info">
                    <div class="name">${product.name} ${flagHTML}</div>
                    <div class="farm">${product.farm}</div>
                    <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
                </div>`;
            productListContainer.appendChild(card);
        });
    }

    // --- PAGE PRODUIT ---
    function renderProductPage(productId) {
        const product = getProductById(productId);
        if (!product) return;

        const videoElement = document.querySelector('#page-product .product-video');
        if(videoElement) {
             videoElement.src = product.video || '';
             videoElement.poster = product.image;
        }

        document.getElementById('product-page-title').innerText = product.name;
        const detailsContainer = document.getElementById('product-details-content');

        let tarifsHTML = product.tarifs.map(tarif => `
        <div class="tarif-item">
            <div class="box-tarif">
                <div class="tarif-wieght">${tarif.weight}</div>
                <div class="tarif-price">${tarif.price.toFixed(2)}€</div>
            </div>
            <button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}">
                <svg width="20" height="20"><use href="#icon-cart"/></svg>
            </button>
        </div>`).join('');

       // --- DANS TA FONCTION renderProductPage ---
detailsContainer.innerHTML = `
<div class="name">${product.name}</div>
<div class="farm">${product.farm}</div>
${product.description ? `<div class="product-description">${product.description}</div>` : ''} 
<h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
<div class="tarifs-grid-container">${tarifsHTML}</div>
`;
        showPage('page-product');
    }

    // --- PANIER & CONFIRMATION ---
    function renderCart() {
        const cartContainer = document.getElementById('cart-items-container');
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Votre panier est vide.</p>';
            document.getElementById('cart-total-price').innerText = '0.00€';
            updateCartCount();
            return;
        }
        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div class="name">${item.name}</div>
                    <div class="gram" >${item.weight} - ${item.unitPrice.toFixed(2)}€</div>
                    <div class="price">${item.totalPrice.toFixed(2)}€</div>
                </div>
                <div class="quantity-selector">
                    <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                </div>
            </div>`).join('');
        
        const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        document.getElementById('cart-total-price').innerText = `${total.toFixed(2)}€`;
        updateCartCount();
    }

    function renderConfirmation() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        let discount = 0;
        let discountableAmount = 0;

        if (appliedPromo) {
            const promo = validPromoCodes[appliedPromo];
            if (promo.appliesTo === 'eligible') {
                cart.forEach(item => {
                    const product = getProductById(item.productId);
                    if (product && product.promoEligible) discountableAmount += item.totalPrice;
                });
            } else {
                discountableAmount = subTotal;
            }
            if (promo.type === 'percent') discount = (discountableAmount * promo.value) / 100;
            else discount = promo.value;
        }
        if (discount > subTotal) discount = subTotal;
        const totalPrice = subTotal - discount;

        document.getElementById('confirmation-items-count').innerText = `${totalItems} article${totalItems > 1 ? 's' : ''}`;
        document.getElementById('confirmation-total-price').innerText = `${totalPrice.toFixed(2)}€`;

        const itemsList = document.getElementById('confirmation-items-list');
        itemsList.innerHTML = cart.map((item, index) => `
             <div class="cart-item" style="border-bottom:1px solid #333;">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div style="color:white; font-weight:bold;">${index + 1}. ${item.name}</div>
                    <div style="color:#aaa;">Qté: ${item.quantity}x ${item.weight}</div>
                    <div style="color:#aaa;">PU: ${item.unitPrice.toFixed(2)}€</div>
                </div>
            </div>`).join('');

        const promoInputContainer = document.getElementById('promo-input-container');
        const promoAppliedContainer = document.getElementById('promo-applied-container');
        if (appliedPromo) {
            promoInputContainer.style.display = 'none';
            promoAppliedContainer.style.display = 'flex';
            document.getElementById('promo-applied-text').innerText = `Code "${appliedPromo}" appliqué !`;
        } else {
            promoInputContainer.style.display = 'flex';
            promoAppliedContainer.style.display = 'none';
            document.getElementById('promo-code-input').value = '';
        }

        document.querySelectorAll('.payment-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.method === paymentMethod);
        });

        const summaryContainer = document.getElementById('confirmation-summary');
        let summaryHTML = `
            <div class="summary-line"><span>Sous-total:</span><span>${subTotal.toFixed(2)}€</span></div>
        `;
        if (discount > 0) {
            summaryHTML += `<div class="summary-line discount"><span>Réduction:</span><span>-${discount.toFixed(2)}€</span></div>`;
        }
        summaryHTML += `<div class="summary-line total"><span>💰 Total final:</span><span>${totalPrice.toFixed(2)}€</span></div>`;
        summaryContainer.innerHTML = summaryHTML;
        showPage('page-confirmation');
    }

    // --- ACTIONS DIVERSES ---
    function renderContactPage() {
        const linksContainer = document.getElementById('contact-links-container');
        linksContainer.innerHTML = contactLinks.map(link => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
            <svg width="24" height="24"><use href="${link.icon}"/></svg>
            <span>${link.text}</span>
        </a>`).join('');
    }

    function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(el => {
            el.innerText = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }

 // --- FILTRES (CORRIGÉ) ---
 function populateFilters() {
    const searchFilter = document.getElementById('search-filter');
    const qualityFilter = document.getElementById('quality-filter');
    const farmFilter = document.getElementById('farm-filter');

    // 1. On rassemble tous les produits pour trouver toutes les "Farms" existantes
    const allNestedProducts = [];
    appData.forEach(category => {
        if (category.farms) {
            // Si sous-catégories
            category.farms.forEach(subCat => allNestedProducts.push(...subCat.products));
        } else if (category.products) {
            // Si produits directs
            allNestedProducts.push(...category.products);
        }
    });

    // 2. Remplissage du SELECT "QUALITÉ" (Pour filtrer les Catégories sur l'accueil)
    // On récupère la propriété "quality" de chaque catégorie dans appData
    const categoryQualities = appData.map(c => c.quality).filter(Boolean); 
    // On enlève les doublons
    const qualities = ['all', ...new Set(categoryQualities)];

    if (qualityFilter) {
        qualityFilter.innerHTML = qualities.map(q => 
            `<option value="${q}">${q === 'all' ? '🔍 FILTRER CATÉGORIE' : q}</option>`
        ).join('');

        // Action quand on change la qualité
        qualityFilter.addEventListener('change', (e) => {
            currentFilters.quality = e.target.value;
            renderHomePage();
        });
    }

    // 3. Remplissage du SELECT "FARM" (Pour filtrer les Produits)
    const productFarms = allNestedProducts.map(p => p.farm).filter(Boolean);
    const farms = ['all', ...new Set(productFarms)];

    if (farmFilter) {
        farmFilter.innerHTML = farms.map(f => 
            `<option value="${f}">${f === 'all' ? '👨‍🌾 TOUTES les Farms' : f}</option>`
        ).join('');

        // Action quand on change la farm
        farmFilter.addEventListener('change', (e) => {
            currentFilters.farm = e.target.value;
            renderHomePage();
        });
    }

    // 4. Action de la barre de recherche
    if (searchFilter) {
        searchFilter.addEventListener('input', (e) => {
            currentFilters.searchTerm = e.target.value;
            renderHomePage();
        });
    }
}

    let notificationTimeout;
    function showNotification(message) {
        const notification = document.getElementById('notification-toast');
        if (!notification) return;
        clearTimeout(notificationTimeout);
        notification.classList.remove('show');
        void notification.offsetWidth;
        notification.innerText = message;
        notification.classList.add('show');
        notificationTimeout = setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    function addToCart(productId, weight, price) {
        const cartItemId = `${productId}-${weight}`;
        const existingItem = cart.find(item => item.id === cartItemId);
        const product = getProductById(productId);

        if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
        } else {
            cart.push({
                id: cartItemId,
                productId: productId,
                name: product.name,
                image: product.image,
                weight: weight,
                quantity: 1,
                unitPrice: price,
                totalPrice: price
            });
        }
        renderCart();
        tg.HapticFeedback.notificationOccurred('success');
        showNotification('✅ Produit ajouté au panier !');
    }

    function updateQuantity(cartItemId, action) {
        const item = cart.find(i => i.id === cartItemId);
        if (!item) return;
        if (action === 'increase') item.quantity++;
        else if (action === 'decrease') item.quantity--;

        if (item.quantity <= 0) cart = cart.filter(i => i.id !== cartItemId);
        else item.totalPrice = item.quantity * item.unitPrice;
        renderCart();
        if(document.getElementById('page-confirmation').classList.contains('active')) renderConfirmation();
    }

    function formatOrderMessage() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        let discount = 0;
        if (appliedPromo) {
            const promo = validPromoCodes[appliedPromo];
            let discountableAmount = 0;
            if (promo.appliesTo === 'eligible') {
                cart.forEach(item => {
                    const product = getProductById(item.productId);
                    if (product && product.promoEligible) discountableAmount += item.totalPrice;
                });
            } else {
                discountableAmount = subTotal;
            }
            if (promo.type === 'percent') discount = (discountableAmount * promo.value) / 100;
            else discount = promo.value;
        }
        if (discount > subTotal) discount = subTotal;
        const totalPrice = subTotal - discount;

        const date = new Date();
        const formattedDate = `${date.getDate()} ${date.toLocaleString('fr-FR', { month: 'long' })} ${date.getFullYear()} a ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;

        let message = "NOUVELLE COMMANDE\n\n====================\nRESUME:\n";
        message += `- ${totalItems} article${totalItems > 1 ? 's' : ''} commande\n`;
        message += `- Méthode de paiement: ${paymentMethod}\n====================\nDETAIL DES ARTICLES:\n`;
        cart.forEach((item) => {
            message += `\n- ${item.name}`;
            message += `\n  Quantite: ${item.quantity}x ${item.weight}`;
            message += `\n  Prix unitaire: ${item.unitPrice.toFixed(2)}e`;
            message += `\n  Sous-total: ${item.totalPrice.toFixed(2)} EUR`;
        });
        message += `\n\n====================\n\nSOUS-TOTAL: ${subTotal.toFixed(2)} EUR`;
        if (discount > 0) message += `\nREDUCTION (${appliedPromo}): -${discount.toFixed(2)} EUR`;
        message += `\nTOTAL FINAL: ${totalPrice.toFixed(2)} EUR`;
        message += " \n-LIVRAISON: A convenir\n \n-CONTACT: Merci de confirmer cette commande\n";
        message += ` \n-Commande passee le: ${formattedDate}\n`;
        return message;
    }

    // --- GESTION CLICK ---
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.dataset.page;
            if (!pageId) return;
            if (pageId === 'page-contact') renderContactPage();
            if (pageId === 'page-home') {
                currentView = 'categories';
                currentCategoryId = null;
                currentFarmId = null;
                currentFilters.searchTerm = '';
                document.getElementById('search-filter').value = '';
                renderHomePage();
            }
            showPage(pageId);
        });
    });

    document.body.addEventListener('click', function (e) {
        const target = e.target;

        if (target.closest('#copy-order-btn')) {
            const copyBtn = document.getElementById('copy-order-btn');
            const contactBtn = document.getElementById('confirm-order-button');
            copyBtn.classList.remove('main-action-btn');
            copyBtn.classList.add('secondary-action-btn');
            contactBtn.classList.remove('secondary-action-btn');
            contactBtn.classList.add('main-action-btn');
            contactBtn.disabled = false;
            return;
        }

        // 1. CLIC CATEGORIE
        const categoryCard = target.closest('.category-card');
        if (categoryCard) {
            const category = appData.find(c => c.id === categoryCard.dataset.categoryId);
            
            if (category.products) {
                // Si produits directs (Edibles, Extract)
                currentView = 'simple_products';
                currentCategoryId = category.id;
            } else if (category.farms) {
                // Si sous-catégories (Hash, Weed)
                currentView = 'farms';
                currentCategoryId = category.id;
            }
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // 2. CLIC FARM (Sous-Catégorie)
        const farmBtn = target.closest('.farm-list-btn');
        if (farmBtn) {
            currentView = 'products';
            currentFarmId = farmBtn.dataset.farmId;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // 3. RETOUR CATEGORIES
        if (target.closest('.back-to-categories-btn')) {
            currentView = 'categories';
            currentCategoryId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // 4. RETOUR FARMS
        if (target.closest('.back-to-farms-btn')) {
            currentView = 'farms';
            currentFarmId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // 5. PRODUITS / ACTIONS
        const productCard = target.closest('.product-item-card');
        if (productCard) {
            if (productCard.classList.contains('unclickable')) return;
            renderProductPage(productCard.dataset.productId);
            return;
        }

        if (target.closest('.accordion-header')) {
            const accordionItem = target.closest('.accordion-header').parentElement;
            document.querySelectorAll('#page-info .accordion-item.active').forEach(item => {
                if (item !== accordionItem) item.classList.remove('active');
            });
            accordionItem.classList.toggle('active');
            return;
        }

        if (target.closest('#apply-promo-btn')) {
            const input = document.getElementById('promo-code-input');
            const code = input.value.toUpperCase();
            if (validPromoCodes[code]) {
                appliedPromo = code;
                tg.HapticFeedback.notificationOccurred('success');
                showNotification('✅ Code promo appliqué !');
            } else {
                appliedPromo = null;
                tg.HapticFeedback.notificationOccurred('error');
                showNotification('❌ Code promo invalide.');
            }
            renderConfirmation();
        }

        if (target.closest('#remove-promo-btn')) {
            appliedPromo = null;
            showNotification('Code promo retiré.');
            renderConfirmation();
        }

        if (target.closest('.payment-btn')) {
            paymentMethod = target.closest('.payment-btn').dataset.method;
            document.querySelectorAll('.payment-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.method === paymentMethod);
            });
        }

        if (target.closest('.add-to-cart-btn')) {
            const btn = target.closest('.add-to-cart-btn');
            addToCart(btn.dataset.productId, btn.dataset.weight, parseFloat(btn.dataset.price));
        }

        if (target.closest('.quantity-btn')) {
            const btn = target.closest('.quantity-btn');
            updateQuantity(btn.dataset.id, btn.dataset.action);
        }

        if (target.closest('.close-button') || target.closest('#cart-continue-shopping') || target.closest('.back-button')) {
            showPage('page-home');
        }

        if (target.closest('#home-cart-button')) {
            renderCart();
            showPage('page-cart');
        }

        if (target.closest('#checkout-button')) {
            renderConfirmation();
        }

        if (target.closest('#confirmation-modify-order')) {
            showPage('page-cart');
        }

        if (target.closest('#confirm-order-button')) {
            // Ton numéro WhatsApp au format international (sans le + ni 00)
            const phoneNumber = '33746565751'; 
            
            let message = formatOrderMessage();
            
            // Nettoyage optionnel du message pour WhatsApp
            message = message.replace(/\*/g, '');
            
            const encodedMessage = encodeURIComponent(message);
            
            // Construction de l'URL WhatsApp
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
            // Ouverture du lien via l'API Telegram WebApp
            tg.openLink(whatsappUrl);
        }
    });

    function init() {
        setTimeout(() => {
            populateFilters();
            renderHomePage();
            updateCartCount();
            showPage('page-home');
        }, 1500);
    }

    init();
});