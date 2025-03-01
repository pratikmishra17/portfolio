export default function Footer() {
    return (
      <footer className="bg-gradient-to-b from-white to-blue-50 text-white py-6">
        
        <div className="mb-8 border-t border-gray-200"></div>
          <div className="mt-2 text-center text-gray-700 text-sm">
            <p>Built with Typescript, Tailwind and Next.js 
            <a className="hover:text-blue-400" title="Much love &lt;3">♥</a>
            </p>
            
          {/* © {new Date().getFullYear()} Pratik Mishra. All rights reserved. */}
          
        
        </div>
        
      </footer>
      
    );
}
