const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      image: '/images/photo-1764624112050-a146d0674b72.jpg',
      title: 'Misty Mountains',
      category: 'Landscape',
    },
    {
      id: 2,
      image: '/images/photo-1743485753934-7d831695f368.jpg',
      title: 'Ancient Temple',
      category: 'Architecture',
    },
    {
      id: 3,
      image: '/images/photo-1768991680404-ae9adaea05fb.jpg',
      title: 'Golden Hour',
      category: 'Portrait',
    },
    {
      id: 4,
      image: '/images/photo-1741320130583-d179370be79f.jpg',
      title: 'Jungle Path',
      category: 'Adventure',
    },
    {
      id: 5,
      image: '/images/photo-1770214624429-9f0bf6142ac6.jpg',
      title: 'Urban Stories',
      category: 'Street',
    },
    {
      id: 6,
      image: '/images/photo-1641892284315-de6baec3f4bc.jpg',
      title: 'Wild Spirit',
      category: 'Wildlife',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm tracking-[0.3em] uppercase text-foreground/60 mb-4 font-cinzel">Portfolio</h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 font-cinzel">
            Visual Chronicles
          </h3>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto font-spectral italic">
            A curated selection of moments captured across continents, each telling a story of adventure, culture, and the human spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden aspect-square cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-xs tracking-[0.2em] uppercase mb-2 font-cinzel">{item.category}</div>
                  <h4 className="text-2xl font-bold font-cinzel">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-foreground/30 text-foreground/70 px-8 py-3.5 text-sm tracking-[0.25em] uppercase hover:border-primary hover:text-primary transition-all duration-300 font-cinzel">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
