import { ImageWithSkeleton } from '../components/ui/ImageWithSkeleton';

export function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60svh] w-full flex items-center justify-center overflow-hidden">
        <ImageWithSkeleton 
          src="https://images.unsplash.com/photo-1605335505437-0839e5572230?q=80&w=2000&auto=format&fit=crop" 
          alt="About Kknekki" 
          className="absolute inset-0 w-full h-full object-cover"
          wrapperClassName="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-8xl font-display font-medium tracking-tight mb-6">About Us</h1>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 md:py-40 px-4 max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display leading-tight text-balance">
          Simply recognized as one of the best hair ties in the world.
        </h2>
      </section>

      {/* Story Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-y border-border">
        <div className="p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border">
          <h3 className="text-xs font-medium uppercase tracking-widest text-text-secondary mb-6">Our Philosophy</h3>
          <h4 className="text-3xl md:text-4xl font-display mb-8">Crafted to last</h4>
          <p className="text-text-secondary leading-relaxed mb-6">
            The Kknekki hair tie is simply recognized as one of the best hair ties in the world. The unique weaving technique makes them extremely gentle on any kind of hair and they won't fade, fray or slacken, even when worn in salt water.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Woven from more than 60 threads with a unique technique, they offer an almost endless array of color possibilities. Kknekki is as beautiful on your wrist as it is in your hair.
          </p>
        </div>
        <div className="aspect-square md:aspect-auto">
          <ImageWithSkeleton 
            src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1200&auto=format&fit=crop" 
            alt="Material details" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
