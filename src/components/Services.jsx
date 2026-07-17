import { Compass, Image, Video, BookOpen } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Compass,
      title: 'Adventure Expeditions',
      description: 'Multi-day photography expeditions to remote locations. All logistics handled, you just bring your sense of wonder.',
      price: 'From $2,500',
    },
    {
      icon: Image,
      title: 'Editorial Shoots',
      description: 'Commercial and editorial photography for travel magazines, brands, and publications worldwide.',
      price: 'Custom Quote',
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Cinematic video content for brands, documentaries, and adventure storytelling projects.',
      price: 'From $5,000',
    },
    {
      icon: BookOpen,
      title: 'Workshops',
      description: 'Guided photography workshops in Thailand and Southeast Asia. Learn from the field, not a classroom.',
      price: 'From $1,200',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm tracking-[0.3em] uppercase text-foreground/60 mb-4 font-cinzel">Services</h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 font-cinzel">
            What I Offer
          </h3>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto font-spectral italic">
            From solo commissions to full-scale expeditions, each project is approached with meticulous planning and unbridled passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 border border-foreground/10 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6">
                  <Icon className="w-10 h-10 text-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3 font-cinzel">{service.title}</h4>
                <p className="text-foreground/60 mb-4 leading-relaxed font-spectral">{service.description}</p>
                <div className="pt-4 border-t border-foreground/10">
                  <p className="text-sm font-bold text-primary tracking-wider font-cinzel">{service.price}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-gray-50 border border-foreground/10">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-2xl font-bold text-foreground mb-4 font-cinzel">Important Notice</h4>
            <p className="text-foreground/60 leading-relaxed font-spectral">
              All expeditions involve inherent risks associated with remote travel and outdoor activities. Participants are required to sign liability waivers and carry appropriate travel insurance. Weather conditions, political situations, and local regulations may require itinerary adjustments. Full terms and conditions provided upon booking inquiry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
