import React from 'react';
import { Form } from '../../components/form';

export const CreateEmployee = () => (
   <main className="bg-dark">
      <Form />
   </main>
);

// import React, { Suspense } from 'react';

// const FormComponent = React.lazy(() =>
//    import('../../components/form').then(({ Form }) => ({
//       default: Form,
//    }))
// );

// export const CreateEmployee = () => (
//    <div className="bg-dark">
//       <Suspense fallback={<div>Chargement...</div>}>
//          <FormComponent />
//       </Suspense>
//    </div>
// );
