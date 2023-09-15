"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

import ProductCard from "@/components/ProductsGrid/ProductCard";
import Loading from "@/components/Loading";

import { Product } from "@/utils/types";
import { getProducts } from "@/utils/getProducts";

function ProductList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <Loading />;

  if (error) return <h4>Something went wrong...</h4>;

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
