"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Briefcase, MapPin, Clock, Users, Edit, Trash2, Eye, Code } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Logo } from "@/components/logo"

// Mock data for job listings
const mockJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    applicants: 24,
    posted: "2 days ago",
    status: "Active",
    description: "We're looking for an experienced Frontend Developer to join our team...",
    requirements: [
      "5+ years of experience with React",
      "Strong TypeScript skills",
      "Experience with Next.js",
      "CSS/SCSS expertise",
    ],
  },
  {
    id: 2,
    title: "UX/UI Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
    applicants: 18,
    posted: "1 week ago",
    status: "Active",
    description: "Join our design team to create beautiful and intuitive user experiences...",
    requirements: [
      "3+ years of UX/UI design experience",
      "Proficiency in Figma",
      "Portfolio showcasing UI work",
      "User research experience",
    ],
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    applicants: 12,
    posted: "3 days ago",
    status: "Active",
    description: "Help us build and maintain our cloud infrastructure and deployment pipelines...",
    requirements: [
      "Experience with AWS/GCP",
      "Kubernetes expertise",
      "CI/CD pipeline knowledge",
      "Infrastructure as Code",
    ],
  },
  {
    id: 4,
    title: "Product Manager",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time",
    applicants: 31,
    posted: "2 weeks ago",
    status: "Closed",
    description: "Lead product development initiatives and work closely with engineering and design...",
    requirements: [
      "3+ years in product management",
      "Technical background",
      "Agile methodology experience",
      "Strong communication skills",
    ],
  },
]

export default function JobsPage() {
  const [jobs, setJobs] = useState(mockJobs)
  const [searchQuery, setSearchQuery] = useState("")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [newJob, setNewJob] = useState({
    title: "",
    department: "",
    location: "",
    type: "Full-time",
    description: "",
  })
  const { toast } = useToast()

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleCreateJob = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!newJob.title || !newJob.department || !newJob.location || !newJob.description) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    // Create new job
    const createdJob = {
      id: jobs.length + 1,
      ...newJob,
      applicants: 0,
      posted: "Just now",
      status: "Active",
      requirements: ["New requirement"],
    }

    setJobs([createdJob, ...jobs])
    setIsCreateDialogOpen(false)
    setNewJob({
      title: "",
      department: "",
      location: "",
      type: "Full-time",
      description: "",
    })

    toast({
      title: "Job posting created",
      description: "Your job posting has been published successfully",
    })
  }

  const handleDeleteJob = (id: number) => {
    setJobs(jobs.filter((job) => job.id !== id))
    toast({
      title: "Job posting deleted",
      description: "The job posting has been removed",
    })
  }

  const handleStatusChange = (id: number, newStatus: string) => {
    setJobs(jobs.map((job) => (job.id === id ? { ...job, status: newStatus } : job)))
    toast({
      title: "Status updated",
      description: `Job status changed to ${newStatus}`,
    })
  }

  return (
    <div className="min-h-screen bg-[#0a0d1c]" style={{ backgroundColor: "#0a0d1c" }}>
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
            <Link href="/jobs" className="text-sm font-medium text-blue-600" style={{ color: "#2563eb" }}>
              Job Postings
            </Link>
          </nav>
        </div>
      </header>

      <div className="container max-w-6xl py-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white" style={{ color: "#ffffff" }}>
              Job Postings
            </h1>
            <p className="text-gray-400" style={{ color: "#9ca3af" }}>
              Create, manage, and track job listings across your organization
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link href="/">
              <Button
                variant="outline"
                className="bg-transparent text-white border-gray-700 hover:bg-gray-800"
                style={{ backgroundColor: "transparent", color: "#ffffff", borderColor: "#374151" }}
              >
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
          <div className="relative w-full md:max-w-sm">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              style={{ color: "#9ca3af" }}
            />
            <Input
              placeholder="Search jobs..."
              className="pl-10 bg-[#111827] border-gray-700 text-white"
              style={{ backgroundColor: "#111827", borderColor: "#374151", color: "#ffffff" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button
                className="w-full md:w-auto bg-blue-600 text-white hover:bg-blue-700"
                style={{ backgroundColor: "#2563eb", color: "white" }}
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Job Posting
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] bg-[#111827]" style={{ backgroundColor: "#111827" }}>
              <form onSubmit={handleCreateJob}>
                <DialogHeader>
                  <DialogTitle className="text-white" style={{ color: "#ffffff" }}>
                    Create New Job Posting
                  </DialogTitle>
                  <DialogDescription className="text-gray-400" style={{ color: "#9ca3af" }}>
                    Fill in the details below to create a new job posting. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="title" className="text-right text-white" style={{ color: "#ffffff" }}>
                      Job Title
                    </Label>
                    <Input
                      id="title"
                      placeholder="e.g. Senior Frontend Developer"
                      className="col-span-3 bg-[#1f2937] border-gray-700 text-white"
                      style={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#ffffff" }}
                      value={newJob.title}
                      onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="department" className="text-right text-white" style={{ color: "#ffffff" }}>
                      Department
                    </Label>
                    <Select
                      value={newJob.department}
                      onValueChange={(value) => setNewJob({ ...newJob, department: value })}
                    >
                      <SelectTrigger
                        className="col-span-3 bg-[#1f2937] border-gray-700 text-white"
                        style={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#ffffff" }}
                      >
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1f2937]" style={{ backgroundColor: "#1f2937" }}>
                        <SelectItem value="Engineering">Engineering</SelectItem>
                        <SelectItem value="Design">Design</SelectItem>
                        <SelectItem value="Product">Product</SelectItem>
                        <SelectItem value="Marketing">Marketing</SelectItem>
                        <SelectItem value="Sales">Sales</SelectItem>
                        <SelectItem value="HR">HR</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="location" className="text-right text-white" style={{ color: "#ffffff" }}>
                      Location
                    </Label>
                    <Input
                      id="location"
                      placeholder="e.g. Remote, New York, NY"
                      className="col-span-3 bg-[#1f2937] border-gray-700 text-white"
                      style={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#ffffff" }}
                      value={newJob.location}
                      onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="type" className="text-right text-white" style={{ color: "#ffffff" }}>
                      Job Type
                    </Label>
                    <Select value={newJob.type} onValueChange={(value) => setNewJob({ ...newJob, type: value })}>
                      <SelectTrigger
                        className="col-span-3 bg-[#1f2937] border-gray-700 text-white"
                        style={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#ffffff" }}
                      >
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1f2937]" style={{ backgroundColor: "#1f2937" }}>
                        <SelectItem value="Full-time">Full-time</SelectItem>
                        <SelectItem value="Part-time">Part-time</SelectItem>
                        <SelectItem value="Contract">Contract</SelectItem>
                        <SelectItem value="Internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-start gap-4">
                    <Label htmlFor="description" className="text-right pt-2 text-white" style={{ color: "#ffffff" }}>
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the job role, responsibilities, and requirements..."
                      className="col-span-3 bg-[#1f2937] border-gray-700 text-white"
                      style={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#ffffff" }}
                      rows={5}
                      value={newJob.description}
                      onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsCreateDialogOpen(false)}
                    className="bg-transparent text-white border-gray-700 hover:bg-gray-800"
                    style={{ backgroundColor: "transparent", color: "#ffffff", borderColor: "#374151" }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-blue-600 text-white hover:bg-blue-700"
                    style={{ backgroundColor: "#2563eb", color: "white" }}
                  >
                    Save Job Posting
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Tabs defaultValue="all" className="mt-6">
          <TabsList className="grid w-full grid-cols-4 bg-[#111827]" style={{ backgroundColor: "#111827" }}>
            <TabsTrigger
              value="all"
              className="text-gray-400 data-[state=active]:bg-[#1f2937] data-[state=active]:text-white"
              style={{ color: "#9ca3af" }}
            >
              All Jobs ({jobs.length})
            </TabsTrigger>
            <TabsTrigger
              value="active"
              className="text-gray-400 data-[state=active]:bg-[#1f2937] data-[state=active]:text-white"
              style={{ color: "#9ca3af" }}
            >
              Active
            </TabsTrigger>
            <TabsTrigger
              value="draft"
              className="text-gray-400 data-[state=active]:bg-[#1f2937] data-[state=active]:text-white"
              style={{ color: "#9ca3af" }}
            >
              Draft
            </TabsTrigger>
            <TabsTrigger
              value="closed"
              className="text-gray-400 data-[state=active]:bg-[#1f2937] data-[state=active]:text-white"
              style={{ color: "#9ca3af" }}
            >
              Closed
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <Card
                    key={job.id}
                    className="border border-gray-800 shadow-lg overflow-hidden bg-[#111827]"
                    style={{ backgroundColor: "#111827", borderColor: "#1f2937" }}
                  >
                    <CardHeader className="pb-3 bg-[#111827]" style={{ backgroundColor: "#111827" }}>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-white" style={{ color: "#ffffff" }}>
                            {job.title}
                          </CardTitle>
                          <div className="flex items-center mt-1 text-sm text-gray-400" style={{ color: "#9ca3af" }}>
                            <Briefcase className="h-4 w-4 mr-1" />
                            <span>{job.department}</span>
                            <span className="mx-2">•</span>
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{job.location}</span>
                            <span className="mx-2">•</span>
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                        <Badge
                          className={
                            job.status === "Active" ? "bg-green-900/30 text-green-400" : "bg-gray-800 text-gray-400"
                          }
                          style={
                            job.status === "Active"
                              ? { backgroundColor: "rgba(6, 78, 59, 0.3)", color: "#4ade80" }
                              : { backgroundColor: "#1f2937", color: "#9ca3af" }
                          }
                        >
                          {job.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="bg-[#111827]" style={{ backgroundColor: "#111827" }}>
                      <p className="text-sm text-gray-400 mb-4" style={{ color: "#9ca3af" }}>
                        {job.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-white" style={{ color: "#ffffff" }}>
                          Requirements:
                        </h4>
                        <ul className="text-sm space-y-1 text-gray-400" style={{ color: "#9ca3af" }}>
                          {job.requirements.map((req, index) => (
                            <li key={`req-${job.id}-${index}`} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter
                      className="flex justify-between border-t border-gray-800 pt-4 bg-[#111827]"
                      style={{ backgroundColor: "#111827", borderColor: "#1f2937" }}
                    >
                      <div className="flex items-center text-sm text-gray-400" style={{ color: "#9ca3af" }}>
                        <Users className="h-4 w-4 mr-1" />
                        <span>{job.applicants} Applicants</span>
                        <span className="mx-2">•</span>
                        <span>Posted {job.posted}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-transparent text-white border-gray-700 hover:bg-gray-800"
                          style={{ backgroundColor: "transparent", color: "#ffffff", borderColor: "#374151" }}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-transparent text-white border-gray-700 hover:bg-gray-800"
                          style={{ backgroundColor: "transparent", color: "#ffffff", borderColor: "#374151" }}
                        >
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-transparent text-red-400 border-gray-700 hover:bg-gray-800"
                          style={{ backgroundColor: "transparent", color: "#f87171", borderColor: "#374151" }}
                          onClick={() => handleDeleteJob(job.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <Briefcase className="h-12 w-12 mx-auto text-gray-600" style={{ color: "#4b5563" }} />
                  <h3 className="mt-4 text-lg font-medium text-white" style={{ color: "#ffffff" }}>
                    No job postings found
                  </h3>
                  <p className="text-sm text-gray-400 mt-2" style={{ color: "#9ca3af" }}>
                    Try adjusting your search or create a new job posting
                  </p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Other tab contents with similar styling */}
          <TabsContent value="active">{/* Similar content with dark mode styling */}</TabsContent>
          <TabsContent value="draft">{/* Similar content with dark mode styling */}</TabsContent>
          <TabsContent value="closed">{/* Similar content with dark mode styling */}</TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

