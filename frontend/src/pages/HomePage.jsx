import { Container, VStack,Text, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react'

import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';
const HomePage = () => {
  const {fetchProducts,products} = useProductStore();
  useEffect(()=>{
    fetchProducts();
  },[fetchProducts]);
  console.log(products);
  return (
    <Container py={12}>
      <VStack spaceX={8} spaceY={8}>
        <Text
        >
          Current Products 🚀
        </Text>
        <SimpleGrid 
        columns={{base:1,md:2, lg:3}}  gap={'40px'}>
          {products.map((product)=>(
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
        {products.length === 0 && (
					<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No products found 😢{" "}
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a product
							</Text>
						</Link>
					</Text>
				)}
      </VStack>
    </Container>
  )
}

export default HomePage