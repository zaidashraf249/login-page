"use client"

import type React from "react"


import { useState } from "react"
import Link from "next/link"
import { Code, Eye, EyeOff, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name)
    } else {
      setFileName(null)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* Header */}
      <header className="px-4 py-4 border-b border-slate-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-sky-500" />
            <span className="font-bold text-xl text-white">Tech Hackers</span>
          </div>
          <Link href="/">
            <Button variant="outline" className="text-sky-500 border-sky-500 hover:bg-sky-950">
              Login
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 py-8">
        <Card className="w-full max-w-3xl bg-slate-800 border-slate-700">
          <CardHeader>
            <h1 className="text-2xl font-bold text-center text-white">Candidate Registration</h1>
            <p className="text-center text-slate-400 mt-1">Create your job seeker account to find your dream job</p>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-sky-500 border-b border-slate-700 pb-2">
                  Personal Information
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
                    <Label htmlFor="email" className="text-sm font-medium text-slate-300">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-slate-700 border-slate-600 text-white"
                      required
                    />
                    <p className="text-xs text-slate-400">Required for login and notifications</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-sm font-medium text-slate-300">
                        City <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="city"
                        placeholder="Enter your city"
                        className="bg-slate-700 border-slate-600 text-white"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state" className="text-sm font-medium text-slate-300">
                        State/Province <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="state"
                        placeholder="Enter your state/province"
                        className="bg-slate-700 border-slate-600 text-white"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-sm font-medium text-slate-300">
                        Country <span className="text-red-500">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger id="country" className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700 max-h-[200px] text-white">
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="in">India</SelectItem>
                          <SelectItem value="de">Germany</SelectItem>
                          <SelectItem value="fr">France</SelectItem>
                          <SelectItem value="jp">Japan</SelectItem>
                          <SelectItem value="cn">China</SelectItem>
                          <SelectItem value="br">Brazil</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="linkedin" className="text-sm font-medium text-slate-300">
                      LinkedIn Profile (Optional)
                    </Label>
                    <Input
                      id="linkedin"
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume" className="text-sm font-medium text-slate-300">
                    Resume Upload <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={handleFileChange}
                        required
                      />
                      <div className="flex items-center">
                        <Button
                          type="button"
                          variant="outline"
                          className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
                          onClick={() => document.getElementById("resume")?.click()}
                        >
                          <Upload className="mr-2 h-4 w-4" /> Choose File
                        </Button>
                        <span className="ml-3 text-sm text-slate-400">
                          {fileName ? fileName : "No file chosen (PDF/DOC format)"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Preferences */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-sky-500 border-b border-slate-700 pb-2">Job Preferences</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-sm font-medium text-slate-300">
                      Industry <span className="text-red-500 ">*</span>
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

                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-sm font-medium text-slate-300">
                      Desired Role <span className="text-red-500">*</span>
                    </Label>
                    <Select required>
                      <SelectTrigger id="role" className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent className="text-white bg-slate-800 border-slate-700">
                        <SelectItem value="software-engineer">Software Engineer</SelectItem>
                        <SelectItem value="data-scientist">Data Scientist</SelectItem>
                        <SelectItem value="product-manager">Product Manager</SelectItem>
                        <SelectItem value="ux-designer">UX Designer</SelectItem>
                        <SelectItem value="marketing">Marketing Specialist</SelectItem>
                        <SelectItem value="sales">Sales Representative</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-sm font-medium text-slate-300">
                      Experience Level <span className="text-red-500">*</span>
                    </Label>
                    <Select required>
                      <SelectTrigger id="experience" className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent className="text-white bg-slate-800 border-slate-700">
                        <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                        <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                        <SelectItem value="senior">Senior Level (6-9 years)</SelectItem>
                        <SelectItem value="lead">Lead/Manager (10+ years)</SelectItem>
                        <SelectItem value="executive">Executive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="jobType" className="text-sm font-medium text-slate-300">
                      Job Type <span className="text-red-500">*</span>
                    </Label>
                    <Select required>
                      <SelectTrigger id="jobType" className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent className="text-white bg-slate-800 border-slate-700">
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="freelance">Freelance</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo" className="text-sm font-medium text-slate-300">
                    Additional Information (Optional)
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    placeholder="Tell us more about your job preferences, skills, or any other information that might help us match you with the right opportunities."
                    className="bg-slate-700 border-slate-600 text-white min-h-[100px]"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                Create Account
              </Button>
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

