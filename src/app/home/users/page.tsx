import Link from 'next/link';
import { FaceSmileIcon } from '@heroicons/react/24/outline';

export default async function Page() {

  
    return (
        <main className="flex h-full flex-col items-center justify-center gap-2">
        <FaceSmileIcon className="w-10 text-gray-400" />

    
        <Link
          href="/home/users/create"
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        >
          Subrota de users /create
        </Link>
        <Link
          href={`/home/users/1/edit`}
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        >
          Subrota de users id/edit
        </Link>

        <Link
          href={`/home/users/2/edit`}
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        >
          Subrota de users id/edit - id notfound
        </Link>
      </main>
    );
  }