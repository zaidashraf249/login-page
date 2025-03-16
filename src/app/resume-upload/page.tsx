"use client";

import type React from "react";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Upload,
  AlertCircle,
  CheckCircle2,
  FileText,
  X,
  ChevronRight,
  Zap,
  FileUp,
  BarChart3,
  FileCheck,
  Briefcase,
  Eye,
  Download,
  Code,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";

export default function ResumeUploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [processedFiles, setProcessedFiles] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("upload");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Resume analysis mock data
  const mockAnalysisData = [
    {
      id: 1,
      name: "Alex Johnson",
      filename: "alex_johnson_resume.pdf",
      parseRate: 98,
      skills: ["React", "TypeScript", "Node.js", "AWS"],
      experience: "5 years",
      education: "B.S. Computer Science",
      matchScore: 92,
      status: "Processed",
      categories: {
        content: 95,
        format: 100,
        sections: 98,
        skills: 100,
        style: 95,
      },
    },
    {
      id: 2,
      name: "Jamie Smith",
      filename: "jamie_smith_resume.pdf",
      parseRate: 95,
      skills: ["UI/UX Design", "Figma", "Adobe XD", "HTML/CSS"],
      experience: "3 years",
      education: "M.A. Design",
      matchScore: 87,
      status: "Processed",
      categories: {
        content: 90,
        format: 100,
        sections: 92,
        skills: 95,
        style: 100,
      },
    },
    {
      id: 3,
      name: "Taylor Wilson",
      filename: "taylor_wilson_resume.pdf",
      parseRate: 97,
      skills: ["Python", "Django", "React", "PostgreSQL"],
      experience: "7 years",
      education: "B.S. Software Engineering",
      matchScore: 85,
      status: "Processed",
      categories: {
        content: 92,
        format: 100,
        sections: 95,
        skills: 98,
        style: 100,
      },
    },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);

      // Show toast notification
      toast({
        title: `${newFiles.length} file${newFiles.length > 1 ? "s" : ""} added`,
        description: "Ready to upload for AI analysis",
      });
    }
  };

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (dropAreaRef.current) {
      dropAreaRef.current.classList.add("border-primary", "bg-primary/5");
      dropAreaRef.current.classList.remove("border-muted-foreground/25");
    }
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (dropAreaRef.current) {
      dropAreaRef.current.classList.remove("border-primary", "bg-primary/5");
      dropAreaRef.current.classList.add("border-muted-foreground/25");
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();

      if (dropAreaRef.current) {
        dropAreaRef.current.classList.remove("border-primary", "bg-primary/5");
        dropAreaRef.current.classList.add("border-muted-foreground/25");
      }

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const droppedFiles = Array.from(e.dataTransfer.files).filter(
          (file) =>
            file.type === "application/pdf" ||
            file.type ===
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
            file.type === "application/msword" ||
            file.type === "text/plain"
        );

        if (droppedFiles.length === 0) {
          toast({
            title: "Invalid file format",
            description: "Please upload PDF, DOCX, DOC, or TXT files only",
            variant: "destructive",
          });
          return;
        }

        setFiles((prev) => [...prev, ...droppedFiles]);

        // Show toast notification
        toast({
          title: `${droppedFiles.length} file${
            droppedFiles.length > 1 ? "s" : ""
          } added`,
          description: "Ready to upload for AI analysis",
        });
      }
    },
    [toast]
  );

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    if (files.length === 0) {
      setError("Please select at least one resume file");
      return;
    }

    setError(null);
    setUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          setUploadComplete(true);

          // Simulate processing delay
          setTimeout(() => {
            setProcessedFiles(mockAnalysisData);
            setActiveTab("results");

            toast({
              title: "Analysis Complete",
              description: `${files.length} resumes processed successfully`,
              variant: "default",
            });
          }, 1000);

          return 100;
        }
        return prev + 100 / (files.length * 5); // Adjust speed based on file count
      });
    }, 200);
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase();

    switch (extension) {
      case "pdf":
        return <FileText className="h-5 w-5 text-red-500" />;
      case "doc":
      case "docx":
        return <FileText className="h-5 w-5 text-blue-500" />;
      case "txt":
        return <FileText className="h-5 w-5 text-gray-500" />;
      default:
        return <FileText className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getCategoryColor = (score: number) => {
    if (score >= 90)
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    if (score >= 70)
      return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300";
    return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 pb-12">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-sky-500" />
            <span className="font-bold text-xl text-white">Tech Hackers</span>
          </div>
          <nav className="ml-auto flex items-center gap-4">
            <Link
              href="/resume-upload"
              className="text-sm font-medium text-primary"
            >
              Resume Analysis
            </Link>
            <Link
              href="/candidates"
              className="text-sm font-medium hover:text-primary"
            >
              Candidates
            </Link>
            <Link
              href="/jobs"
              className="text-sm font-medium hover:text-primary"
            >
              Job Postings
            </Link>
          </nav>
        </div>
      </header>

      <div className="container max-w-6xl py-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Resume Analysis
            </h1>
            <p className="text-muted-foreground">
              Upload multiple resumes for AI-based analysis and candidate
              matching
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link href="/">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <FileUp className="h-4 w-4" />
              Upload Resumes
            </TabsTrigger>
            <TabsTrigger
              value="results"
              className="flex items-center gap-2"
              disabled={processedFiles.length === 0}
            >
              <BarChart3 className="h-4 w-4" />
              Analysis Results
              {processedFiles.length > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {processedFiles.length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="mt-6">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Upload className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>Upload Resumes</CardTitle>
                  </div>
                  <CardDescription>
                    Upload multiple resumes for AI-based analysis. We support
                    PDF, DOCX, and TXT formats.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    ref={dropAreaRef}
                    className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors duration-200 ${
                      files.length > 0
                        ? "border-primary/50 bg-primary/5"
                        : "border-muted-foreground/25"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <div className="p-4 bg-primary/10 rounded-full">
                        <Upload className="h-8 w-8 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium text-lg">
                          Drag & drop your files here
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          or click to browse files from your computer
                        </p>
                      </div>
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.docx,.doc,.txt"
                        className="hidden"
                        id="resume-upload"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        disabled={uploading}
                      />
                      <Button
                        variant="outline"
                        className="relative overflow-hidden group"
                        onClick={triggerFileInput}
                        disabled={uploading}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <FileUp className="h-4 w-4" />
                          Select Files
                        </span>
                        <span className="absolute inset-0 bg-primary/10 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                      </Button>
                    </div>
                  </div>

                  {files.length > 0 && (
                    <div className="mt-6 space-y-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium flex items-center gap-2">
                          <FileCheck className="h-4 w-4 text-primary" />
                          Selected Files ({files.length})
                        </h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setFiles([])}
                          disabled={uploading}
                          className="h-8 text-muted-foreground hover:text-destructive"
                        >
                          Clear All
                        </Button>
                      </div>
                      <div className="max-h-60 overflow-y-auto space-y-2 border rounded-md p-2">
                        {files.map((file, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center text-sm p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                          >
                            <div className="flex items-center gap-3 truncate max-w-[80%]">
                              {getFileIcon(file.name)}
                              <span className="truncate font-medium">
                                {file.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-muted">
                                {(file.size / 1024).toFixed(0)} KB
                              </span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 rounded-full hover:bg-destructive/10 hover:text-destructive"
                                onClick={() => removeFile(index)}
                                disabled={uploading}
                              >
                                <X className="h-3 w-3" />
                                <span className="sr-only">Remove file</span>
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4">
                        <Button
                          className="w-full relative overflow-hidden group"
                          onClick={handleUpload}
                          disabled={uploading || files.length === 0}
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            {uploading ? (
                              <>
                                <svg
                                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Uploading...
                              </>
                            ) : (
                              <>
                                <Zap className="h-4 w-4" />
                                Analyze Resumes
                              </>
                            )}
                          </span>
                          <span className="absolute inset-0 bg-primary/10 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                        </Button>
                      </div>

                      {uploading && (
                        <div className="space-y-2 animate-fadeIn">
                          <div className="flex justify-between text-sm">
                            <span>Upload Progress</span>
                            <span className="font-medium">
                              {Math.round(uploadProgress)}%
                            </span>
                          </div>
                          <Progress value={uploadProgress} className="h-2" />
                          <p className="text-xs text-muted-foreground text-center mt-2">
                            Uploading {files.length} resume
                            {files.length > 1 ? "s" : ""}...
                          </p>
                        </div>
                      )}

                      {error && (
                        <Alert variant="destructive" className="animate-fadeIn">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Error</AlertTitle>
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      )}

                      {uploadComplete && !uploading && (
                        <Alert className="bg-green-50 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800 animate-fadeIn">
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                          <AlertTitle>Upload Complete</AlertTitle>
                          <AlertDescription>
                            Your resumes have been uploaded successfully and are
                            being processed by our AI.
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>
                  )}
                </CardContent>
                {files.length > 0 && (
                  <CardFooter className="flex justify-between border-t pt-4 pb-2">
                    <p className="text-xs text-muted-foreground">
                      Supported formats: PDF, DOCX, DOC, TXT
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Max file size: 10MB
                    </p>
                  </CardFooter>
                )}
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <BarChart3 className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>AI Analysis Process</CardTitle>
                  </div>
                  <CardDescription>
                    Our AI system analyzes resumes and extracts key information
                    for better candidate matching
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                          1
                        </span>
                        ATS Parse Rate
                      </h3>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Badge variant="outline" className="font-normal">
                              Automated Analysis
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              Our AI analyzes how well your resume will be
                              parsed by Applicant Tracking Systems
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      An{" "}
                      <span className="font-medium">
                        Applicant Tracking System (ATS)
                      </span>{" "}
                      is a system used by employers and recruiters to quickly
                      scan a large number of job applications.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      A high parse rate ensures that the ATS can read your
                      resume, experience, and skills. This increases the chance
                      of getting your resume seen by recruiters.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                          2
                        </span>
                        Skill Extraction
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Our AI identifies and extracts key skills from your
                      resume, categorizing them into technical, soft, and
                      domain-specific skills.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                          3
                        </span>
                        Job Matching
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      We match your resume against job requirements to calculate
                      a match score, helping you find the most suitable
                      positions.
                    </p>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <div className="space-y-4">
                      <div className="relative">
                        <Progress value={98} className="h-2" />
                        <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2">
                          <div className="h-4 w-4 rounded-full bg-green-500 border-2 border-white dark:border-slate-800" />
                        </div>
                      </div>
                      <div className="text-center space-y-1">
                        <h4 className="font-medium text-lg">Great!</h4>
                        <p className="text-sm">
                          Our AI can parse 98% of resume content successfully
                          using industry-leading technology.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                    <div className="text-center space-y-4">
                      <h3 className="text-lg font-medium text-primary">
                        Job-Winning Resume In Minutes
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Our AI can help you optimize your resume to increase
                        your chances of getting hired.
                      </p>
                      <Button className="bg-primary hover:bg-primary/90">
                        Create an Enhanced Resume
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="results" className="mt-6">
            {processedFiles.length > 0 ? (
              <div className="space-y-8">
                <div className="grid gap-6 md:grid-cols-3">
                  <Card className="border-none shadow-lg">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <FileCheck className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">
                          Processed Resumes
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center py-6">
                        <div className="text-5xl font-bold text-primary">
                          {processedFiles.length}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        <div className="rounded-lg border bg-card p-3 text-center">
                          <div className="text-xs text-muted-foreground">
                            Avg. Parse Rate
                          </div>
                          <div className="text-xl font-bold text-green-600 dark:text-green-400">
                            96.7%
                          </div>
                        </div>
                        <div className="rounded-lg border bg-card p-3 text-center">
                          <div className="text-xs text-muted-foreground">
                            Avg. Match Score
                          </div>
                          <div className="text-xl font-bold text-amber-600 dark:text-amber-400">
                            88%
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <BarChart3 className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">Top Skills</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 py-2">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">React</span>
                            <span className="text-xs text-muted-foreground">
                              3 candidates
                            </span>
                          </div>
                          <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[100%] rounded-full" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">
                              TypeScript
                            </span>
                            <span className="text-xs text-muted-foreground">
                              2 candidates
                            </span>
                          </div>
                          <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[66%] rounded-full" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Python</span>
                            <span className="text-xs text-muted-foreground">
                              1 candidate
                            </span>
                          </div>
                          <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[33%] rounded-full" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">Job Match</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 py-2">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">
                              Frontend Developer
                            </span>
                            <span className="text-xs font-medium text-green-600">
                              92% match
                            </span>
                          </div>
                          <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-[92%] rounded-full" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">
                              UX Designer
                            </span>
                            <span className="text-xs font-medium text-green-600">
                              87% match
                            </span>
                          </div>
                          <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-[87%] rounded-full" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">
                              Full Stack Developer
                            </span>
                            <span className="text-xs font-medium text-green-600">
                              85% match
                            </span>
                          </div>
                          <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-[85%] rounded-full" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">
                    Resume Analysis Results
                  </h2>
                  <div className="space-y-6">
                    {processedFiles.map((file) => (
                      <Card
                        key={file.id}
                        className="border-none shadow-lg overflow-hidden"
                      >
                        <div
                          className="flex border-l-4 h-full"
                          style={{
                            borderColor: `hsl(${
                              file.matchScore * 1.2
                            }, 70%, 50%)`,
                          }}
                        >
                          <div className="p-6 flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold text-xl">
                                  {file.name}
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                  {file.filename}
                                </p>
                              </div>
                              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                {file.status}
                              </Badge>
                            </div>

                            <div className="mt-6 space-y-4">
                              <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                  <h4 className="text-sm font-medium">
                                    ATS Parse Rate
                                  </h4>
                                  <span className="text-sm font-medium">
                                    {file.parseRate}%
                                  </span>
                                </div>
                                <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                  <div
                                    className="h-full rounded-full"
                                    style={{
                                      width: `${file.parseRate}%`,
                                      backgroundColor:
                                        file.parseRate >= 90
                                          ? "#22c55e"
                                          : file.parseRate >= 70
                                          ? "#f59e0b"
                                          : "#ef4444",
                                    }}
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                <div className="space-y-1">
                                  <div className="flex justify-between items-center">
                                    <span className="text-xs text-muted-foreground">
                                      Content
                                    </span>
                                    <Badge
                                      className={getCategoryColor(
                                        file.categories.content
                                      )}
                                    >
                                      {file.categories.content}%
                                    </Badge>
                                  </div>
                                  <div className="h-1 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                    <div
                                      className="h-full rounded-full"
                                      style={{
                                        width: `${file.categories.content}%`,
                                        backgroundColor:
                                          file.categories.content >= 90
                                            ? "#22c55e"
                                            : file.categories.content >= 70
                                            ? "#f59e0b"
                                            : "#ef4444",
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="space-y-1">
                                  <div className="flex justify-between items-center">
                                    <span className="text-xs text-muted-foreground">
                                      Format
                                    </span>
                                    <Badge
                                      className={getCategoryColor(
                                        file.categories.format
                                      )}
                                    >
                                      {file.categories.format}%
                                    </Badge>
                                  </div>
                                  <div className="h-1 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                    <div
                                      className="h-full rounded-full"
                                      style={{
                                        width: `${file.categories.format}%`,
                                        backgroundColor:
                                          file.categories.format >= 90
                                            ? "#22c55e"
                                            : file.categories.format >= 70
                                            ? "#f59e0b"
                                            : "#ef4444",
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="space-y-1">
                                  <div className="flex justify-between items-center">
                                    <span className="text-xs text-muted-foreground">
                                      Sections
                                    </span>
                                    <Badge
                                      className={getCategoryColor(
                                        file.categories.sections
                                      )}
                                    >
                                      {file.categories.sections}%
                                    </Badge>
                                  </div>
                                  <div className="h-1 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                    <div
                                      className="h-full rounded-full"
                                      style={{
                                        width: `${file.categories.sections}%`,
                                        backgroundColor:
                                          file.categories.sections >= 90
                                            ? "#22c55e"
                                            : file.categories.sections >= 70
                                            ? "#f59e0b"
                                            : "#ef4444",
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="space-y-1">
                                  <div className="flex justify-between items-center">
                                    <span className="text-xs text-muted-foreground">
                                      Skills
                                    </span>
                                    <Badge
                                      className={getCategoryColor(
                                        file.categories.skills
                                      )}
                                    >
                                      {file.categories.skills}%
                                    </Badge>
                                  </div>
                                  <div className="h-1 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                    <div
                                      className="h-full rounded-full"
                                      style={{
                                        width: `${file.categories.skills}%`,
                                        backgroundColor:
                                          file.categories.skills >= 90
                                            ? "#22c55e"
                                            : file.categories.skills >= 70
                                            ? "#f59e0b"
                                            : "#ef4444",
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="space-y-1">
                                  <div className="flex justify-between items-center">
                                    <span className="text-xs text-muted-foreground">
                                      Style
                                    </span>
                                    <Badge
                                      className={getCategoryColor(
                                        file.categories.style
                                      )}
                                    >
                                      {file.categories.style}%
                                    </Badge>
                                  </div>
                                  <div className="h-1 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                    <div
                                      className="h-full rounded-full"
                                      style={{
                                        width: `${file.categories.style}%`,
                                        backgroundColor:
                                          file.categories.style >= 90
                                            ? "#22c55e"
                                            : file.categories.style >= 70
                                            ? "#f59e0b"
                                            : "#ef4444",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="pt-4 border-t">
                                <h4 className="text-sm font-medium mb-2">
                                  Extracted Skills
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                {file?.skills?.map((skill, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                                >
                                  {skill}
                                </Badge>
                              ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-muted w-[120px] flex flex-col items-center justify-center p-4 text-center">
                            <div
                              className="rounded-full h-20 w-20 flex flex-col items-center justify-center bg-background border-4"
                              style={{
                                borderColor: `hsl(${
                                  file.matchScore * 1.2
                                }, 70%, 50%)`,
                              }}
                            >
                              <span className="font-bold text-2xl">
                                {file.matchScore}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                Match Score
                              </span>
                            </div>
                            <div className="mt-4 space-y-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full h-8"
                              >
                                <Eye className="h-3 w-3 mr-1" />
                                View
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full h-8"
                              >
                                <Download className="h-3 w-3 mr-1" />
                                Export
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setActiveTab("upload")}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload More Resumes
                    </Button>
                    <Button>
                      <ChevronRight className="h-4 w-4 ml-2" />
                      View All Candidates
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium">No Resumes Analyzed Yet</h3>
                <p className="text-muted-foreground mt-2 max-w-md">
                  Upload resumes to see AI-powered analysis results and
                  candidate matching.
                </p>
                <Button className="mt-6" onClick={() => setActiveTab("upload")}>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Resumes
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
