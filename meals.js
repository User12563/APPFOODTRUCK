new Vue({
    el: '#app',
    data: {
        meals: [
            { id: 1, name: 'Burger Classique', image: 'images/burger-classique.jpg', description: 'Un burger classique avec du fromage.', price: 8.50 },
            { id: 2, name: 'Salade César', image: 'images/salade-cesar.jpg', description: 'Une salade fraîche avec du poulet grillé.', price: 7.00 },
            { id: 3, name: 'Tarte au Chocolat', image: 'images/tarte-chocolat.jpg', description: 'Une délicieuse tarte au chocolat.', price: 4.50 }
        ]
    },
    methods: {
        goToMealDetails(mealId) {
            window.location.href = 'meal-details.html?mealId=' + mealId;
        },
        goBack() {
            window.history.back();
        }
    }
});
