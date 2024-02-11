import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation'

import Button from "@components/ui/Button";

export default async function NewTopic() {
  async function handleSubmit(formData) {
    // Create FormData object from the form.
    "use server";
    // Use FormData to get the values.
    const title = formData.get("title");
    const description = formData.get("description");

    console.log(title, description);

    const response = await fetch("http://localhost:3000/api/topics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    console.log(response.status);

    if (response.status === 200) {
      console.log("Topic created successfully");
      revalidatePath("/");
      redirect("/");
      // Consider redirecting the user or showing a success message.
    } else {
      console.log("Something went wrong");
      // Consider showing an error message based on response.
    }
  }

  return (
    <main className=" w-screen min-h-screen px-auto flex flex-col justify-center items-center text-black bg-blue-500">
      <form
        action={handleSubmit}
        className="flex flex-col gap-4 bg-red-400 p-8 rounded-md shadow-md w-96"
      >
        <h1 className="text-4xl font-bold">Create a new topic</h1>
        <div className="flex flex-col border-white rounded-md border-2 p-2">
          <label
            htmlFor="title"
            className="text-xl font-bold mb-2 text-black"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="p-2 rounded-md shadow-md"
          />
        </div>
        <div className="flex flex-col border-white border-2 p-2 rounded-md">
          <label
            htmlFor="description"
            className="text-xl font-bold mb-2 text-black"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="pl-2 pb-12 pt-2 rounded-md shadow-md"
          />
        </div>
        <Button>Create</Button>{" "}
      </form>
    </main>
  );
}
