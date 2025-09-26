"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  userForgotPasswordSchema,
  UserForgotPasswordValues,
} from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

export default function ForgotPassword() {
  const form = useForm<UserForgotPasswordValues>({
    resolver: zodResolver(userForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: UserForgotPasswordValues) {
    console.log("✅ Submitted:", values);
  }

  return (
    <Card className="h-full w-full flex-1 border-1 p-6 shadow-lg">
      <h1 className="text-center text-xl font-semibold">Password reset</h1>

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

          {/* Buttons */}
          <div className="flex items-center justify-between gap-2">
            <Button
              type="submit"
              className="w-full flex-1 cursor-pointer rounded-xl bg-blue-800 py-5 font-bold text-white"
            >
              Send reset email
            </Button>
            <Link className="flex-1" href="/signin">
              <Button
                type="button"
                variant="outline"
                className="w-full cursor-pointer items-center gap-3 rounded-xl py-5 font-bold underline"
              >
                Back to sign in
              </Button>
            </Link>
          </div>
        </form>
      </Form>
    </Card>
  );
}
