new Vue({
	el: "#app",
	data: {
		categories: [
			{
				name: "Entrées",
				image:
					"https://images.pexels.com/photos/3338537/pexels-photo-3338537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
			},
			{
				name: "Plats",
				image:
					"https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
			},
			{
				name: "Desserts",
				image:
					"https://images.unsplash.com/photo-1553739340-4043e61e457a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fGphcGFuJTIwZGVzc2VydHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
			},
			{
				name: "Boissons",
				image:
					"https://images.unsplash.com/photo-1506792414820-cb2372220c8c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGphcGFuJTIwYWxjb2hvbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
			},
			{
				name: "Accompagnements",
				image:
					"https://images.unsplash.com/photo-1516684732162-798a0062be99?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8amFwYW4lMjBzYXVjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
			},
			{
				name: "Snacks",
				image:
					"https://images.unsplash.com/photo-1514537193821-ed4955693802?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
			}
		],

		selectedMeal: null,
		meals: [
			{
				id: Math.floor(Math.random() * 123456),
				name: "Mix box",
				image:
					"https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
				comments: 5,
				description:
					"Assortiment de sushis: 3 sushis saumon - 3 makis au choix avec une salade OU 6 sushis saumon - salade. Yakitori offerte uniquement en formule du soir et happy hours.",
				price: [
					{
						name: "formule midi",
						amount: 8.99
					},
					{
						name: "formule soir",
						amount: 12.99
					},
					{
						name: "happy hours",
						amount: 5.99
					}
				]
			},
			{
				id: Math.floor(Math.random() * 123456),
				name: "Mix familial",
				image:
					"https://images.unsplash.com/photo-1563612116625-3012372fccce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80",
				comments: 9,
				description:
					"Assortiment au choix de 16 produits: sushis - makis - yakitoris.",
				price: [
					{
						name: "formule midi",
						amount: 19.99
					},
					{
						name: "formule soir",
						amount: 24.99
					},
					{
						name: "happy hours",
						amount: 15.99
					}
				]
			},
			{
				id: Math.floor(Math.random() * 123456),
				name: "Mix makis",
				image:
					"https://images.unsplash.com/photo-1558985212-92c2ff0b56e7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
				comments: 3,
				description:
					"Assortiment de makis: 3 california rolls - 3 makis avocat & thon avec une salade OU 6 california rolls - salade. Yakitori offerte uniquement en formule du soir et happy hours.",
				price: [
					{
						name: "formule midi",
						amount: 9.99
					},
					{
						name: "formule soir",
						amount: 13.99
					},
					{
						name: "happy hours",
						amount: 5.99
					}
				]
			},
			{
				id: Math.floor(Math.random() * 123456),
				name: "Salmon paradise",
				image:
					"https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
				comments: 11,
				description:
					"Nos meilleurs produits contenant du saumon réunis en un seul plat. Vous aurez le choix entre deux formules: 12 makis + 12 sushis saumon + 2 yakitori OU 16 sushis saumon + 6 makis + 2 yakitori",
				price: [
					{
						name: "formule midi",
						amount: 26.99
					},
					{
						name: "formule soir",
						amount: 29.99
					},
					{
						name: "happy hours",
						amount: 19.99
					}
				]
			}
		]
	}
});
