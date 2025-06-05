// src/components/Footer.jsx

export default function Footer() {
    return (
      <footer className="bg-lightgray text-charcoal py-6 px-6 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Navigation */}
          <nav className="flex space-x-6 mb-4 md:mb-0 text-sm font-body">
            <a href="/" className="hover:text-coral transition-colors">Home</a>
            <a href="/stories" className="hover:text-coral transition-colors">Stories</a>
            <a href="/submit" className="hover:text-coral transition-colors">Submit</a>
          </nav>
  
          {/* Copyright */}
          <p className="text-xs text-gray-600 font-body text-center md:text-right">
            © {new Date().getFullYear()} BaliLore.com — All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  


// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-inner">
//         <nav className="footer-nav">
//           <a href="/" className="footer-link">Home</a>
//           <a href="/stories" className="footer-link">Stories</a>
//           <a href="/submit" className="footer-link">Submit</a>
//         </nav>
//         <p className="footer-copy">
//           © {new Date().getFullYear()} BaliLore.com — All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }
