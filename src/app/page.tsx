import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Users, Briefcase, FileText, Code } from "lucide-react"
import { Logo } from "@/components/logo"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0d1c]" style={{ backgroundColor: "#0a0d1c" }}>
      <header
        className="sticky top-0 z-40 border-b border-gray-800 bg-[#0a0d1c]/95 backdrop-blur"
        style={{ backgroundColor: "rgba(10, 13, 28, 0.95)", borderColor: "#1f2937" }}
      >
        <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-sky-500" />
            <span className="font-bold text-xl text-white">Tech Hackers</span>
          </div>
          <nav className="ml-auto flex items-center gap-4">
            <Link
              href="/resume-upload"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
              style={{ color: "#374151" }}
            >
              Resume Analysis
            </Link>
            <Link
              href="/candidates"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
              style={{ color: "#374151" }}
            >
              Candidates
            </Link>
            <Link
              href="/jobs"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
              style={{ color: "#374151" }}
            >
              Job Postings
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className="bg-white text-gray-900 border-gray-300"
                style={{ backgroundColor: "white", color: "#111827", borderColor: "#d1d5db" }}
              >
                Sign In
              </Button>
            </Link>
            <Button
              size="sm"
              className="bg-blue-600 text-white hover:bg-blue-700"
              style={{ backgroundColor: "#2563eb", color: "white" }}
            >
              Sign Up
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1 bg-[#0a0d1c]" style={{ backgroundColor: "#0a0d1c" }}>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#0a0d1c] to-[#141829]"
          style={{ background: "linear-gradient(to bottom, #0a0d1c, #141829)" }}
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div
                  className="inline-block rounded-lg bg-blue-900/30 px-3 py-1 text-sm text-blue-400"
                  style={{ backgroundColor: "rgba(30, 64, 175, 0.3)", color: "#60a5fa" }}
                >
                  AI-Powered Recruitment
                </div>
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white"
                  style={{ color: "#ffffff" }}
                >
                  Transform Your Hiring Process with AI
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl" style={{ color: "#9ca3af" }}>
                  Streamline candidate selection, automate resume screening, and make data-driven hiring decisions with
                  our AI-powered recruitment platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/resume-upload">
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      style={{ backgroundColor: "#2563eb", color: "white" }}
                    >
                      Get Started
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-transparent text-white border-gray-700 hover:bg-gray-800"
                      style={{ backgroundColor: "transparent", color: "#ffffff", borderColor: "#374151" }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute -top-12 -left-12 h-64 w-64 bg-blue-500/10 rounded-full blur-3xl"
                  style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                />
                <div
                  className="absolute -bottom-12 -right-12 h-64 w-64 bg-blue-500/5 rounded-full blur-3xl"
                  style={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                />
                <div
                  className="relative bg-[#111827] rounded-2xl border border-gray-800 shadow-xl p-6 overflow-hidden"
                  style={{ backgroundColor: "#111827", borderColor: "#1f2937" }}
                >
                  <div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500"
                    style={{ background: "linear-gradient(to right, #2563eb, #3b82f6, #6366f1)" }}
                  />
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="h-10 w-10 rounded-full bg-blue-900/30 flex items-center justify-center"
                          style={{ backgroundColor: "rgba(30, 64, 175, 0.3)" }}
                        >
                          <FileText className="h-5 w-5 text-blue-400" style={{ color: "#60a5fa" }} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white" style={{ color: "#ffffff" }}>
                            Resume Analysis
                          </h3>
                          <p className="text-sm text-gray-400" style={{ color: "#9ca3af" }}>
                            AI-powered insights
                          </p>
                        </div>
                      </div>
                      <span
                        className="text-sm font-medium text-green-400 bg-green-900/30 px-2.5 py-0.5 rounded-full"
                        style={{ backgroundColor: "rgba(6, 78, 59, 0.3)", color: "#4ade80" }}
                      >
                        98% Accuracy
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-300">
                        <span>Resume Parsing</span>
                        <span className="font-medium">98%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-[98%] rounded-full" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-3">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-blue-400" />
                          <span className="text-sm font-medium text-gray-300">Candidates</span>
                        </div>
                        <p className="text-2xl font-bold mt-1 text-white">128</p>
                        <p className="text-xs text-gray-400">+12% this week</p>
                      </div>
                      <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-3">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-blue-400" />
                          <span className="text-sm font-medium text-gray-300">Jobs</span>
                        </div>
                        <p className="text-2xl font-bold mt-1 text-white">24</p>
                        <p className="text-xs text-gray-400">+3 new postings</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium">
                          JD
                        </div>
                        <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-medium">
                          KL
                        </div>
                        <div className="h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-medium">
                          MR
                        </div>
                        <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 text-xs font-medium">
                          +5
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 border-gray-700 text-gray-300 hover:bg-gray-800"
                      >
                        View All
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 bg-[#0c1022]" style={{ backgroundColor: "#0c1022" }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg bg-blue-900/30 px-3 py-1 text-sm text-blue-400"
                  style={{ backgroundColor: "rgba(30, 64, 175, 0.3)", color: "#60a5fa" }}
                >
                  Key Features
                </div>
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white"
                  style={{ color: "#ffffff" }}
                >
                  Streamline Your Recruitment Process
                </h2>
                <p
                  className="max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  style={{ color: "#9ca3af" }}
                >
                  Our AI-powered platform helps you find the best candidates faster and more efficiently.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 mt-12">
              <Card className="relative overflow-hidden border-none shadow-lg bg-[#111827] border-gray-800">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
                <CardHeader className="pb-2">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900/30">
                    <Upload className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-white">Bulk Resume Upload</CardTitle>
                  <CardDescription className="text-gray-400">
                    Upload multiple resumes at once for AI-based analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Drag & drop multiple files
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Supports PDF, DOCX, and TXT formats
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Batch processing with real-time progress
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Link href="/resume-upload">
                      <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                        Try It Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden border-none shadow-lg bg-[#111827] border-gray-800">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600" />
                <CardHeader className="pb-2">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/30">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-xl text-white">Candidate Selection</CardTitle>
                  <CardDescription className="text-gray-400">
                    AI-driven shortlisting based on job requirements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Intelligent matching algorithm
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Skills and experience analysis
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Cultural fit assessment
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Link href="/candidates">
                      <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                        Explore Candidates
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden border-none shadow-lg bg-[#111827] border-gray-800">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600" />
                <CardHeader className="pb-2">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-900/30">
                    <Briefcase className="h-6 w-6 text-amber-400" />
                  </div>
                  <CardTitle className="text-xl text-white">Job Posting</CardTitle>
                  <CardDescription className="text-gray-400">Create, edit, and manage job listings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Intuitive job creation interface
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      AI-recommended job descriptions
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Applicant tracking and management
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Link href="/jobs">
                      <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                        Manage Jobs
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0a0d1c]" style={{ backgroundColor: "#0a0d1c" }}>
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div
                  className="inline-block rounded-lg bg-blue-900/30 px-3 py-1 text-sm text-blue-400 mb-4"
                  style={{ backgroundColor: "rgba(30, 64, 175, 0.3)", color: "#60a5fa" }}
                >
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  AI-Powered Resume Analysis
                </h2>
                <p className="mt-4 text-gray-400 md:text-xl">
                  Our advanced AI technology analyzes resumes to extract key information, identify skills, and match
                  candidates to job requirements with incredible accuracy.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-900/30"
                      style={{ backgroundColor: "rgba(30, 64, 175, 0.3)" }}
                    >
                      <span className="font-bold text-blue-400">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Upload Resumes</h3>
                      <p className="text-sm text-gray-400">
                        Drag and drop multiple resumes or select files from your computer.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-900/30"
                      style={{ backgroundColor: "rgba(30, 64, 175, 0.3)" }}
                    >
                      <span className="font-bold text-blue-400">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">AI Analysis</h3>
                      <p className="text-sm text-gray-400">
                        Our AI parses resumes, extracts skills, experience, and education details.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-900/30"
                      style={{ backgroundColor: "rgba(30, 64, 175, 0.3)" }}
                    >
                      <span className="font-bold text-blue-400">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Match to Jobs</h3>
                      <p className="text-sm text-gray-400">
                        Candidates are automatically matched to job requirements with a match score.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-900/30"
                      style={{ backgroundColor: "rgba(30, 64, 175, 0.3)" }}
                    >
                      <span className="font-bold text-blue-400">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Review & Select</h3>
                      <p className="text-sm text-gray-400">
                        Review AI-ranked candidates and make data-driven hiring decisions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/resume-upload">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Try Resume Analysis
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div
                  className="absolute -top-8 -left-8 h-72 w-72 bg-blue-500/10 rounded-full blur-3xl"
                  style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                />
                <div
                  className="relative bg-[#111827] rounded-2xl border border-gray-800 shadow-xl overflow-hidden"
                  style={{ backgroundColor: "#111827", borderColor: "#1f2937" }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-white">Resume Analysis</h3>
                      <span
                        className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-green-900/30 text-green-400"
                        style={{ backgroundColor: "rgba(6, 78, 59, 0.3)", color: "#4ade80" }}
                      >
                        6 Resumes Processed
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div
                              className="h-8 w-8 rounded-full bg-blue-900/30 flex items-center justify-center"
                              style={{ backgroundColor: "rgba(30, 64, 175, 0.3)" }}
                            >
                              <span className="text-xs font-medium text-blue-400">AJ</span>
                            </div>
                            <span className="font-medium text-white">Alex Johnson.pdf</span>
                          </div>
                          <span className="text-sm font-medium text-green-400">92% Match</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-[92%] rounded-full" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div
                              className="h-8 w-8 rounded-full bg-purple-900/30 flex items-center justify-center"
                              style={{ backgroundColor: "rgba(91, 33, 182, 0.3)" }}
                            >
                              <span className="text-xs font-medium text-purple-400">JS</span>
                            </div>
                            <span className="font-medium text-white">Jamie Smith.pdf</span>
                          </div>
                          <span className="text-sm font-medium text-green-400">87% Match</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-[87%] rounded-full" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div
                              className="h-8 w-8 rounded-full bg-amber-900/30 flex items-center justify-center"
                              style={{ backgroundColor: "rgba(120, 53, 15, 0.3)" }}
                            >
                              <span className="text-xs font-medium text-amber-400">TW</span>
                            </div>
                            <span className="font-medium text-white">Taylor Wilson.pdf</span>
                          </div>
                          <span className="text-sm font-medium text-green-400">85% Match</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-[85%] rounded-full" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-800">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-white">Overall Match Rate</h4>
                          <p className="text-sm text-gray-400">Based on job requirements</p>
                        </div>
                        <div className="text-2xl font-bold text-blue-400">88%</div>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-3">
                        <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-2 text-center">
                          <div className="text-xs text-gray-400">Skills</div>
                          <div className="text-lg font-semibold text-white">92%</div>
                        </div>
                        <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-2 text-center">
                          <div className="text-xs text-gray-400">Experience</div>
                          <div className="text-lg font-semibold text-white">85%</div>
                        </div>
                        <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-2 text-center">
                          <div className="text-xs text-gray-400">Education</div>
                          <div className="text-lg font-semibold text-white">90%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-blue-900/10" style={{ backgroundColor: "rgba(30, 64, 175, 0.1)" }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Transform Your Hiring Process?
                </h2>
                <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                  Join thousands of companies using our AI-powered recruitment platform to find the best talent faster.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/resume-upload">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Get Started for Free
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-gray-700 text-white hover:bg-gray-800">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="border-t border-gray-800 bg-[#0a0d1c]"
        style={{ backgroundColor: "#0a0d1c", borderColor: "#1f2937" }}
      >
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">{"<"}</span>
              <span className="text-xl font-bold text-white">{">"}</span>
              <span className="text-xl font-bold text-white">Tech Hackers</span>
            </Link>
            <p className="text-sm text-gray-400" style={{ color: "#9ca3af" }}>
              AI-powered recruitment platform for modern HR teams.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 md:gap-12">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 py-6" style={{ borderColor: "#1f2937" }}>
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400" style={{ color: "#9ca3af" }}>
              &copy; {new Date().getFullYear()} Tech Hackers. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white" style={{ color: "#9ca3af" }}>
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white" style={{ color: "#9ca3af" }}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

