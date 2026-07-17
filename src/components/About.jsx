import { Camera, Mountain, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#efe2c7] to-[#dcc69a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm tracking-[0.3em] uppercase text-foreground/60 mb-4 font-cinzel">About</h2>
            <h3 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-cinzel">
              Born in the Wild,<br />Raised by the Lens
            </h3>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed font-spectral">
              Mike Mamuang is an adventure photographer based in Chiang Mai, Thailand, specializing in capturing the raw beauty of Southeast Asia's most remote landscapes and cultures.
            </p>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed font-spectral">
              With over a decade of experience trekking through jungles, scaling mountains, and documenting forgotten temples, Mike's work has been featured in National Geographic, Adventure Journal, and countless publications worldwide.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#f4ead3] rounded-lg">
                  <Camera className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1 font-cinzel">Professional Equipment</h4>
                  <p className="text-foreground/60 font-spectral">Sony A7R V, Canon EOS R5, DJI Mavic 3 Pro</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#f4ead3] rounded-lg">
                  <Mountain className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1 font-cinzel">Specialization</h4>
                  <p className="text-foreground/60 font-spectral">Adventure, Landscape, Cultural Documentary</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#f4ead3] rounded-lg">
                  <Globe className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1 font-cinzel">Base Location</h4>
                  <p className="text-foreground/60 font-spectral">Chiang Mai, Thailand (Available Worldwide)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/photo-1605800232664-0b972bc644f2.jpg"
              alt="Mike Mamuang"
              className="w-full h-[600px] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#f3e7cc] p-8 shadow-xl max-w-xs border border-[#d8bf8b]">
              <p className="text-2xl font-bold text-foreground mb-2 font-cinzel">10+ Years</p>
              <p className="text-foreground/60 font-spectral">Capturing stories that matter</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
