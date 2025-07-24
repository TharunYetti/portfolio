const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary py-8 border-t border-lightNavy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lightSlate text-center md:text-left">
              &copy; {currentYear} Tharun Yetti. All rights reserved.
            </p>
          </div>
          
          <div>
            <p className="text-lightSlate flex items-center justify-center gap-2">
              Designed & Built for Myself
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 