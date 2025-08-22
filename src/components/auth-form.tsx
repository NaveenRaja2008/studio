"use client";

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from 'next/link';

interface AuthFormProps {
  type: 'login' | 'signup';
}

export function AuthForm({ type }: AuthFormProps) {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission, validation, and API calls here.
    // For now, we'll just navigate to the home page.
    router.push('/');
  };
  
  const isLogin = type === 'login';

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-20rem)] bg-background px-4">
      <Card className="w-full max-w-sm">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle className="text-2xl font-headline">{isLogin ? 'Login' : 'Sign Up'}</CardTitle>
            <CardDescription>
              {isLogin ? "Enter your name and mobile to login to your account." : "Enter your details to create an account."}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="John Doe" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input id="mobile" type="tel" placeholder="123-456-7890" required />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full" type="submit">{isLogin ? 'Sign in' : 'Create Account'}</Button>
            <div className="text-center text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <Link href={isLogin ? "/signup" : "/login"} className="underline ml-1">
                {isLogin ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
