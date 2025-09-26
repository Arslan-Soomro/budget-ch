"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSignInSchema, UserSignInValues } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

export default function SignIn() {
  const form = useForm<UserSignInValues>({
    resolver: zodResolver(userSignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: UserSignInValues) {
    console.log("✅ Submitted:", values);
  }

  return (
    <Card className="h-full w-full flex-1 border-1 p-6 shadow-lg">
      <h1 className="text-center text-xl font-semibold">Sign in</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl className="rounded-lg px-4 py-5">
                  <Input
                    type="email"
                    placeholder="your@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl className="rounded-lg px-4 py-5">
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* show password */}
          <FormItem className="flex items-center justify-between border-0">
            <div className="flex items-center gap-2">
              <Checkbox className="cursor-pointer" />
              <span className="text-sm">Show password</span>
            </div>
            <Link
              className="text-sm text-blue-600 transition-all duration-300 hover:underline"
              href="/forgot-password"
            >
              Forgot password?
            </Link>
          </FormItem>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full cursor-pointer rounded-xl py-5 font-bold text-white"
          >
            Sign in
          </Button>

          {/* Google sign-in */}
          <Button
            type="button"
            variant="outline"
            className="flex w-full cursor-pointer items-center gap-3 rounded-xl py-5 font-bold"
          >
            <Image
              src="/assets/images/google.svg"
              width={15}
              height={15}
              alt="google image"
            />
            <span>Sign in with Google</span>
          </Button>

          <Separator />
          <div className="text-center text-sm text-slate-500">
            <span>No account yet? </span>
            <Link
              className="text-sm text-blue-600 transition-all duration-300 hover:underline"
              href="/signup"
            >
              Create account
            </Link>
          </div>
        </form>
      </Form>
    </Card>
  );
}
