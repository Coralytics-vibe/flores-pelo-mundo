import { GraphQLClient, gql } from 'graphql-request';

const hygraphUrl = import.meta.env.VITE_HYGRAPH_URL;
const hygraphToken = import.meta.env.VITE_HYGRAPH_TOKEN;

export const client = new GraphQLClient(hygraphUrl || '', {
  headers: {
    Authorization: `Bearer ${hygraphToken}`,
  },
});

export const HERO_QUERY = gql`
  query GetHero {
    bannerHomes(first: 1) {
      title
      subtitle
      ctaText
      ctaLink
      backgroundImages {
        url
      }
    }
  }
`;

export const TESTIMONIALS_QUERY = gql`
  query GetTestimonials {
    testimonials {
      name
      image {
        url
      }
    }
  }
`;

export interface HeroData {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImages: { url: string }[];
}

export interface TestimonialData {
  name?: string;
  image: { url: string };
}
