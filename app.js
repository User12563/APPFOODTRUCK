new Vue({
    el: '#app',
    data: {
        categories: [
            { name: 'Burgers' },
            { name: 'Salades' },
            { name: 'Desserts' },
            { name: 'Boissons' }
        ]
    },
    methods: {
        goToMeals(category) {
            window.location.href = 'meals.html?category=' + category;
        }
    }
});
