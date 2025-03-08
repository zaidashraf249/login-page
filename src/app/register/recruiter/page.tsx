"use client"

import { useState } from "react"
import Link from "next/link"
import { Code, Eye, EyeOff, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RecruiterRegisterPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* Header */}
      <header className="px-4 py-4 border-b border-slate-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-sky-500" />
            <span className="font-bold text-xl text-white">Tech Hackers</span>
          </div>
          <div className="flex gap-2">
            <Link href="/">
              <Button variant="outline" className="text-sky-500 border-sky-500 hover:bg-sky-950">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="outline" className="text-emerald-500 border-emerald-500 hover:bg-emerald-950">
                Register as Candidate
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 py-8">
        <Card className="w-full max-w-2xl bg-slate-800 border-slate-700">
          <CardHeader>
            <div className="flex items-center justify-center mb-2">
              <Building className="h-10 w-10 text-sky-500" />
            </div>
            <h1 className="text-2xl font-bold text-center text-white">Recruiter Registration</h1>
            <p className="text-center text-slate-400 mt-1">
              Create your recruiter account to post jobs and find talent
            </p>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              {/* Personal & Company Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-sky-500 border-b border-slate-700 pb-2">
                  Personal & Company Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium text-slate-300">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      className="bg-slate-700 border-slate-600 text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-sm font-medium text-slate-300">
                      Company Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="companyName"
                      placeholder="Enter your company name"
                      className="bg-slate-700 border-slate-600 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyEmail" className="text-sm font-medium text-slate-300">
                      Company Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="companyEmail"
                      type="email"
                      placeholder="company@example.com"
                      className="bg-slate-700 border-slate-600 text-white"
                      required
                    />
                    <p className="text-xs text-slate-400">Required for login and notifications</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-slate-300">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="bg-slate-700 border-slate-600 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-slate-300">
                      Password <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        className="bg-slate-700 border-slate-600 text-white pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    <p className="text-xs text-slate-400">Minimum 8 characters with letters and numbers</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-sm font-medium text-slate-300">
                      Company Website (Optional)
                    </Label>
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://yourcompany.com"
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Subscription Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-sky-500 border-b border-slate-700 pb-2">
                  Job Posting Access
                </h3>

                <div className="space-y-3">
                  <Label className="text-sm font-medium text-slate-300">
                    Select Subscription Level <span className="text-red-500">*</span>
                  </Label>

                  <RadioGroup defaultValue="basic" className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 border border-slate-700 rounded-md bg-slate-750 hover:bg-slate-700 transition-colors">
                      <RadioGroupItem value="basic" id="basic" className="mt-1" />
                      <div className="space-y-1">
                        <Label htmlFor="basic" className="text-white font-medium">
                          Basic (Free)
                        </Label>
                        <p className="text-sm text-slate-400">Post up to 3 jobs per month</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 border border-slate-700 rounded-md bg-slate-750 hover:bg-slate-700 transition-colors">
                      <RadioGroupItem value="standard" id="standard" className="mt-1" />
                      <div className="space-y-1">
                        <Label htmlFor="standard" className="text-white font-medium">
                          Standard ($49/month)
                        </Label>
                        <p className="text-sm text-slate-400">Post up to 10 jobs per month, featured listings</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 border border-slate-700 rounded-md bg-slate-750 hover:bg-slate-700 transition-colors">
                      <RadioGroupItem value="premium" id="premium" className="mt-1" />
                      <div className="space-y-1">
                        <Label htmlFor="premium" className="text-white font-medium">
                          Premium ($99/month)
                        </Label>
                        <p className="text-sm text-slate-400">
                          Unlimited job postings, featured listings, candidate search access
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 border border-slate-700 rounded-md bg-slate-750 hover:bg-slate-700 transition-colors">
                      <RadioGroupItem value="enterprise" id="enterprise" className="mt-1" />
                      <div className="space-y-1">
                        <Label htmlFor="enterprise" className="text-white font-medium">
                          Enterprise (Contact Sales)
                        </Label>
                        <p className="text-sm text-slate-400">Custom solutions for large organizations</p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-sm font-medium text-slate-300">
                    Company Industry <span className="text-red-500">*</span>
                  </Label>
                  <Select required>
                    <SelectTrigger id="industry" className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent className="text-white bg-slate-800 border-slate-700">
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 rounded border-slate-600 bg-slate-700 text-sky-600 focus:ring-sky-600"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-slate-300">
                    I agree to the{" "}
                    <Link href="/terms" className="text-sky-500 hover:text-sky-400">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-sky-500 hover:text-sky-400">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                  Create Recruiter Account
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-slate-400">
              Already have an account?{" "}
              <Link href="/" className="text-sky-500 hover:text-sky-400">
                Login here
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

