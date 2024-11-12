import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard, { Product } from "./components/ProductCard";

const products: Product[] = [
  {
    id: "1",
    name: "Hawaiian",
    description: "Delicious pizza",
    image: "/pizza-main.png",
    price: 12.99,
  },
  {
    id: "2",
    name: "Hawaiian",
    description: "Delicious pizza",
    image: "/pizza-main.png",
    price: 12.99,
  },
  {
    id: "3",
    name: "Hawaiian",
    description: "Delicious pizza",
    image: "/pizza-main.png",
    price: 12.99,
  },
  {
    id: "4",
    name: "Hawaiian",
    description: "Delicious pizza",
    image: "/pizza-main.png",
    price: 12.99,
  },
  {
    id: "5",
    name: "Hawaiian",
    description: "Delicious pizza",
    image: "/pizza-main.png",
    price: 12.99,
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
              alt="pizza-main"
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
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
