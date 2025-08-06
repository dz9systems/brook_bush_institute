import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tag, Search, CheckCircle, AlertTriangle, RefreshCw, Shield, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { searchTrainerByName, searchTrainerByCertificationId, type MockTrainer } from "@/data/mockTrainers";

export default function VerificationPage() {
  const [searchName, setSearchName] = useState("");
  const [searchNumber, setSearchNumber] = useState("");
  const [searchResults, setSearchResults] = useState<MockTrainer[]>([]);
  const [showNoResults, setShowNoResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const { toast } = useToast();

  const handleSearchByName = async () => {
    if (!searchName.trim()) {
      toast({
        title: "Search Required",
        description: "Please enter a trainer's first and last name.",
        variant: "destructive",
      });
      return;
    }

    setIsSearching(true);
    setShowNoResults(false);
    setSearchResults([]);

    // Simulate API delay for realistic experience
    setTimeout(() => {
      const results = searchTrainerByName(searchName);

      if (results.length > 0) {
        setSearchResults(results);
        setShowNoResults(false);
      } else {
        setSearchResults([]);
        setShowNoResults(true);
        toast({
          title: "No Results Found",
          description: "The trainer name you searched for could not be found in our database.",
          variant: "destructive",
        });
      }
      setIsSearching(false);
    }, 800);
  };

  const handleSearchByNumber = async () => {
    if (!searchNumber.trim()) {
      toast({
        title: "Search Required",
        description: "Please enter a certification ID or number.",
        variant: "destructive",
      });
      return;
    }

    setIsSearching(true);
    setShowNoResults(false);
    setSearchResults([]);

    // Simulate API delay for realistic experience
    setTimeout(() => {
      const result = searchTrainerByCertificationId(searchNumber);

      if (result) {
        setSearchResults([result]);
        setShowNoResults(false);
      } else {
        setSearchResults([]);
        setShowNoResults(true);
        toast({
          title: "No Results Found",
          description: "The certification number you searched for could not be found in our database.",
          variant: "destructive",
        });
      }
      setIsSearching(false);
    }, 800);
  };

  const handleClearSearch = () => {
    setSearchResults([]);
    setShowNoResults(false);
    setSearchName("");
    setSearchNumber("");
  };

  const formatDate = (dateString: string) => {
    // Parse YYYY-MM-DD format manually to avoid timezone issues
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day); // month is 0-indexed
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <CardContent className="p-0">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Tag className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Trainer Certification Verification</h1>
              <p className="text-lg text-gray-600">Verify the credentials of certified personal trainers and movement specialists</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Search Options</h2>

                {/* Search by Name */}
                <div className="mb-6">
                  <Label htmlFor="searchName" className="block text-sm font-medium text-gray-700 mb-2">
                    Search by Trainer Name
                  </Label>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <Input
                      id="searchName"
                      type="text"
                      placeholder="Enter trainer's first and last name"
                      value={searchName}
                      onChange={(e) => setSearchName(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSearchByName()}
                      className="flex-1"
                    />
                    <Button
                      onClick={handleSearchByName}
                      disabled={isSearching}
                      className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
                    >
                      {isSearching ? (
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <Search className="w-4 h-4 mr-2" />
                      )}
                      Search
                    </Button>
                  </div>
                </div>

                {/* Divider */}
                <div className="flex items-center mb-6">
                  <div className="flex-1 border-t border-gray-300"></div>
                  <span className="px-3 text-sm text-gray-500 bg-gray-50">OR</span>
                  <div className="flex-1 border-t border-gray-300"></div>
                </div>

                {/* Search by Certification Number */}
                <div>
                  <Label htmlFor="searchNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Search by Certification Number
                  </Label>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <Input
                      id="searchNumber"
                      type="text"
                      placeholder="Enter certification ID or number"
                      value={searchNumber}
                      onChange={(e) => setSearchNumber(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSearchByNumber()}
                      className="flex-1"
                    />
                    <Button
                      onClick={handleSearchByNumber}
                      disabled={isSearching}
                      className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
                    >
                      {isSearching ? (
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <Search className="w-4 h-4 mr-2" />
                      )}
                      Search
                    </Button>
                  </div>
                </div>
              </div>

              {/* Search Results */}
              {(searchResults.length > 0 || showNoResults) && (
                <div className="mb-6">
                  {searchResults.length > 0 && (
                    <div className="space-y-4">
                      {searchResults.length > 1 && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {searchResults.length} Trainers Found
                          </h3>
                          <p className="text-sm text-gray-600">
                            Multiple trainers match your search criteria.
                          </p>
                        </div>
                      )}

                      {searchResults.map((trainer, index) => (
                        <div key={trainer.certificationId} className="bg-green-50 border border-green-200 rounded-lg p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Certification Verified {searchResults.length > 1 && `(${index + 1})`}
                              </h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="font-medium text-gray-700">Trainer Name:</span>
                                  <span className="ml-2 text-gray-900">{trainer.firstName} {trainer.lastName}</span>
                                </div>
                                <div>
                                  <span className="font-medium text-gray-700">Certification Type:</span>
                                  <span className="ml-2 text-gray-900">{trainer.certificationType}</span>
                                </div>
                                <div>
                                  <span className="font-medium text-gray-700">Issue Date:</span>
                                  <span className="ml-2 text-gray-900">{trainer.issueDate}</span>
                                </div>
                                <div>
                                  <span className="font-medium text-gray-700">Certification ID:</span>
                                  <span className="ml-2 text-gray-900">{trainer.certificationId}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {showNoResults && searchResults.length === 0 && (
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                            <AlertTriangle className="w-6 h-6 text-orange-600" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Results Found</h3>
                          <p className="text-gray-700 mb-4">The trainer or certification number you searched for could not be found in our database.</p>
                          <Button
                            onClick={handleClearSearch}
                            variant="ghost"
                            className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium"
                          >
                            <RefreshCw className="w-4 h-4 mr-2" />
                            Clear Search and Try Again
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <Shield className="w-5 h-5 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Verified Credentials</h3>
                  </div>
                  <p className="text-sm text-gray-700">All certifications are verified against our official database and meet industry standards.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <Clock className="w-5 h-5 text-gray-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Real-Time Verification</h3>
                  </div>
                  <p className="text-sm text-gray-700">Get instant verification results with up-to-date certification status information.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
