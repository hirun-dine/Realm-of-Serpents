/* ==================================================================== */
/* Charadex
=======================================================================  /

  The charadex namespace. You can use it if you like, but this should
  prevent charadex from messing with any other imported code.
    
======================================================================= */
let charadex = {};

/* ==================================================================== */
/* Site
/* If you don't want to hard code your site information, you
/* can fill this out instead
/* Any preview links will still show Charadex's information
/* ==================================================================== */
charadex.site = {
  title: "Realm of Serpents",
  url: "https://hirun-dine.github.io/Realm-of-Serpents",
  description: `A directory for RoS characters and NPCs.`
}

/* ==================================================================== */
/* Sheet Config
/* Your sheet configuration
/* ==================================================================== */
charadex.sheet = {

  id: "1J4IwEUY9XuSoqdIOywHPc9yk4q0urmEisJc6fe_8kZ4",

  pages: {
    masterlist:    "masterlist",
    badges: "badges",
    inventory:     "inventory",
    inventoryLog:  "inventory log",
    items:         "items",
    craftables:        "craftables",
    pets:       "pets",
    abilities:           "abilities",
    staff:         "mods",
    slots:         "slots",
    venues:         "venues",
  },

  options: {

    designTypes: ['All', 'Dragon', 'Familiar', 'Human', 'Other'],
    statuses: ['All', 'Resell', 'Trade', 'Gift', 'Voided', 'For Sale', 'Purchased'],
    rarity: ['All', 'Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary'],
    species: ['All', 'Story', 'Collectors', 'NPC'],
    itemTypes: ['All', 'Weapon', 'Shield', 'Armour', 'Clothing', 'Consumable', 'Accessory', 'Misc'],
    traitTypes: ['All', 'Equipment', 'Potions', 'Enchantments'],
    effectType: ['All', 'Restorative', 'Boon', 'Debuff', 'Defensive', 'Offensive', 'Subterfuge', 'Utility', 'Cosmetic', 'Misc'],
    venueType: ['All', 'Delve', 'Fest']
  }

}


/* ==================================================================== */
/* Page configuration
/* ==================================================================== */
charadex.page = {};


/* Item Catalogue
/* --------------------------------------------------------------- */
charadex.page.items = {

  sheetPage: charadex.sheet.pages.items,
  sitePage: 'items',
  dexSelector: 'charadex',
  profileProperty: 'item',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: true,
    parameters: {
      'Type': charadex.sheet.options.itemTypes,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Type',
    parameters: charadex.sheet.options.itemTypes,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Item', 'User', 'Owner', 'Enchantment']
  },

  prevNext: {
    toggle: true,
  },

};


/* Crafting Codex
/* --------------------------------------------------------------- */
charadex.page.craftables = {

  sheetPage: charadex.sheet.pages.craftables,
  sitePage: 'craftables',
  dexSelector: 'charadex',
  profileProperty: 'craftable',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: true,
    parameters: {
      'Type': charadex.sheet.options.traitTypes,
      'Function': charadex.sheet.options.effectType,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Type',
    parameters: charadex.sheet.options.traitTypes,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Craftable', 'Recipe']
  },

  prevNext: {
    toggle: true,
  },

};


/* Pets
/* --------------------------------------------------------------- */
charadex.page.pets = {

  sheetPage: charadex.sheet.pages.pets,
  sitePage: 'pets',
  dexSelector: 'charadex',
  profileProperty: 'title',

  sort: {
    toggle: true,
    key: "enddate",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Title']
  },

  prevNext: {
    toggle: true,
  },

};

/* Slots
/* --------------------------------------------------------------- */
charadex.page.slots = {

  sheetPage: charadex.sheet.pages.slots,
  sitePage: 'slots',
  dexSelector: 'charadex',
  profileProperty: 'title',

  sort: {
    toggle: true,
    key: "enddate",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Title']
  },

  prevNext: {
    toggle: true,
  },

};



/* Activity venues
/* --------------------------------------------------------------- */
charadex.page.venues = {

  sheetPage: charadex.sheet.pages.venues,
  sitePage: 'venues',
  dexSelector: 'charadex',
  profileProperty: 'title',

  sort: {
    toggle: true,
    key: "enddate",
    order: "desc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },


  filters: {
    toggle: false,
    parameters: {
      'Activity': charadex.sheet.options.venueType,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Type',
    parameters: charadex.sheet.options.venueType,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['Title','Region','Rewards Table']
  },

  prevNext: {
    toggle: true,
  },

};


/* Staff
/* --------------------------------------------------------------- */
charadex.page.staff = {

  sheetPage: charadex.sheet.pages.staff,
  sitePage: 'inventories',
  dexSelector: 'charadex',
  profileProperty: 'username',

  sort: {
    toggle: false,
    key: "username",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: false,
    bottomToggle: false,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Username']
  },

  prevNext: {
    toggle: false,
  },

};


/* abilities
/* --------------------------------------------------------------- */
charadex.page.abilities = {

  sheetPage: charadex.sheet.pages.abilities,
  sitePage: 'abilities',
  dexSelector: 'charadex',
  profileProperty: 'ability',

  sort: {
    toggle: false,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Ability', 'Description', 'Tags']
  },

  prevNext: {
    toggle: true,
  },

}



/* Masterlist
/* --------------------------------------------------------------- */
charadex.page.masterlist = {

  sheetPage: charadex.sheet.pages.masterlist,
  sitePage: 'masterlist',
  dexSelector: 'charadex',
  profileProperty: 'charactername',

  sort: {
    toggle: true,
    key: "id",
    order: "desc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: true,
    parameters: {
      'Design Type': charadex.sheet.options.designTypes,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Species',
    parameters: charadex.sheet.options.species,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Owner', 'Designer', 'Artist', 'Traits', 'Full Name', 'Ethnicity or Type', 'Location', 'Romance Finder', 'Friend Finder', 'Family Finder', 'Rivals Finder']
  },

  prevNext: {
    toggle: true,
  },

  relatedData: {

    [charadex.sheet.pages.badges]: {

      sheetPage: charadex.sheet.pages.badges,
      primaryProperty: 'id',
      relatedProperty: 'id',
      dexSelector: 'log',
      profileProperty: 'design',
      profileToggle: false,

      sort: {
        toggle: true,
        key: "timestamp",
        order: "desc",
        parameters: []
      },

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 12,
      },

    }

  }

};

/* Inventory
/* --------------------------------------------------------------- */
charadex.page.inventory = {

  // Dex Set Up
  sheetPage: charadex.sheet.pages.inventory,
  sitePage: 'inventories',
  dexSelector: 'charadex',
  profileProperty: 'username',

  // Dex Options
  sort: {
    toggle: true,
    key: "username",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: false,
    parameters: {}
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Username']
  },

  prevNext: {
    toggle: false,
  },


  // Related Data
  relatedData: {

    [charadex.sheet.pages.inventoryLog]: {

      sheetPage: charadex.sheet.pages.inventoryLog,
      sitePage: 'inventories',
      primaryProperty: 'username',
      relatedProperty: 'username',
      dexSelector: 'log',
      profileProperty: 'id',
      profileToggle: false,

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 12,
      },

    },
    

    [charadex.sheet.pages.masterlist]: {

      // This imports the config from the masterlist
      // So you dont have to repeat yourself
      ...charadex.page.masterlist, 

      sheetPage: charadex.sheet.pages.masterlist,
      sitePage: 'masterlist',
      primaryProperty: 'username',
      relatedProperty: 'owner',
      dexSelector: 'designs',
      profileProperty: 'design',
      profileToggle: false,

    }

  },

  
  // This is a special config for their inventory
  inventoryConfig: {

    sheetPage: charadex.sheet.pages.items,
    sitePage: 'items',
    dexSelector: 'inventory',
    profileProperty: 'item',
    profileToggle: false,

    sort: {
      toggle: true,
      sortProperty: "item",
      order: "asc",
      parametersKey: 'type', 
      parameters: charadex.sheet.options.itemTypes
    },

    search: {
      toggle: true,
      filterToggle: false,
      parameters: ['Item']
    },

    filters: {
      toggle: true,
      parameters: {
        'Type': charadex.sheet.options.itemTypes,
        'Rarity': charadex.sheet.options.rarity,
      }
    },

  }

};


/* Index
/* --------------------------------------------------------------- */
charadex.page.index = {

  pets: {
    ... charadex.page.pets,
    dexSelector: 'pets',
    amount: 3,
  },

  staff: {
    ... charadex.page.staff,
    dexSelector: 'staff',
    amount: 6,
  },

  designs: {
    ... charadex.page.masterlist,
    dexSelector: 'design',
    amount: 4,
  }

};


export { charadex };
