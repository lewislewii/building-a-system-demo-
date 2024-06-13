import Link from "next/link";


export default function Home() {
  return (
    <div className='flex justify-center min-h-screen flex-col '>
      <div className="bg-slate-900 justify-center items-center text-slate-100"  >
        <h2 className="text-5x1 mb-4 ">
          LNG SOFTWARE
        </h2>
        <Link href="/inventorydashboard/home/overview "className="p-1 rounded-lg hover:bg-blue-600 mx-2 ">View Dashboard </Link>
      </div>

    </div>
  );
}
