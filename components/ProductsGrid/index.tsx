"use client";

import { AnimatePresence, motion } from "framer-motion";

import ProductCard from "@/components/ProductsGrid/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/utils/types";
import Loading from "../Loading";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return products;
}

function ProductList() {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <Loading />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-4">
      <AnimatePresence>
        {data.map((product: Product, index: number) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ProductList;
