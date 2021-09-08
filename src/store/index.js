import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            pages:[
                { id: "m1", 
                image:"https://photo980x880.mnstatic.com/807bafdaeed88061afc72505c7eb173f/puerta-de-brandeburgo-3013021.jpg",
                title: "This is view 1",
                description: "I don´t know what I´m doing",
                },
                { id: "m2", 
                image:"https://www.passporthealthglobal.com/wp-content/uploads/2018/07/7-cosas-que-hacer-en-belgica.jpg",
                title: "This is view 2",
                description: "I don´t know what I´m doing x2",
                },
                { id: "m3", 
                image:"https://www.lifeder.com/wp-content/uploads/2017/08/Hallstatt-Austria-lifeder-min-1024x679.jpg",
                title: "This is view 3",
                description: "I don´t know what I´m doing x3",
                },
                { id: "m4", 
                image:"https://www.costacruceros.com/content/dam/costa/inventory-assets/countries/FIN/FIN.jpg.image.750.563.low.jpg",
                title: "This is view 1",
                description: "I don´t know what I´m doing",
                },
            ],
        };
    },
    getters: {
        pages(state){
            return state.pages;

        },
        page(state){
          return (pageId) => {
              return state.pages.find(page => page.id === pageId);
          }; 
        }
    }
});

export default store;