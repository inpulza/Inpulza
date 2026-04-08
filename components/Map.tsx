export default function Map() {
  return (
    <section className="flex w-full flex-col items-center justify-center py-[60px] md:py-[100px]">
      <div className="flex w-full flex-col items-center overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=B%26O%20Trust%20services,%204811%20NW%2079th%20Ave%20%232,%20Doral,%20FL%2033166+(B%26O%20Trust%20services)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full grayscale filter transition-all duration-500 hover:grayscale-0"
        ></iframe>
      </div>
    </section>
  );
}
