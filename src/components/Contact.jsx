import { useState } from 'react';
import { Mail, Phone, MapPin, AtSign, Globe, Send } from 'lucide-react';

const Contact = () => {
  const contactEmail = import.meta.env.VITE_PERSONAL_EMAIL || import.meta.env.VITE_CONTACT_EMAIL || 'mike@mamuang.photography';
  const contactPhone = import.meta.env.VITE_CONTACT_PHONE || '+66 81 234 5678';
  const contactLocation = import.meta.env.VITE_CONTACT_LOCATION || 'Chiang Mai, Thailand';
  const instagramUrl = import.meta.env.VITE_CONTACT_INSTAGRAM_URL || '#';
  const websiteUrl = import.meta.env.VITE_CONTACT_WEBSITE_URL || '#';
  const xUrl = import.meta.env.VITE_CONTACT_X_URL || '#';
  const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';
  const phoneHref = `tel:${String(contactPhone).replace(/\s+/g, '')}`;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    botcheck: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!web3FormsAccessKey) {
      setSubmitStatus({
        type: 'error',
        message: 'Missing VITE_WEB3FORMS_ACCESS_KEY in your environment configuration.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const payload = {
      access_key: web3FormsAccessKey,
      from_name: formData.name,
      name: formData.name,
      email: formData.email,
      subject: formData.service ? `New Inquiry - ${formData.service}` : 'New Portfolio Inquiry',
      message: [
        `Service: ${formData.service || 'Not specified'}`,
        '',
        formData.message,
      ].join('\n'),
      botcheck: formData.botcheck,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully. I will get back to you soon.',
        });
        setFormData({ name: '', email: '', service: '', message: '', botcheck: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Unable to send message right now. Please try again.',
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please try again in a moment.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-[#110d0a]">
      <div className="absolute inset-0">
        <img
          src="/images/photo-1741320130583-d179370be79f.jpg"
          alt="Misty mountain scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#100c08]/85 via-[#120d09]/70 to-[#0f0b08]/88" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="p-8 sm:p-10 border border-[#6e582c] bg-[#130f0b]/72 backdrop-blur-sm shadow-2xl">
            <h2 className="text-sm tracking-[0.3em] uppercase text-[#bca67b] mb-4 font-cinzel">Contact</h2>
            <h3 className="text-4xl sm:text-5xl font-bold text-[#f0e3c9] mb-6 font-cinzel">
              Let's Create<br />Something Epic
            </h3>
            <p className="text-lg text-[#ddd1b7]/85 mb-8 leading-relaxed font-spectral">
              Whether you're planning an expedition, need editorial work, or just want to discuss a crazy idea over coffee — I'm here for it. Drop me a message and let's start the conversation.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#f4e8cd] rounded-lg">
                  <Mail className="w-5 h-5 text-[#26190b]" />
                </div>
                <div>
                  <p className="text-sm text-[#bca67b] font-spectral">Email</p>
                  <a href={`mailto:${contactEmail}`} className="text-[#f0e3c9] hover:text-[#e0bf79] transition-colors font-spectral">
                    {contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#f4e8cd] rounded-lg">
                  <Phone className="w-5 h-5 text-[#26190b]" />
                </div>
                <div>
                  <p className="text-sm text-[#bca67b] font-spectral">Phone</p>
                  <a href={phoneHref} className="text-[#f0e3c9] hover:text-[#e0bf79] transition-colors font-spectral">
                    {contactPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#f4e8cd] rounded-lg">
                  <MapPin className="w-5 h-5 text-[#26190b]" />
                </div>
                <div>
                  <p className="text-sm text-[#bca67b] font-spectral">Location</p>
                  <p className="text-[#f0e3c9] font-spectral">{contactLocation}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="p-3 bg-[#f4e8cd] text-[#26190b] hover:bg-[#d6b067] hover:text-[#1a1207] transition-all duration-300 rounded-lg">
                <AtSign className="w-5 h-5" />
              </a>
              <a href={websiteUrl} target="_blank" rel="noreferrer" className="p-3 bg-[#f4e8cd] text-[#26190b] hover:bg-[#d6b067] hover:text-[#1a1207] transition-all duration-300 rounded-lg">
                <Globe className="w-5 h-5" />
              </a>
              <a href={xUrl} target="_blank" rel="noreferrer" className="p-3 bg-[#f4e8cd] text-[#26190b] hover:bg-[#d6b067] hover:text-[#1a1207] transition-all duration-300 rounded-lg">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="bg-[#f5ead2] p-8 shadow-lg border border-[#d6bd8a]">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
                checked={!!formData.botcheck}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    botcheck: event.target.checked ? '1' : '',
                  }))
                }
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 font-cinzel tracking-wider uppercase">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-foreground/20 focus:border-primary focus:outline-none transition-colors font-spectral"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 font-cinzel tracking-wider uppercase">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-foreground/20 focus:border-primary focus:outline-none transition-colors font-spectral"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2 font-cinzel tracking-wider uppercase">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-foreground/20 focus:border-primary focus:outline-none transition-colors font-spectral"
                >
                  <option value="">Select a service</option>
                  <option>Adventure Expeditions</option>
                  <option>Editorial Shoots</option>
                  <option>Video Production</option>
                  <option>Workshops</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 font-cinzel tracking-wider uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-foreground/20 focus:border-primary focus:outline-none transition-colors font-spectral"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white px-8 py-4 text-sm tracking-[0.25em] uppercase hover:bg-accent transition-all duration-300 font-cinzel disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus.message && (
                <p className={`text-sm font-spectral ${submitStatus.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                  {submitStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
