import imgLogo from "figma:asset/eba2245e47fe6fe2437d1915e31d85d293410cef.png";

export function Footer() {
  return (
    <footer className="bg-[#101828] text-white pt-12 pb-8 mt-32">
      <div className="max-w-[1388px] mx-auto px-16">
        <div className="grid grid-cols-4 gap-16 mb-12">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={imgLogo} alt="KPRIET" className="w-7 h-7" />
              <span className="text-xl font-bold">KPRIET</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your intelligent campus guide. Never miss an event or opportunity again.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#upcoming" className="text-sm text-gray-400 hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Clubs</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">About us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Technical</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Cultural</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Sports</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Arts</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">kai@college.edu</li>
              <li className="text-sm text-gray-400">Student Center, Room 101</li>
              <li className="text-sm text-gray-400">Campus Hotline: 555-0123</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-400 text-center">
            © 2026 KPRIET. Making campus life easier for everyone.
          </p>
        </div>
      </div>
    </footer>
  );
}
