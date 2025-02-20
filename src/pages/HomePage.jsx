
function HomePage() {
 return(
  <>
   <section className="h-[80vh] flex justify-center items-center flex-col gap-2">
    <h1 className="text-7xl font-bold font-serif">Welcome to Muvie Cinima</h1>
    <p className="font-bold text-gray-400 w-[50rem] text-center">Welcome to <strong className="text-amber-300">Muvie Cinima</strong>, where every frame tells a story and every visit creates a memory! At Muvie Cinima, we don’t just show movies—we deliver unforgettable cinematic experiences.</p>

    <div className="flex gap-6">
     <button className="bg-green-700 py-2 px-6 rounded-md animate-pulse font-bold">Sign Up</button>
     <button className="bg-amber-500 py-2 px-7 rounded-md animate-pulse font-bold">Login</button>
    </div>
   </section>
  </>
 );
}

export default HomePage;