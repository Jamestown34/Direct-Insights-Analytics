const CEO = () => {
  return (
    <section id="ceo" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto flex items-start justify-start space-x-12">
        
        {/* CEO Image and Text */}
        <div className="flex flex-col items-start w-1/4">
          <img
            src="/images/ceo-image.png" // Replace with the correct image path
            alt="CEO Image"
            className="w-48 h-60 rounded-full object-cover mb-4" // Image size increased slightly
          />
          <h2 className="text-4xl font-bold mb-2">Atumonye James</h2>
          <p className="text-xl text-muted-foreground mb-4">CEO & Founder Direct Insights Technologies</p>
          <p className="text-lg text-muted-foreground">
            Welcome to Direct Insights Technologies! We're here to help you turn data into real business solutions. 
            Please fill out the form below and let’s get started on your project!
          </p>

          {/* Optional Button */}
          <a href="#contact">
            <button className="btn btn-primary mt-6">Get in Touch</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CEO;
