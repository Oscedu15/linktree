"use client";
import { AddLinkFormProps } from "./AddLinkForm.types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./AddLinkForm.form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Plus } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { linksSocial } from "@/data/linksSocialNetwork";
import Image from "next/image";

export function AddLinkForm(props: AddLinkFormProps) {
  const { onReload } = props;
  const [open, setOpen] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      icon:"",
      name:"",
      url:"",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };
  return (
    <div className="mt-6">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            className="bg-purple-600 text-white rounded-full
            py-6 text-lg w-full hover:bg-purple-800 transition-all duration-300"
          >
            <Plus className="w-7 h-7" />
            Add social network
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">
              Add new social network
            </DialogTitle>
            <div className="grid gap-4 py-4">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="icon"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Select your icon</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={(value) => {
                              field.onChange(value);
                              const selectedLink = linksSocial?.find(
                                (link) => link.icon === value
                              );
                              if (selectedLink) {
                                form.setValue("name", selectedLink.name);
                              }
                            }}
                            value={field.value || ""}
                            className="grid grid-cols-4 space-x-1"
                          >
                            {linksSocial?.map((link, index) => (
                              <FormItem
                                key={index}
                                className="flex items-center
                                  gap-1 space-x-0 space-y-0"
                              >
                                <FormControl>
                                  <RadioGroupItem value={link.icon} />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  <Image
                                    src={link.icon}
                                    width={40}
                                    height={40}
                                    alt="icon"
                                  />
                                </FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Enter Url: </FormLabel>
                        <FormControl>
                          <Input placeholder="URL" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Social Network Name:</FormLabel>
                        <FormControl>
                          <Input placeholder="Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    className="bg-purple-600 text-white rounded-full
            w-full hover:bg-purple-800 transition-all duration-300"
                    type="submit"
                  >
                    Create New Social Network
                  </Button>
                </form>
              </Form>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
