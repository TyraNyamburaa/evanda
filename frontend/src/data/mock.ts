export type Service = { category: string; name: string; description: string; price: string; icon: string; image: string; tag?: string };
export type ServiceGroup = { name: string; services: Omit<Service, 'category'>[] };
export const serviceGroups: ServiceGroup[] = [
  {
    name: 'Window & Surface Protection',
    services: [
      { name: 'Window Tinting', description: 'Applying specialized films to reduce heat, block UV rays, reject glare, and increase cabin privacy.', price: 'From KES 8,000', icon: 'sun', image: '/assets/tint1.png' },
      { name: 'Paint Protection Film (PPF)', description: 'Installing clear, heavy-duty polyurethane wraps onto the exterior paint to absorb impacts from rock chips, road salt, and scratches.', price: 'Request a quote', icon: 'shield', image: '/assets/ppf.png' },
      { name: 'Vinyl Vehicle Wrapping', description: 'Changing the exterior color or texture of the car body with a complete or partial vinyl wrap for cosmetic or advertising purposes.', price: 'Request a quote', icon: 'sparkles', image: '/assets/vinyl-wrapping.png' },
      { name: 'Chameleon & Tinted Windshield Films', description: 'Applying legal, high-tech adaptive films that change shade depending on outside lighting conditions.', price: 'Request a quote', icon: 'sun', image: '/assets/chameleon.png' },
    ],
  },
  {
    name: 'Electronics, Audio & Driver Tech',
    services: [
      { name: 'Car Audio Design & Tuning', description: 'Upgrading factory sound systems by installing premium speakers, subwoofers, amplifiers, and digital signal processors (DSPs).', price: 'Request a quote', icon: 'music', image: '/assets/car-audio.png' },
      { name: 'Infotainment & Screen Retrofitting', description: 'Integrating modern head units, Apple CarPlay, Android Auto modules, and larger touchscreens into older dashboards.', price: 'Request a quote', icon: 'music', image: '/assets/infotainment.png' },
      { name: 'Dash Cam & Radar Installation', description: 'Hardwiring front and rear-facing security cameras and radar detectors cleanly into the car\'s fuse box to hide all dangling cables.', price: 'From KES 4,500', icon: 'camera', image: '/assets/dashcam-radar.png' },
      { name: 'Parking Sensors & Backup Cameras', description: 'Drilling and mounting proximity sensors or rearview camera systems into vehicles lacking factory parking assist.', price: 'Request a quote', icon: 'camera', image: '/assets/parking-sensors.png' },
      { name: 'Ambient Lighting Integration', description: 'Routing fiber-optic LED light strips into doors, footwells, and dashboards to simulate high-end luxury interior ambient systems.', price: 'Request a quote', icon: 'sparkles', image: '/assets/ambient-lighting.png' },
    ],
  },
  {
    name: 'Utility, Comfort & Travel Expansion',
    services: [
      { name: 'Roof Box & Rack Mounting', description: 'Professionally measuring, assembling, and mounting structural base racks, bicycle carriers, ski mounts, and rooftop cargo boxes.', price: 'Request a quote', icon: 'sparkles', image: '/assets/rack-mounting.png' },
      { name: 'Custom Towbar Installation', description: 'Bolting vehicle-specific trailer hitches and wiring the corresponding 7-pin or 13-pin electrical plugs for towing trailers or mounting hitch bike racks.', price: 'Request a quote', icon: 'sparkles', image: '/assets/towbar.png' },
      { name: 'Interior Tailoring & Protection', description: 'Sourcing and cutting exact-fit all-weather rubber floor mats, thick trunk liners, and heavy-duty custom seat covers.', price: 'Request a quote', icon: 'shield', image: '/assets/interior-tailoring.png' },
      { name: 'Sound Dampening (Acoustic Insulation)', description: 'Stripping the interior panels, floors, and doors to apply heavy butyl and foam sheets that dramatically isolate road, tire, and wind noise.', price: 'Request a quote', icon: 'music', image: '/assets/sound-dampening.png' },
    ],
  },
  {
    name: 'Vehicle Security & Comfort Electronics',
    services: [
      { name: 'Remote Start Systems', description: 'Installing bypass modules that allow drivers to start their engine remotely from a key fob or smartphone app to pre-heat or pre-cool the cabin.', price: 'Request a quote', icon: 'sparkles', image: '/assets/remote-start.png' },
      { name: 'GPS Tracking & Fleet Systems', description: 'Concealing anti-theft tracking hardware inside the chassis to monitor live location data and disable ignition remotely.', price: 'Request a quote', icon: 'shield', image: '/assets/gps-tracking.png' },
      { name: 'Advanced Car Alarms & Immobilizers', description: 'Retrofitting proximity sensors, glass-break detectors, and custom digital kill-switches to block sophisticated relay-theft methods.', price: 'Request a quote', icon: 'shield', image: '/assets/immobilizers.png' },
    ],
  },
];
export const services: Service[] = serviceGroups.flatMap((group) =>
  group.services.map((service) => ({ ...service, category: group.name })),
);
export const jobs = [
  { id: 'EV-024', customer: 'James Mwangi', initials: 'JM', vehicle: 'Toyota Prado TX · 2019', service: 'Window tinting', date: 'Today', time: '09:00', status: 'In progress', total: 24000, paid: 12000 },
  { id: 'EV-025', customer: 'Sarah Wanjiku', initials: 'SW', vehicle: 'Mazda CX-5 · 2022', service: 'Dashcam installation', date: 'Today', time: '13:30', status: 'Confirmed', total: 12500, paid: 6500 },
  { id: 'EV-026', customer: 'Brian Kamau', initials: 'BK', vehicle: 'Honda Civic · 2018', service: 'Car audio', date: 'Tomorrow', time: '10:00', status: 'Confirmed', total: 38000, paid: 19000 },
  { id: 'EV-027', customer: 'Alex M.', initials: 'AM', vehicle: 'Subaru Forester · 2020', service: 'Tint + accessories', date: 'Wed, 25 Nov', time: '11:00', status: 'Awaiting deposit', total: 32000, paid: 0 },
  { id: 'EV-028', customer: 'Jane Njeri', initials: 'JN', vehicle: 'Toyota Harrier · 2021', service: 'Paint protection film', date: 'Thu, 26 Nov', time: '09:30', status: 'Completed', total: 58000, paid: 58000 },
];
export const enquiries = [
  { id: 'EN-118', name: 'Alex M.', initials: 'AM', phone: '+254 712 345 678', vehicle: 'Subaru Forester · 2020', service: 'Window tinting', date: '20 min ago', status: 'New', note: 'Hi, I would like to tint my windows. Could you share options and pricing?' },
  { id: 'EN-117', name: 'Brian K.', initials: 'BK', phone: '+254 722 111 402', vehicle: 'Honda Civic · 2018', service: 'Car audio', date: '1 hr ago', status: 'Contacted', note: 'Interested in a speaker upgrade and installation.' },
  { id: 'EN-116', name: 'Jane W.', initials: 'JW', phone: '+254 733 201 550', vehicle: 'Toyota Harrier · 2021', service: 'PPF', date: 'Yesterday', status: 'Quoted', note: 'Looking for protection on the front of the vehicle.' },
  { id: 'EN-115', name: 'David O.', initials: 'DO', phone: '+254 701 555 920', vehicle: 'Mercedes C-Class · 2017', service: 'Dashcam', date: 'Yesterday', status: 'New', note: 'Can you install a front and rear dashcam?' },
  { id: 'EN-114', name: 'Mary N.', initials: 'MN', phone: '+254 711 900 432', vehicle: 'Nissan X-Trail · 2020', service: 'Window tinting', date: '2 days ago', status: 'Booked', note: 'Asked about tint shades and heat reduction.' },
];
export const customers = [
  { name: 'James Mwangi', initials: 'JM', phone: '+254 712 440 100', vehicle: 'Toyota Prado TX · 2019', jobs: 2, last: 'Today', amount: 'KES 24,000' },
  { name: 'Sarah Wanjiku', initials: 'SW', phone: '+254 722 889 211', vehicle: 'Mazda CX-5 · 2022', jobs: 1, last: 'Today', amount: 'KES 12,500' },
  { name: 'Brian Kamau', initials: 'BK', phone: '+254 722 111 402', vehicle: 'Honda Civic · 2018', jobs: 3, last: '24 Nov', amount: 'KES 38,000' },
  { name: 'Jane Njeri', initials: 'JN', phone: '+254 733 201 550', vehicle: 'Toyota Harrier · 2021', jobs: 2, last: '26 Nov', amount: 'KES 58,000' },
  { name: 'Alex M.', initials: 'AM', phone: '+254 712 345 678', vehicle: 'Subaru Forester · 2020', jobs: 0, last: 'New enquiry', amount: '—' },
];
export const formatKES = (n:number) => `KES ${n.toLocaleString('en-KE')}`;
