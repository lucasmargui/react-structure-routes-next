

import { notFound } from 'next/navigation';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    

    //utilizando um id 2 para simular um id nao encotrado para acionar notfound
  if (id ==  '2') {
    notFound();
  }

  return (
    <main>
     <h1 className={`mb-4 text-xl md:text-2xl`}>
          {id}
        </h1>
    </main>
  );
}