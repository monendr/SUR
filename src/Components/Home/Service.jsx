import React from 'react';
import { Heart, Stethoscope, Users, Activity, Baby, Scissors, ArrowRight, CheckCircle2 } from 'lucide-react';

const Service = () => {
  const services = [
    {
      icon: Heart,
      title: 'Obstetrics & Gynecology',
      desc: 'Comprehensive women\'s health services including pregnancy care, family planning, and treatment of gynecological conditions.',
      features: ['Prenatal Care', 'Normal & C-Section Delivery', 'Gynecological Treatments', 'Family Planning'],
      gradient: 'from-pink-500 via-rose-500 to-red-500'
    },
    {
      icon: Baby,
      title: 'Pediatric Care',
      desc: 'Specialized healthcare for infants, children, and adolescents with experienced pediatricians.',
      features: ['Child Health Checkups', 'Vaccinations', 'Growth Monitoring', 'Pediatric Consultations'],
      gradient: 'from-blue-500 via-cyan-500 to-teal-500'
    },
    {
      icon: Scissors,
      title: 'General Surgery',
      desc: 'Advanced surgical procedures performed by experienced surgeons with modern equipment.',
      features: ['General Surgery', 'Minor Procedures', 'Post-operative Care', 'Surgical Consultations'],
      gradient: 'from-purple-500 via-violet-500 to-indigo-500'
    },
    {
      icon: Activity,
      title: 'Orthopedics & Physio',
      desc: 'Treatment for bone, joint, and muscle conditions with physiotherapy rehabilitation services.',
      features: ['Orthopedic Consultations', 'Physiotherapy', 'Fracture Management', 'Rehabilitation'],
      gradient: 'from-orange-500 via-amber-500 to-yellow-500'
    },
    {
      icon: Stethoscope,
      title: 'Dermatology',
      desc: 'Expert skin care and treatment for various dermatological conditions.',
      features: ['Skin Consultations', 'Skin Treatments', 'Cosmetic Dermatology', 'Hair & Nail Care'],
      gradient: 'from-green-500 via-emerald-500 to-teal-500'
    },
    {
      icon: Users,
      title: '24/7 Emergency Services',
      desc: 'Round-the-clock emergency medical care with dedicated doctors and staff.',
      features: ['Emergency Care', 'Trauma Management', 'Critical Care', 'Immediate Response'],
      gradient: 'from-red-600 via-red-500 to-orange-500'
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full mb-6 border border-primary/20">
            <Heart size={20} className="fill-current" />
            <span className="font-semibold tracking-wide">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            SUR Hospital offers a wide range of specialized medical services with state-of-the-art facilities,
            experienced doctors, and compassionate care for patients across Manipur.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-border/50"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Gradient Top Border */}
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>

                {/* Content */}
                <div className="p-8">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="text-white" size={32} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {service.desc}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <button className="group/btn inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" size={18} />
                  </button>
                </div>

                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary via-primary to-primary/90 rounded-3xl p-10 md:p-12 text-white shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
                Best Maternity Hospital in Thoubal District
              </h3>
              <p className="mb-8 text-primary-foreground/90 text-lg leading-relaxed">
                Rated 4.5/5 stars with exceptional patient care. Our emergency team is available 24/7 for urgent medical assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919362655350"
                  className="inline-flex items-center justify-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-foreground/95 transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <Activity size={22} />
                  <span>Emergency: +91 9362655350</span>
                </a>
                <a
                  href="#opd-timing"
                  className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300"
                >
                  <ArrowRight size={22} />
                  <span>View OPD Timings</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

