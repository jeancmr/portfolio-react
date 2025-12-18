import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { Hero } from './components/sections/Hero';
import { Stack } from './components/sections/Stack';

export const Portfolio = () => {
  return (
    <>
      <Hero />
      <Stack />
      <About />
      <FeaturedProjects />
      <Contact />
    </>
  );
};
