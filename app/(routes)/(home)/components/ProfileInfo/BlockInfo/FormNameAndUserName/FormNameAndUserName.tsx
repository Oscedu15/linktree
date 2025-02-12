"use client";
import { useUserInfo } from "@/hooks/useUser";
import { FormNameAndUserNameProps } from "./FormNameAndUserName.types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formSchema } from "./FormNameAndUserName.form";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

export function FormNameAndUserName(props: FormNameAndUserNameProps) {
  const { setOpenDialog } = props;
  const { user, reloadUser } = useUserInfo();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: user?.username || "",
      name: user?.name || "",
      bio: user?.bio || "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    //✅ This will be type-safe and validated.
    try {
      await axios.patch("/api/update-user", {
        name: values.name,
        username: values.username,
        bio: values.bio,
      });
      setOpenDialog(false);
      reloadUser();
      toast({
        title: "Values Update ✅",
      });
      form.reset();
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name:</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username:</FormLabel>
                <FormControl>
                  <Input placeholder="@profile" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio:</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-purple-600 hover:bg-purple-800 text-white rounded-full w-full py-6 text-lg transition-all duration-300"
          >
            Save
          </Button>
        </form>
      </Form>
    </div>
  );
}
