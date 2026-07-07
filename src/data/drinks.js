import Latte from "../assets/Latte.jpg";
import cappuccino from "../assets/cappuccino.jpg";
import Americano from "../assets/Americano.jpg";
import mocha from "../assets/mocha.jpg";
import HoneyLatte from "../assets/Honey Latte.jpg";
import CoconutCreamLatte from "../assets/Coconut cream latte.jpg";
import CaramelLatte from "../assets/Caramel Latte.jpg";
import CaramelMacchiato from "../assets/Caramel Machiato.jpg";
import Espresso from "../assets/Espresso.jpg";

import FreshPassionCream from "../assets/Fresh Passion Cream.jpg";
import FreshPassionJuice from "../assets/Fresh passion juice.jpg";
import GreenMilkTea from "../assets/Green Milk Tea.jpg";
import WildberryRaspberryTea from "../assets/Wildberry rasberry tea.jpg";
import HoneyYuzuSoda from "../assets/Honey yuzu soda.jpg";
import HoneyLimeTea from "../assets/Honey Lime Tea.jpg";
import LycheeTea from "../assets/Lychee Tea.jpg";
import RedMilkTea from "../assets/Red Milktea.jpg";
import RoseLycheeSoda from "../assets/Rose lychee soda.jpg";
import ChocolateMilk from "../assets/Chocolate Milk.jpg";

import ThnolFrappe from "../assets/Thnol Frappe.jpg";
import CaramelFrappe from "../assets/Caramel Frappe.jpg";
import MochaChipFrappe from "../assets/Mocha Chip Frappe.jpg";
import VanillaFrappe from "../assets/Vanilla Frappe.jpg";
import BlueberryFrappe from "../assets/Blueberry frappe.jpg";
import GreenMilkTeaFrappe from "../assets/Green milk tea frappe.jpg";
import RedMilkTeaFrappe from "../assets/Red Milk Tea Frappe.jpg";
import ChocolateChipFrappe from "../assets/Chocolate chip Frappe.jpg";

import coffee from "../assets/coffee.jpg"; // fallback for missing photo

const drinks = [
  // ---------------- Coffee ----------------
  {
    id: 1,
    name: "Latte",
    category: "Coffee",
    image: Latte,
    description: "A classic espresso drink with steamed milk and a light layer of foam, smooth and comforting.",
    ingredients: ["2 shots espresso", "6 oz steamed milk", "Light milk foam"],
    steps: ["Pull two shots of espresso into a cup", "Steam milk until velvety and about 150°F", "Pour steamed milk over the espresso", "Top with a thin layer of foam"]
  },
  {
    id: 2,
    name: "Cappuccino",
    category: "Coffee",
    image: cappuccino,
    description: "Equal parts espresso, steamed milk, and thick milk foam for a rich, creamy texture.",
    ingredients: ["2 shots espresso", "3 oz steamed milk", "3 oz milk foam"],
    steps: ["Pull two shots of espresso", "Steam milk and froth until thick and airy", "Pour steamed milk over espresso", "Spoon thick foam on top"]
  },
  {
    id: 3,
    name: "Americano",
    category: "Coffee",
    image: Americano,
    description: "Espresso diluted with hot water for a lighter, smoother coffee similar to drip coffee.",
    ingredients: ["2 shots espresso", "6 oz hot water"],
    steps: ["Pull two shots of espresso into a cup", "Add hot water to desired strength", "Stir gently and serve"]
  },
  {
    id: 4,
    name: "Mocha",
    category: "Coffee",
    image: mocha,
    description: "A chocolate lover's coffee, combining rich espresso with steamed milk and chocolate syrup.",
    ingredients: ["2 shots espresso", "1 oz chocolate syrup", "6 oz steamed milk", "Whipped cream (optional)"],
    steps: ["Add chocolate syrup to the cup", "Pull espresso shots directly over the syrup", "Stir to combine", "Pour in steamed milk and top with whipped cream"]
  },
  {
    id: 5,
    name: "Honey Latte",
    category: "Coffee",
    image: HoneyLatte,
    description: "A naturally sweetened latte using real honey instead of sugar for a warm, floral finish.",
    ingredients: ["2 shots espresso", "6 oz steamed milk", "1 tbsp honey"],
    steps: ["Stir honey into the cup", "Pull espresso shots over the honey", "Pour in steamed milk", "Stir gently before serving"]
  },
  {
    id: 6,
    name: "Coconut Cream Latte",
    category: "Coffee",
    image: CoconutCreamLatte,
    description: "A tropical twist on the classic latte, made with creamy coconut milk instead of dairy.",
    ingredients: ["2 shots espresso", "6 oz steamed coconut milk", "Coconut cream drizzle"],
    steps: ["Pull espresso shots into a cup", "Steam coconut milk until frothy", "Pour over espresso", "Drizzle with coconut cream"]
  },
  {
    id: 7,
    name: "Caramel Latte",
    category: "Coffee",
    image: CaramelLatte,
    description: "A sweet, buttery caramel-infused latte topped with a light caramel drizzle.",
    ingredients: ["2 shots espresso", "1 oz caramel syrup", "6 oz steamed milk", "Caramel drizzle"],
    steps: ["Add caramel syrup to the cup", "Pull espresso shots over the syrup", "Pour in steamed milk", "Top with a caramel drizzle"]
  },
  {
    id: 8,
    name: "Caramel Macchiato",
    category: "Coffee",
    image: CaramelMacchiato,
    description: "Steamed milk marked with espresso and finished with a sweet caramel drizzle on top.",
    ingredients: ["2 shots espresso", "6 oz steamed milk", "Vanilla syrup", "Caramel drizzle"],
    steps: ["Add vanilla syrup and steamed milk to the cup", "Pour espresso shots on top (marking the milk)", "Drizzle caramel sauce over the foam"]
  },
  {
    id: 9,
    name: "Espresso",
    category: "Coffee",
    image: Espresso,
    description: "A bold, concentrated shot of pure coffee — the base of every espresso drink.",
    ingredients: ["18g finely ground coffee", "36ml water (double shot)"],
    steps: ["Tamp finely ground coffee evenly into the portafilter", "Lock into the espresso machine", "Extract for 25–30 seconds", "Serve immediately in a small cup"]
  },

  // ---------------- Tea & Refreshment ----------------
  {
    id: 10,
    name: "Fresh Passion Cream",
    category: "Tea & Refreshment",
    image: FreshPassionCream,
    description: "A refreshing passion fruit drink topped with a smooth layer of cream foam.",
    ingredients: ["Passion fruit syrup", "Passion fruit pulp", "Ice", "Cream foam topping"],
    steps: ["Fill glass with ice", "Add passion fruit syrup and pulp", "Top with water or soda", "Finish with cream foam"]
  },
  {
    id: 11,
    name: "Fresh Passion Juice",
    category: "Tea & Refreshment",
    image: FreshPassionJuice,
    description: "Pure and tangy passion fruit juice served cold — light, fruity, and energizing.",
    ingredients: ["Passion fruit pulp", "Passion fruit syrup", "Water", "Ice"],
    steps: ["Fill glass with ice", "Add passion fruit pulp and syrup", "Top with water", "Stir well and serve"]
  },
  {
    id: 12,
    name: "Green Milk Tea",
    category: "Tea & Refreshment",
    image: GreenMilkTea,
    description: "Earthy green tea blended smoothly with creamy milk for a mellow, comforting sip.",
    ingredients: ["Brewed green tea", "Milk", "Sugar syrup", "Ice"],
    steps: ["Brew green tea and let cool", "Fill glass with ice", "Add milk and sugar syrup", "Pour tea over and stir"]
  },
  {
    id: 13,
    name: "Wildberry Raspberry Tea",
    category: "Tea & Refreshment",
    image: WildberryRaspberryTea,
    description: "A fruity iced tea bursting with wildberry and raspberry flavor.",
    ingredients: ["Brewed black tea", "Raspberry syrup", "Mixed berry syrup", "Ice"],
    steps: ["Brew tea and let cool", "Fill glass with ice", "Add raspberry and berry syrups", "Pour tea over and stir well"]
  },
  {
    id: 14,
    name: "Honey Yuzu Soda",
    category: "Tea & Refreshment",
    image: HoneyYuzuSoda,
    description: "A zesty citrus soda sweetened naturally with honey — bright and refreshing.",
    ingredients: ["Yuzu marmalade", "Honey syrup", "Soda water", "Ice"],
    steps: ["Add yuzu marmalade and honey syrup to glass", "Fill with ice", "Top with soda water", "Stir gently to combine"]
  },
  {
    id: 15,
    name: "Honey Lime Tea",
    category: "Tea & Refreshment",
    image: HoneyLimeTea,
    description: "A tangy-sweet iced tea combining fresh lime and honey for a light, zesty refreshment.",
    ingredients: ["Brewed black tea", "Honey syrup", "Fresh lime juice", "Ice"],
    steps: ["Brew tea and let cool", "Fill glass with ice", "Add honey syrup and lime juice", "Pour tea over and stir"]
  },
  {
    id: 16,
    name: "Lychee Tea",
    category: "Tea & Refreshment",
    image: LycheeTea,
    description: "Fragrant black tea infused with sweet lychee flavor for a delicate floral finish.",
    ingredients: ["Brewed black tea", "Lychee syrup", "Lychee fruit pieces", "Ice"],
    steps: ["Brew tea and let cool", "Fill glass with ice", "Add lychee syrup and fruit pieces", "Pour tea over and stir"]
  },
  {
    id: 17,
    name: "Red Milk Tea",
    category: "Tea & Refreshment",
    image: RedMilkTea,
    description: "Bold black tea combined with creamy milk for a rich, classic milk tea flavor.",
    ingredients: ["Brewed black tea", "Milk", "Sugar syrup", "Ice"],
    steps: ["Brew black tea and let cool", "Fill glass with ice", "Add milk and sugar syrup", "Pour tea over and stir"]
  },
  {
    id: 18,
    name: "Rose Lychee Soda",
    category: "Tea & Refreshment",
    image: RoseLycheeSoda,
    description: "A delicate floral soda blending rose syrup and lychee for an elegant refreshment.",
    ingredients: ["Rose syrup", "Lychee syrup", "Soda water", "Ice"],
    steps: ["Add rose and lychee syrups to glass", "Fill with ice", "Top with soda water", "Stir gently and serve"]
  },
  {
    id: 19,
    name: "Chocolate Milk",
    category: "Tea & Refreshment",
    image: ChocolateMilk,
    description: "Rich, creamy chocolate milk — a simple, comforting classic for all ages.",
    ingredients: ["Chocolate syrup", "Milk", "Ice (optional)"],
    steps: ["Add chocolate syrup to glass", "Pour in milk", "Stir until fully combined", "Serve over ice if desired"]
  },

  // ---------------- Frappe ----------------
  {
    id: 20,
    name: "Thnol Frappe",
    category: "Frappe",
    image: ThnolFrappe,
    description: "A thick, blended iced coffee frappe with a bold roasted flavor.",
    ingredients: ["Brewed coffee", "Milk", "Ice", "Sugar syrup"],
    steps: ["Combine coffee, milk, sugar syrup, and ice in a blender", "Blend until smooth and thick", "Pour into a glass", "Serve with a straw"]
  },
  {
    id: 21,
    name: "Fresh Passion Frappe",
    category: "Frappe",
    image: coffee,
    description: "A blended icy treat bursting with tropical passion fruit flavor.",
    ingredients: ["Passion fruit syrup", "Passion fruit pulp", "Ice", "Water"],
    steps: ["Combine passion fruit syrup, pulp, and ice in a blender", "Blend until smooth", "Pour into a glass", "Serve immediately"]
  },
  {
    id: 22,
    name: "Caramel Frappe",
    category: "Frappe",
    image: CaramelFrappe,
    description: "A creamy blended coffee treat with buttery caramel flavor and a drizzle on top.",
    ingredients: ["Brewed coffee", "Caramel syrup", "Milk", "Ice", "Caramel drizzle"],
    steps: ["Blend coffee, caramel syrup, milk, and ice until smooth", "Pour into a glass", "Top with caramel drizzle", "Serve with a straw"]
  },
  {
    id: 23,
    name: "Mocha Chip Frappe",
    category: "Frappe",
    image: MochaChipFrappe,
    description: "A chocolatey blended coffee frappe with crunchy chocolate chip bits throughout.",
    ingredients: ["Brewed coffee", "Chocolate syrup", "Milk", "Ice", "Chocolate chips"],
    steps: ["Blend coffee, chocolate syrup, milk, and ice", "Pulse in chocolate chips for texture", "Pour into a glass", "Top with extra chips"]
  },
  {
    id: 24,
    name: "Vanilla Frappe",
    category: "Frappe",
    image: VanillaFrappe,
    description: "A smooth, sweet blended drink with classic vanilla flavor — simple and satisfying.",
    ingredients: ["Vanilla syrup", "Milk", "Ice", "Whipped cream (optional)"],
    steps: ["Combine vanilla syrup, milk, and ice in a blender", "Blend until smooth and thick", "Pour into a glass", "Top with whipped cream if desired"]
  },
  {
    id: 25,
    name: "Blueberry Frappe",
    category: "Frappe",
    image: BlueberryFrappe,
    description: "A fruity, icy blend bursting with sweet blueberry flavor.",
    ingredients: ["Blueberry syrup", "Milk or water", "Ice", "Blueberry fruit pieces (optional)"],
    steps: ["Combine blueberry syrup, milk, and ice in a blender", "Blend until smooth", "Pour into a glass", "Garnish with blueberry pieces"]
  },
  {
    id: 26,
    name: "Green Milk Tea Frappe",
    category: "Frappe",
    image: GreenMilkTeaFrappe,
    description: "A blended version of green milk tea — icy, creamy, and mellow.",
    ingredients: ["Brewed green tea", "Milk", "Sugar syrup", "Ice"],
    steps: ["Combine green tea, milk, sugar syrup, and ice in a blender", "Blend until smooth and frothy", "Pour into a glass", "Serve with a straw"]
  },
  {
    id: 27,
    name: "Red Milk Tea Frappe",
    category: "Frappe",
    image: RedMilkTeaFrappe,
    description: "A rich, blended black milk tea frappe — smooth, icy, and bold in flavor.",
    ingredients: ["Brewed black tea", "Milk", "Sugar syrup", "Ice"],
    steps: ["Combine black tea, milk, sugar syrup, and ice in a blender", "Blend until smooth", "Pour into a glass", "Serve immediately"]
  },
  {
    id: 28,
    name: "Chocolate Chip Frappe",
    category: "Frappe",
    image: ChocolateChipFrappe,
    description: "A decadent chocolate blended drink loaded with crunchy chocolate chips.",
    ingredients: ["Chocolate syrup", "Milk", "Ice", "Chocolate chips"],
    steps: ["Blend chocolate syrup, milk, and ice until smooth", "Pulse in chocolate chips", "Pour into a glass", "Top with whipped cream and extra chips"]
  }
];

export default drinks;