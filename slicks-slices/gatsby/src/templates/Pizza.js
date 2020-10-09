import { graphql } from 'gatsby';
import React from 'react';

export default function SinglePizzaPage({ data }) {
  console.log('data>>>', data);
  return <p>Single Pizza!!!</p>;
}

export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;
