import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard, { Product } from "./components/product-card";
import BeverageCard, { Beverage } from "./components/beverage-card";

const products: Product[] = [
  {
    id: "1",
    name: "Cheese Pizza",
    description: `Simple, yet simply delicious. Real cheese made from 
    mozzarella on top of our signature pizza sauce with your choice of 
    crust, then baked to a golden brown. It has just what you want, 
    and nothing you don’t.`,
    image: "/cheese_pizza.jpg",
    price: 18.74,
  },
  {
    id: "2",
    name: "Zesty Italian Trio Pizza",
    description: `A tasty trio of zesty Italian sausage, salami, 
    and pepperoni, plus banana peppers, a three-cheese blend, 
    and real cheese made from mozzarella on our signature sauce and 
    original fresh dough. Sprinkled with classic Italian seasoning for 
    an extra dash of flavor.`,
    image: "/zesty-italian-trio.jpg",
    price: 24.79,
  },
  {
    id: "3",
    name: "Spinach Alfredo Chicken Tomato Pizza",
    description: `A rich, creamy combination of spinach and garlic 
    Parmesan Alfredo sauce, grilled all-white chicken and 
    fresh vine-ripened Roma tomatoes.`,
    image: "/Spinach_Alfredo_Chicken_Tomato.jpg",
    price: 14.99,
  },
  {
    id: "4",
    name: "Hawaiian",
    description: `Lots of Canadian Smoked Ham, Juicy Pineapple Chunks`,
    image: "/Hawaiian_pizza.jpg",
    price: 15.99,
  },
  {
    id: "5",
    name: "Chicken Pesto Pizza",
    description: `A favourite Thin Crust Pizza with Pesto Sauce, Chicken, 
    Spinach, Tomatoes, & Feta Cheese`,
    image: "/Chicken_Pesto.jpg",
    price: 17.99,
  },
];

const beverages: Beverage[] = [
  {
    id: "1",
    name: "Caffe Mocha",
    description: `Rich, full-bodied espresso combined with bittersweet 
    mocha sauce and steamed milk, then topped with sweetened 
    whipped cream. The classic coffee drink that always sweetly satisfies.`,
    image: "/caffe_mocha.jpg",
    price: 3.75,
  },
  {
    id: "2",
    name: "Steamed Milk",
    description: `Enjoy a warm cup of skim, 2%, soy, almond or coconut 
    beverage steamed for your sipping pleasure.`,
    image: "/steamed_milk.jpg",
    price: 2.65,
  },
  {
    id: "3",
    name: "Mango Dragonfruit Lemonade",
    description: `This tropical-inspired pick-me-up—crafted with a clever 
    combination of vibrant lemonade, sweet mango and refreshing dragonfruit 
    flavours and hand-shaken with ice plus a scoop of real diced dragonfruit.`,
    image: "/Frozen_Mango_Dragonfruit_Lemonade.jpg",
    price: 6.25,
  },
  {
    id: "4",
    name: "Organic Apple Juice",
    description: `Kiju® Organic 100% juices are premium, certified organic juice 
    blends with no added sugar. Simple and deliciously all apple.`,
    image: "/Organic_Apple_Juice.jpg",
    price: 2.99,
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="container flex items-center justify-between py-24">
          <div>
            <h1 className="text-7xl font-black font-sans leading-2">
              Savor Delicious Pizza in <br />
              <span className="text-primary">Only 45 Minutes!</span>
            </h1>
            <p className="text-2xl mt-8 max-w-lg leading-snug">
              Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
            </p>
            <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">
              Get your pizza now
            </Button>
          </div>
          <div>
            <Image
              src={"/pizza-main.png"}
              width={400}
              height={400}
              alt="pizza"
              style={{ marginTop: -50 }}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container py-12">
          <Tabs defaultValue="pizza">
            <TabsList>
              <TabsTrigger className="text-md" value="pizza">
                Pizza
              </TabsTrigger>
              <TabsTrigger className="text-md" value="beverages">
                Beverages
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pizza">
              <div className="grid grid-cols-4 gap-6 mt-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="beverages">
              <div className="grid grid-cols-4 gap-6 mt-6">
                {beverages.map((product) => (
                  <BeverageCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
