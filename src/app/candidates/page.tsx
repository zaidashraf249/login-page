"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search, Filter, Star, StarHalf, User, Briefcase, GraduationCap, Award } from "lucide-react"

// Mock data for candidates
const mockCandidates = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Frontend Developer",
    experience: "5 years",
    education: "B.S. Computer Science",
    matchScore: 92,
    skills: ["React", "TypeScript", "CSS", "Node.js"],
    status: "New",
  },
  {
    id: 2,
    name: "Jamie Smith",
    role: "UX Designer",
    experience: "3 years",
    education: "M.A. Design",
    matchScore: 87,
    skills: ["Figma", "User Research", "Prototyping", "UI Design"],
    status: "Reviewed",
  },
  {
    id: 3,
    name: "Taylor Wilson",
    role: "Full Stack Developer",
    experience: "7 years",
    education: "B.S. Software Engineering",
    matchScore: 85,
    skills: ["JavaScript", "Python", "React", "Django"],
    status: "Interviewed",
  },
  {
    id: 4,
    name: "Morgan Lee",
    role: "DevOps Engineer",
    experience: "4 years",
    education: "B.S. Information Technology",
    matchScore: 78,
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    status: "New",
  },
  {
    id: 5,
    name: "Casey Brown",
    role: "Data Scientist",
    experience: "2 years",
    education: "M.S. Data Science",
    matchScore: 76,
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
    status: "Reviewed",
  },
]

export default function CandidatesPage() {
  const [candidates, setCandidates] = useState(mockCandidates)
  const [minMatchScore, setMinMatchScore] = useState(70)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.matchScore >= minMatchScore &&
      (searchQuery === "" ||
        candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        candidate.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        candidate.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-800"
      case "Reviewed":
        return "bg-purple-100 text-purple-800"
      case "Interviewed":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="container max-w-6xl py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Candidate Selection</h1>
        <Link href="/">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Job Position</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Positions</SelectItem>
                    <SelectItem value="frontend">Frontend Developer</SelectItem>
                    <SelectItem value="backend">Backend Developer</SelectItem>
                    <SelectItem value="fullstack">Full Stack Developer</SelectItem>
                    <SelectItem value="ux">UX Designer</SelectItem>
                    <SelectItem value="devops">DevOps Engineer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Experience Level</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                    <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                    <SelectItem value="senior">Senior (6+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Minimum Match Score</label>
                  <span className="text-sm font-medium">{minMatchScore}%</span>
                </div>
                <Slider
                  defaultValue={[minMatchScore]}
                  max={100}
                  step={1}
                  onValueChange={(value) => setMinMatchScore(value[0])}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Skills</label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    React
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    Python
                  </Badge>
                </div>
              </div>

              <Button className="w-full" variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Reset Filters
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Based on your job requirements, our AI recommends focusing on candidates with these skills:
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">React</span>
                  <div className="flex">
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">TypeScript</span>
                  <div className="flex">
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                    <StarHalf className="h-4 w-4 fill-amber-500 text-amber-500" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Node.js</span>
                  <div className="flex">
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                    <Star className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search candidates by name, role, or skills..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select defaultValue="match">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="match">Match Score</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="experience">Experience</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Candidates ({filteredCandidates.length})</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
              <TabsTrigger value="reviewed">Reviewed</TabsTrigger>
              <TabsTrigger value="interviewed">Interviewed</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="space-y-4">
                {filteredCandidates.length > 0 ? (
                  filteredCandidates.map((candidate) => (
                    <Card key={candidate.id} className="overflow-hidden">
                      <div
                        className="flex border-l-4 h-full"
                        style={{ borderColor: `hsl(${candidate.matchScore * 1.2}, 70%, 50%)` }}
                      >
                        <div className="p-6 flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-lg">{candidate.name}</h3>
                              <p className="text-muted-foreground">{candidate.role}</p>
                            </div>
                            <Badge className={getStatusColor(candidate.status)}>{candidate.status}</Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-4 mt-4">
                            <div className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span className="text-sm">{candidate.experience}</span>
                            </div>
                            <div className="flex items-center">
                              <GraduationCap className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span className="text-sm">{candidate.education}</span>
                            </div>
                            <div className="flex items-center">
                              <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span className="text-sm">{candidate.matchScore}% Match</span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="flex flex-wrap gap-2">
                              {candidate.skills.map((skill, index) => (
                                <Badge key={index} variant="secondary">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="bg-muted w-[100px] flex flex-col items-center justify-center p-4 text-center">
                          <div
                            className="rounded-full h-16 w-16 flex flex-col items-center justify-center bg-background border-4"
                            style={{ borderColor: `hsl(${candidate.matchScore * 1.2}, 70%, 50%)` }}
                          >
                            <span className="font-bold text-lg">{candidate.matchScore}</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-2">Match Score</div>
                        </div>
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <User className="h-12 w-12 mx-auto text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">No candidates found</h3>
                    <p className="text-sm text-muted-foreground mt-2">Try adjusting your filters or search query</p>
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="new">{/* Similar content as "all" tab but filtered for new candidates */}</TabsContent>
            <TabsContent value="reviewed">
              {/* Similar content as "all" tab but filtered for reviewed candidates */}
            </TabsContent>
            <TabsContent value="interviewed">
              {/* Similar content as "all" tab but filtered for interviewed candidates */}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

