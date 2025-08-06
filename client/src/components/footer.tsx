import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { 
  SiGoogle, 
  SiApple, 
  SiFacebook, 
  SiInstagram, 
  SiX, 
  SiLinkedin, 
  SiYoutube, 
  SiTiktok 
} from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Sign Up Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Become a member</h3>
              <p className="text-gray-600">Unlimited Access | Cancel Anytime</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" className="flex items-center justify-center">
                <SiGoogle className="w-5 h-5 text-red-500 mr-3" />
                Sign Up With Google
              </Button>
              <Button variant="default" className="bg-black hover:bg-gray-800 flex items-center justify-center">
                <SiApple className="w-5 h-5 text-white mr-3" />
                Sign Up With Apple
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 flex items-center justify-center">
                <Mail className="w-4 h-4 mr-3" />
                Sign Up with Email
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {/* Education */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Education</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="https://brookbushinstitute.com/courses" className="hover:text-blue-600 transition-colors">Courses</a></li>
              <li><a href="https://brookbushinstitute.com/articles" className="hover:text-blue-600 transition-colors">Articles</a></li>
              <li><a href="https://brookbushinstitute.com/videos" className="hover:text-blue-600 transition-colors">Videos</a></li>
              <li><a href="https://brookbushinstitute.com/workshops" className="hover:text-blue-600 transition-colors">Workshops</a></li>
              <li><a href="https://brookbushinstitute.com/webinars" className="hover:text-blue-600 transition-colors">Webinars</a></li>
            </ul>
          </div>

          {/* Additional Features */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Additional Features</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="https://brookbushinstitute.com/referrals/program" className="hover:text-blue-600 transition-colors">Referral Program</a></li>
              <li><a href="https://brookbushinstitute.com/team-membership" className="hover:text-blue-600 transition-colors">Team Membership</a></li>
              <li><a href="https://brookbushinstitute.com/ai-tutor" className="hover:text-blue-600 transition-colors">AI Tutor</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="https://brookbushinstitute.com/about" className="hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="https://brookbushinstitute.com/partners" className="hover:text-blue-600 transition-colors">Partners</a></li>
              <li><a href="https://brookbushinstitute.com/accreditations" className="hover:text-blue-600 transition-colors">Accreditations</a></li>
              <li><a href="https://brookbushinstitute.com/help-center" className="hover:text-blue-600 transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Continuing Education */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Continuing Education by Profession</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="https://brookbushinstitute.com/info/certified-athletic-trainers" className="hover:text-blue-600 transition-colors">Certified Athletic Trainers</a></li>
              <li><a href="https://brookbushinstitute.com/info/athletic-therapists" className="hover:text-blue-600 transition-colors">Athletic Therapists (Canada)</a></li>
              <li><a href="https://brookbushinstitute.com/info/personal-trainer-continuing-education" className="hover:text-blue-600 transition-colors">Certified Personal Trainers</a></li>
              <li><a href="https://brookbushinstitute.com/info/chiropractors" className="hover:text-blue-600 transition-colors">Chiropractors (DC)</a></li>
              <li><a href="https://brookbushinstitute.com/info/massage-therapists" className="hover:text-blue-600 transition-colors">Licensed Massage Therapists (LMTs)</a></li>
              <li><a href="https://brookbushinstitute.com/info/occupational-therapists" className="hover:text-blue-600 transition-colors">Occupational Therapists</a></li>
              <li><a href="https://brookbushinstitute.com/info/PT-PTA-CE" className="hover:text-blue-600 transition-colors">Physical Therapists and Physical Therapy Assistants</a></li>
              <li><a href="https://brookbushinstitute.com/info/PT-PTA-CE" className="hover:text-blue-600 transition-colors">Physiotherapist and Physiotherapist Assistant</a></li>
              <li><a href="https://brookbushinstitute.com/info/massage-therapists" className="hover:text-blue-600 transition-colors">Registered Massage Therapist</a></li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Certifications</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="https://brookbushinstitute.com/certifications/cpt" className="hover:text-blue-600 transition-colors">Certified Personal Trainer (CPT) Certification</a></li>
              <li><a href="https://brookbushinstitute.com/certifications/hms" className="hover:text-blue-600 transition-colors">Human Movement Specialist (HMS) certification</a></li>
              <li><a href="https://brookbushinstitute.com/certifications/imt" className="hover:text-blue-600 transition-colors">Integrated Manual Therapist (IMT) Certification</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Are you looking for additional help?</h4>
            <p className="text-sm text-gray-600 mb-4">Our team is here to help you find the right answer for your question.</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-sm">
              Contact Support
            </Button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-gray-600 mb-4 md:mb-0">
              © 2025 Brookbush Institute, Inc. All rights reserved.
              <div className="mt-2 flex space-x-4">
                <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Terms Of Service</a>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/BrentBrookbushHMS" className="text-gray-600 hover:text-blue-600 transition-colors">
                <SiFacebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/brookbushinstitute" className="text-gray-600 hover:text-blue-600 transition-colors">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/brookbush-institute/" className="text-gray-600 hover:text-blue-600 transition-colors">
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@BrookbushInstitute" className="text-gray-600 hover:text-blue-600 transition-colors">
                <SiYoutube className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@brookbushinstitute" className="text-gray-600 hover:text-blue-600 transition-colors">
                <SiTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
