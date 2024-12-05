new Vue({
    el: '#app',
    data: {
        meal: {}
    },
    created() {
        const urlParams = new URLSearchParams(window.location.search);
        const mealId = urlParams.get('mealId');
        this.fetchMealDetails(mealId);
    },
    methods: {
        fetchMealDetails(mealId) {
            // Simuler une requête pour obtenir les détails du plat
            const meals = [
                { id: 1, name: 'Burger Classique', image: 'images/burger-classique.jpg', description: 'Un burger classique avec du fromage.', price: 8.50 },
                { id: 2, name: 'Salade César', image: 'images/salade-cesar.jpg', description: 'Une salade fraîche avec du poulet grillé.', price: 7.00 },
                { id: 3, name: 'Tarte au Chocolat', image: 'images/tarte-chocolat.jpg', description: 'Une délicieuse tarte au chocolat.', price: 4.50 }
            ];
            this.meal = meals.find(meal => meal.id == mealId);
        },
        goBack() {
            window.history.back();
        }
    }
});
