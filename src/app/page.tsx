"use client"

import { useState } from "react"
import Link from "next/link"
import { Code, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState("student")

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
            <Link href={activeTab === "student" ? "/register" : "/register/recruiter"}>
              <Button variant="outline" className="text-sky-500 border-sky-500 hover:bg-sky-950">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-slate-800 border-slate-700">
          <CardHeader>
          <Tabs defaultValue="student" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 bg-slate-700 ">
                <TabsTrigger value="student" className="  hover:bg-sky-700 text-white ">Student</TabsTrigger>
                <TabsTrigger value="recruiter" className="  hover:bg-sky-700 text-white">Recruiter</TabsTrigger>
              </TabsList>
              <TabsContent value="student" className="mt-4">
                <h2 className="text-2xl font-bold text-center text-white">Student Login</h2>
                <p className="text-center text-slate-400 mt-1">Access your student account</p>
              </TabsContent>
              <TabsContent value="recruiter" className="mt-4">
                <h2 className="text-2xl font-bold text-center text-white">Recruiter Login</h2>
                <p className="text-center text-slate-400 mt-1">Access your recruiter dashboard</p>
              </TabsContent>
            </Tabs>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium text-slate-300">
                Username
              </label>
              <Input
                id="username"
                placeholder="Enter your username"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-slate-300">
                  Password
                </label>
                <Link href="/forgot-password" className="text-xs text-sky-500 hover:text-sky-400">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="bg-slate-700 border-slate-600 text-white pr-10"
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
            </div>
            <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">Login</Button>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-2">
            <Link href="/guest" className="text-sm text-slate-400 hover:text-slate-300">
              Continue as guest
            </Link>
            <p className="text-sm text-slate-400">
              Don't have an account?{" "}
              <Link href="/register" className="text-sky-500 hover:text-sky-400">
                Register now
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

