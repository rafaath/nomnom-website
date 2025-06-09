export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} NomNom. All rights reserved.
      </div>
    </footer>
  );
}
