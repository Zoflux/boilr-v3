import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import imprintImage from "@/assets/imprint.png";

/**
 * Imprint page component
 * 
 * This component displays the legal imprint information with:
 * - Navigation header for easy navigation back to main pages
 * - The imprint image containing all legal details
 * - Footer for consistent site navigation
 */
const Imprint = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Legal Notice</h1>

        {/* Imprint Image - Centered */}
        <div className="text-center">
          <img
            src={imprintImage}
            alt="Imprint - Legal Notice with company information, registration details, and contact information"
            className="mx-auto max-w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Imprint;