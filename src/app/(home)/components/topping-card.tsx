"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

export type Topping = {
  id: string;
  name: string;
  image: string;
  price: number;
  isAvailable: boolean;
};

type PropType = {
  topping: Topping;
  selectedToppings: Topping[];
  handleCheckboxCheck: (topping: Topping) => void;
};

const ToppingCard = ({
  topping,
  selectedToppings,
  handleCheckboxCheck,
}: PropType) => {
  const isCurrentSelected = selectedToppings.some(
    (element) => element.id === topping.id
  );

  return (
    <Button
      onClick={() => handleCheckboxCheck(topping)}
      variant={"outline"}
      className={cn(
        "flex flex-col h-42 relative",
        isCurrentSelected ? "border-primary" : ""
      )}
    >
      <Image src={topping.image} width={80} height={80} alt={topping.name} />
      <h1>{topping.name}</h1>
      <p>&#36;{topping.price}</p>
      {isCurrentSelected && (
        <CircleCheck className="absolute top-1 right-1 text-primary" />
      )}
    </Button>
  );
};

export default ToppingCard;
