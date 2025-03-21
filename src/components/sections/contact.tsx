"use client";

import Link from "next/link";

import { CONTACTS } from "@/data/contacts";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-6xl sm:text-8xl font-bold mb-4">
              Get in touch
            </h2>
            <p className="text-zinc-400 mb-6">
              feel free to expose your ideas:
            </p>
            <div className="flex gap-4">
              {CONTACTS.map(({ name, link, icon: IconComponent }, index) => {
                return (
                  <Link
                    key={`${name}_${index}`}
                    href={link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="hover:text-zinc-400"
                  >
                    <IconComponent className="size-12" />
                  </Link>
                );
              })}
            </div>
          </div>
          {/* <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="bg-zinc-800 border-zinc-700"
                        placeholder="name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="bg-zinc-800 border-zinc-700"
                        placeholder="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Message"
                        className="bg-zinc-800 border-zinc-700"
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                send Message
              </Button>
            </form>
          </Form> */}
        </div>
      </div>
    </section>
  );
}
