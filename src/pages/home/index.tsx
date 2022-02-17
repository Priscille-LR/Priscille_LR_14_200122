import React from 'react';
import { Hero } from '../../components/hero';

export const Home = () => (
   <main className="bg-dark">
      <Hero />
   </main>
);

// import React, { Suspense } from 'react';

// const HeroComponent = React.lazy(() =>
//    import('../../components/hero').then(({ Hero }) => ({
//       default: Hero,
//    }))
// );

// export const Home = () => (
//    <div className="bg-dark">
//       <Suspense fallback={<div>Chargement...</div>}>
//          <HeroComponent />
//       </Suspense>
//    </div>
// );
